"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Interests() {
  const [progress, setProgress] = useState(55);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const totalOptions = 3; //TOTAL NUMBER OF OPTIONS REQUIRED
  const options = [
    "Cardio",
    "Weightlifting",
    "Bodybuilding",
    "Calisthenics",
    "Social interaction",
    "Yoga",
    "Zumba",
    "CrossFit",
    "Boxing/martial arts",
  ];
  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        //if already selected,deselect it
        return prevSelected.filter((item) => item !== option);
      } else if (prevSelected.length < totalOptions) {
        //if not selected,add it to the list
        return [...prevSelected, option];
      }
      //if already 3 options selected,do nothing
      return prevSelected;
    });
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md ">
        {/* PROGRESS BAR */}
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-0">
            <div
              className="bg-pink-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        {/* TOP */}
        <div className=" p-1">
          <div className="mt-4 px-2 justify-start flex">
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
          <div className="p-2 flex flex-col">
            <h1 className="font-bold text-3xl">What are you into?</h1>
          </div>
        </div>
        <div className="ring-1 ring-gray-200 w-screen  items-center">
          <div></div>
        </div>
      </div>
      {/* INTERESTS OPTIONS */}
      <div className="flex-1 overflow-auto pt-24 pb-16 ">
        <section className="flex flex-col gap-4 p-3 ">
          {options.map((option) => (
            <button
              className={`ring-2 px-3 py-1 text-center rounded-full text-xl ${
                selectedOptions.includes(option)
                  ? "bg-pink-500 text-white"
                  : "text-gray-600 ring-gray-400"
              }`}
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </section>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col justify-center gap-7 fixed bottom-0 left-0 right-0 bg-white shadow-md  ">
        <div className="ring-1 ring-gray-200">
          <div></div>
        </div>
        <div className="ring-1 ring-white bg-pink-600 rounded-full p-1 mx-5  text-center justify-center">
            <Link href="/username/b-day/gender/userInterests/uploadPic">
          <button
            className={`w-full py-2 rounded-full text-white font-bold text-2xl ${
              selectedOptions.length === totalOptions
                ? "bg-pink-600"
                : "bg-gray-400"
            }`}
            disabled={selectedOptions.length !== totalOptions}
          >
            Next ({selectedOptions.length}/{totalOptions})
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
