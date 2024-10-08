"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Signup() {
  return (
    <div className="flex flex-col items-center  md:flex-row justify-between">
      <div className="flex flex-col items-center md:w-1/2 p-2 gap-6 lg:bg-black lg:h-screen ">
        <Image
          src="/logo1.png"
          width={50}
          height={40}
          alt="Logo"
          className="rounded-full mt-3 mx-2"
        />
        <h1 className="font-bold text-3xl lg:text-white">Signup</h1>
        <p className="text-center font-serif lg:text-white">
          By tapping Log in or continue,you agree to our
          <a href="/" className="font-semibold text-blue-500 underline">
            Terms
          </a>
          .Learn how we process your data in our
          <a href="/" className="font-semibold text-blue-500 underline">
            Privacy Policy
          </a>
          and
          <a href="/" className="font-semibold text-blue-500 underline">
            Cookie Policy
          </a>
        </p>
        <Link
          href="/signup/userNumber"
          className="flex items-center justify-center  lg:bg-white ring-2 ring-gray-500 py-2 rounded-full w-full"
        >
          <button type="submit" className="flex space-x-3">
            <Image src="/google.png" width={20} height={20} alt="googlepic" />
            <p className="font-bold lg:text-black">Continue with Google</p>
          </button>
        </Link>
        <Link
          href="/signup/userNumber"
          className="items-center flex py-2 justify-center  lg:bg-white ring-2 ring-gray-500 rounded-full w-full "
        >
          <button type="submit" className="flex space-x-3">
            <Image
              src="/facebook.png"
              width={20}
              height={20}
              alt="facebookpic"
            />
            <p className="font-bold lg:text-black">Sign up using Facebook</p>
          </button>
        </Link>
        <Link
          href="/signup/userNumber"
          className="items-center flex lg:bg-white py-2 justify-center ring-2 ring-gray-500 rounded-full w-full "
        >
          <button type="submit" className="flex space-x-3 ">
            <Image
              src="/phone.png"
              className="bg-black rounded-full"
              width={20}
              height={20}
              alt="phone-img"
            />
            <p className="font-bold lg:text-black ">Sign up with phone number</p>
          </button>
        </Link>
        <span>
          <a href="/" className="font-semibold text-blue-500 underline">
            Trouble loggin in?
          </a>
        </span>
      </div>
      <div className="bg-red-600 w-1/2 h-screen max-sm:hidden max-md:hidden">
        <Image
          src="/logo1.png"
          width={300}
          height={100}
          className="w-full h-full"
          alt="logo"
          quality={100}
          priority={true}
        ></Image>
      </div>
    </div>
  );
}
