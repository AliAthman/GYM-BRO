"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Interests() {
  const [progress, setProgress] = useState(98);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const totalOptions = 3; //TOTAL NUMBER OF OPTIONS REQUIRED
  const options = [];
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
          <div className="w-full bg-gray-200 ring-1 ring-gray-600 rounded-full h-3">
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
          <div className="flex  px-2 py-3 flex-col gap-3">
            <h1 className="font-bold text-3xl">Add your recent pics</h1>
            <span className="text-gray-600">
              Upload 2 photos to start. Add 4 or more to make your profile stand
              out.
            </span>
          </div>
        </div>
        <div className="ring-1 ring-gray-200 w-screen  items-center">
          <div></div>
        </div>
      </div>
      {/* PICTURES */}
      <div className="flex-1 overflow-auto pt-24 pb-16  ">
        <section className=" grid grid-cols-3 grid-rows-2 items-center gap-x-3 p-5 ">
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 mt-20 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 z-10">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"

              />
            </div>
          </div>
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 mt-20 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 z-10">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"

              />
            </div>
          </div>
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 mt-20 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 z-10">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"

              />
            </div>
          </div>
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 -mt-12 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 ">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"

              />
            </div>
          </div>
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 -mt-12 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 ">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"
              />
            </div>
          </div>
          <div className="border-dashed border-4 rounded-md flex flex-col justify-end items-end  h-32 -mt-12 border-gray-300 bg-gray-100">
            <div className=" relative left-2 rounded-full top-3 ">
              <Image
                src="/plus.png"
                className=" ring-2  p-1 shadow-md bg-red-700 rounded-full "
                width={40}
                height={30}
                alt="plussign"
              />
            </div>
          </div>
         
        </section>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col justify-center gap-7 fixed bottom-0 left-0 right-0 bg-white shadow-md  ">
        <div className="ring-1 ring-gray-200">
          <div></div>
        </div>
        <div className="ring-1 ring-white bg-pink-600 rounded-full p-1 mx-5  text-center justify-center">
          <Link href="/homepage">
            <button
              className={`w-full py-2 rounded-full text-white font-bold text-2xl ${
                selectedOptions.length === totalOptions
                  ? "bg-pink-600"
                  : "bg-gray-400"
              }`}
              // disabled={selectedOptions.length !== totalOptions}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
