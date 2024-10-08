"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Gender() {
  const [progress, setProgress] = useState(60);
  const [selectedGender, setSelectedGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle button click
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    // Optionally update progress or perform other actions
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      {/* PROGRESS BAR */}
      <div className="relative">
        <div className="w-full bg-gray-200 ring-1 mt-2 ring-gray-600 rounded-full h-3">
          <div
            className="bg-pink-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="p-4">
        {/* TOP */}
        <div className="p-3 justify-start flex">
          <Link href="/username">
            <Image
              src="/backarrow.png"
              width={20}
              height={20}
              className="rounded-full bg-transparent"
              alt="Back"
            />
          </Link>
        </div>
        <p className="text-2xl font-extrabold p-3 z-10">
          What&apos;s your gender?
        </p>
        {/* GENDER OPTIONS */}
        <div className="flex mt-9 flex-col space-y-5 md:flex-row  md:space-y-0 md:space-x-4 items-center w-full">
          <button
            onClick={() => handleGenderSelect("man")}
            className={`px-4 py-2 rounded-full border-2 w-full  ${
              selectedGender === "man"
                ? "bg-gray-300 text-black font-bold border-pink-600"
                : "bg-white text-gray-800 border-gray-500"
            }`}
          >
            Man
          </button>
          <button
            onClick={() => handleGenderSelect("woman")}
            className={`px-4 py-2 rounded-full w-full border-2 ${
              selectedGender === "woman"
                ? "bg-gray-300 text-black font-bold border-pink-600"
                : "bg-white text-gray-800 border-gray-500"
            }`}
          >
            Woman
          </button>
        </div>
        <div className="flex items-center justify-center mt-9">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="showGender"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div
              className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer ${
                isChecked
                  ? "bg-pink-600 border-pink-600"
                  : "bg-white border-gray-500"
              }`}
              onClick={handleCheckboxChange}
            >
              {isChecked && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <label
              htmlFor="showGender"
              className="ml-3 text-gray-500 font-medium cursor-pointer"
            >
              Show my gender on my profile
            </label>
          </div>
        </div>
        <Link
          href="/username/b-day/gender/userInterests"
          className="items-center justify-center flex font-bold text-white p-3 bg-pink-600 rounded-full ring-2 ring-transparent mt-8"
        >
          <p>Next</p>
        </Link>
      </div>
    </div>
  );
}
