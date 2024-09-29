
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../styles/globals.css"
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full h-20 bg-white shadow-lg flex justify-between items-center">
      {/* LOGO */}
      <div className="inline-flex justify-around p-3">
        <Image
          src="/logo1.png"
          width={50}
          height={40}
          alt="Logo"
          className="rounded-full mt-3 mx-2 animate-spin-color "
        />
        <p className="mt-5 text-lg font-bold text-shadow-md animate-bounce-text ">Gym Bro</p>
      </div>
      {/* MENU TOGGLE */}
      <div className="flex ">
        <div className="hidden md:flex  space-x-3  items-center mr-7">
          <Link
            href="/login"
            className="cursor-pointer bg-black rounded-lg text-white px-3 shadow-white shadow-md font-semibold hover:transition hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="cursor-pointer  bg-black rounded-lg text-white px-3  shadow-white shadow-md hover:transition hover:bg-blue-600 font-semibold"
          >
            Sign up
          </Link>
        </div>
        <div className="md:hidden">
          <div
            className="mt-4 mx-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image
              src={open ? "/close.png" : "/menu.svg"}
              width={open ? 30 : 50}
              height={open ? 30 : 40}
              alt="Menu Toggle"
            />
          </div>
          <div
            className={`fixed top-0 left-0 h-full bg-black text-white p-4 transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            } w-full z-10`}
          >
            <div className="flex flex-col h-full justify-start items-start gap-4  text-xl">
              {/* LOGO AND CLOSE BUTTON AT THE TOP */}
              <div className="flex items-center justify-between w-full  px-4">
                <div className="inline-flex items-center">
                  <Image
                    src="/logo1.png"
                    width={50}
                    height={40}
                    alt="Logo"
                    className="rounded-full"
                  />
                  <p className="ml-2 text-lg font-bold text-shadow-md">
                    Gym Bro
                  </p>
                </div>
                <div
                  className="cursor-pointer bg-black p-2 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <Image src="/close.png" width={30} height={30} alt="Close" />
                </div>
              </div>
              {/* MENU LINKS */}
              <Link
                href="/login"
                className="cursor-pointer bg-white w-full text-center py-2 rounded-lg text-black shadow-md font-semibold hover:transition hover:bg-blue-600 mt-10"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="cursor-pointer bg-white w-full text-center py-2 rounded-lg text-black shadow-md font-semibold hover:transition hover:bg-blue-600"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
