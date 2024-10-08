"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { location, gyms, users } from "../../../../public/data/Alldata"; // Adjust path if necessary
import LogoNav from "../../../components/LogoNav";
import AppFooter from "../../../components/AppFooter";
import Image from "next/image";

export default function LocationPage() {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];

  // Find the location object based on the location name in the URL
  const selectedLocation = location.find((loc) => loc.name === pathname);

  // State to track the current user index and liked users
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [likedUsers, setLikedUsers] = useState([]);

  // Check if the location exists
  if (!selectedLocation) {
    return <div>Location not found</div>;
  }

  const gymsinThatLocation = gyms.find(
    (gym) => gym.location === selectedLocation.name
  );
  const usersinThatLocation = users.filter(
    (user) => user.gym.location === selectedLocation.name
  );

  // Functions to handle user navigation and actions
  const handleNextUser = () => {
    setCurrentUserIndex(
      (prevIndex) => (prevIndex + 1) % usersinThatLocation.length
    );
  };

  const handlePreviousUser = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === 0 ? usersinThatLocation.length - 1 : prevIndex - 1
    );
  };

  const handleLike = () => {
    const user = usersinThatLocation[currentUserIndex];
    setLikedUsers((prevLikedUsers) => [...prevLikedUsers, user]);
    handleNextUser();
    router.push('/Liked-users'); // Navigate to liked users page
  };

  const handleDislike = () => {
    handleNextUser();
  };

  return (
    <div className="flex flex-col h-screen text-cyan-50 bg-gray-200 overflow-hidden">
      <LogoNav />
      {/* BIG center CONTAINER */}
      <div className="flex-1 flex flex-col justify-center bg-black items-center">
        <div className="w-full h-[510px] xl:h-[734px] md: relative">
          {usersinThatLocation.length > 0 ? (
            <div
              className="flex flex-col items-center -mt-3 justify-end w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `url(${usersinThatLocation[currentUserIndex].image})`,
              }}
            >
              <div className="p-4 absolute bottom-14 w-full">
                <p className="text-2xl text-red-800 font-extrabold mb-1">
                  {usersinThatLocation[currentUserIndex].name}
                </p>
                <p className="text-lg text-green-700 font-bold">
                  {usersinThatLocation[currentUserIndex].age} years old
                </p>
                <p className="mt-2">
                  <span className="text-blue-800 font-bold text-2xl">
                    Interests:
                  </span>
                  <span className="text-bold text-xl">
                    {usersinThatLocation[currentUserIndex].interests.join(", ")}
                  </span>
                </p>
              </div>

              <div className="absolute bottom-0 flex justify-center py-1 items-center w-full">
                <div className="bg-black bg-opacity-50 py-2 px-3 flex justify-between w-full">
                  <button
                    onClick={handlePreviousUser}
                    className="rounded-full ring-1 ring-orange-300 p-3 bg-black"
                  >
                    <Image src="/undo.png" width={24} height={24} alt="undo" />
                  </button>
                  <button
                    onClick={handleLike}
                    className="ring-1 ring-green-500 p-3 bg-black rounded-full"
                  >
                    <Image src="/heart.png" width={30} height={30} alt="heart" />
                  </button>
                  <button
                    onClick={handleDislike}
                    className="rounded-full ring-1 ring-red-500 p-3 bg-black"
                  >
                    <Image src="/close.png" width={24} height={24} alt="close" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 mt-4">No users found for this location.</p>
          )}
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
