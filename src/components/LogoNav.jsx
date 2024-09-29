"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function LogoNav() {

  return (
    <section className="w-full h-20 bg-white shadow-lg top-0 left-0 right-0 z-50  fixed flex justify-between items-center">
      {/* LOGO */}
      <div className="inline-flex justify-around p-3">
        <Image
          src="/logo1.png"
          width={50}
          height={40}
          alt="Logo"
          className="rounded-full mt-3 mx-2"
          
        />
        <p className="mt-5 text-lg font-bold text-black text-shadow-md">Gym Bro</p>
      </div>
    </section>
  );
}
