
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { location } from "../../../public/data/Alldata"; // Adjust path if necessary
import LogoNav from "../../components/LogoNav";

export default function Homepage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLocations(location);
    console.log("Fetched locations:", location);
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDoneClick = () => {
    if (selectedLocation) {
      // Find the location object by its ID
      const selectedLoc = locations.find((loc) => loc.id === selectedLocation);

      if (selectedLoc) {
        // Navigate to the dynamic route using the location name
        const locationName = selectedLoc.name.toLowerCase();
        router.push(`/locations/${locationName}`);
      }
    }
  };

  return (
    <div className="overflow-y-hidden max-h-screen">
      <div className="bg-white h-screen flex flex-col items-center">
        <LogoNav></LogoNav>
        <div className="flex flex-col p-4 gap-4 items-center shadow-md shadow-black mt-40">
          <h1 className="text-black text-2xl font-bold">
            Choose your location
          </h1>
          <select
            name="location"
            id="location"
            className="p-3 text-xl font-serif"
            onChange={handleLocationChange}
            value={selectedLocation}
          >
            <option value="" className="ring-2 ring-black">Select a location</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleDoneClick}
          className="text-white border-2 border-gray-500 p-5 rounded-full hover:bg-blue-600 bg-slate-600 mt-20 shadow-md shadow-black"
        >
          Done
        </button>
      </div>
    </div>
  );
}
