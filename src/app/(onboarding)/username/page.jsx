
"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function UserName() {
    const [progress, setProgress] = useState(22); // Example: 33% for the current step

    return (
        <div className="flex flex-col p-4 gap-8">
            {/* PROGRESS BAR */}
            <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-pink-600 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* CANCEL ACCOUNT CREATING */}
            <div>
                <Image src="/close.png" width={30} height={30} className="" alt="Close" />
            </div>
            <h1 className="font-bold text-3xl text-gray-800">What&apos;s your first name?</h1>
            {/* INPUT NAME */}
            <div>
                <input
                    type="text"
                    required
                    autoFocus
                    className="rounded-md ring-1 focus:ring-blue-400 ring-gray-500 p-3 bg-gray-100 focus:outline-none w-full"
                />
            </div>
            <p className="text-gray-500">
                This is how it&apos;ll appear on your profile.{" "}
                <strong className="text-gray-600">Can&apos;t change it later</strong>
            </p>
            <Link href="/username/b-day" className="items-center justify-center flex font-bold text-white p-3 bg-pink-600 rounded-full ring-2 ring-transparent mt-8">
                <p>Next</p>
            </Link>
        </div>
    );
}
