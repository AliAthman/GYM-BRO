"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Bday() {
  const [progress, setProgress] = useState(40); // Example: 33% for the current step
  return (
    <div className="flex flex-col bg-white ">
      {/* PROGRESS BAR */}
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 ring-1 mt-2 ring-gray-600">
          <div
            className="bg-pink-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* TOP */}
      <div className="p-4">
        <div className="p-3">
          <Link href="/username">
            <Image src="/backarrow.png" width={20} height={20} alt="arrow" />
          </Link>
        </div>
        <div className=" flex py-6 justify-start">
          <h1 className="font-extrabold text-2xl  text-gray-900">
            Your b-day?
          </h1>
        </div>
        <div className="py-4">
          {/* DATE */}
          <form action="" className="flex items-center px-2">
            <div className="flex flex-col">
              <label For="day">Day</label>
              <input
                type="number"
                name="day"
                id="day"
                className="ring-1 rounded-md w-4/5 p-3 ring-gray-400 bg-gray-100 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label For="month">Month</label>
              <input
                type="number"
                name="month"
                id="month"
                className="ring-1 rounded-md w-4/5 p-3 ring-gray-400 bg-gray-100 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label For="year">Year</label>
              <input
                type="number"
                name="year"
                id="year"
                autoFocus
                required
                className="ring-1 rounded-md ring-gray-400 bg-gray-100 focus:ring-blue-400 focus:outline-none w-4/5 p-3"
              />
            </div>
          </form>
          <p className="text-gray-500 py-5 px-2">
            Your profile shows your age, not your date of birth.
          </p>
        </div>
        <div>
          <Link
            href="/username/b-day/gender"
            className="items-center justify-center flex font-bold text-white p-3 bg-pink-600 rounded-full ring-2 ring-transparent mt-8"
          >
            <p>Next</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
