"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { users } from "../../../public/data/Alldata"; // Adjust path if necessary
import LogoNav from "../../components/LogoNav";
import AppFooter from "../../components/AppFooter";
import Image from "next/image";

export default function LikedUsersPage() {
  const [likedUsers, setLikedUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the liked users from local storage or state
    const storedLikedUsers = JSON.parse(localStorage.getItem('likedUsers')) || [];
    setLikedUsers(storedLikedUsers);
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-screen text-cyan-50  bg-gray-200 overflow-hidden">
      <LogoNav />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Liked Users</h1>
        {likedUsers.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {likedUsers.map((user) => (
              <div key={user.id} className="flex flex-col items-center">
                <Image src={user.image} width={150} height={150} alt={user.name} className="rounded-full"/>
                <p className="text-xl font-semibold mt-2">{user.name}</p>
                <p className="text-lg">{user.age} years old</p>
                <p className="text-md">{user.interests.join(", ")}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-4">No users liked yet.</p>
        )}
        <button onClick={handleGoBack} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Go Back
        </button>
      </div>
      <AppFooter />
    </div>
  );
}
