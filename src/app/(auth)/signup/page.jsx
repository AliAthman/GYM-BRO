"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Signup() {
  return (
    <div className="flex flex-col items-center p-2 gap-6">
      <Image
        src="/logo1.png"
        width={50}
        height={40}
        alt="Logo"
        className="rounded-full mt-3 mx-2"
        
      />
      <h1 className="font-bold text-3xl">Signup</h1>
      <p className="text-center font-serif">
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
        className="flex items-center justify-center   ring-2 ring-gray-500 py-2 rounded-full w-full"
      >
        <button type="submit" className="flex space-x-3">
          <Image src="/google.png" width={20} height={20} alt="googlepic" />
          <p className="font-bold">Continue with Google</p>
        </button>
      </Link>
      <Link
        href="/signup/userNumber"
        className="items-center flex py-2 justify-center ring-2 ring-gray-500 rounded-full w-full "
      >
        <button type="submit" className="flex space-x-3">
          <Image src="/facebook.png" width={20} height={20} alt="facebookpic"/>
          <p className="font-bold">Sign up using Facebook</p>
        </button>
      </Link>
      <Link
        href="/signup/userNumber"
        className="items-center flex py-2 justify-center ring-2 ring-gray-500 rounded-full w-full "
      >
        <button type="submit" className="flex space-x-3">
          <Image
            src="/phone.png"
            className="bg-black rounded-full"
            width={20}
            height={20}
            alt="phone-img"
          />
          <p className="font-bold ">Sign up with phone number</p>
        </button>
      </Link>
      <span>
        <a href="/" className="font-semibold text-blue-500 underline">
          Trouble loggin in?
        </a>
      </span>
    </div>
  );
}
