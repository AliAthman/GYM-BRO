"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function UserNumber() {
  const [countryCode, setCountryCode] = useState("+254");
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    switch (selectedCountry) {
      case "kenya":
        setCountryCode("713487653");
        break;
      case "tanzania":
        setCountryCode("1234567890");
        break;
      case "uganda":
        setCountryCode("56234567");
        break;
      case "unitedkingdom":
        setCountryCode("1172345678");
        break;
      case "unitedstates":
        setCountryCode("1234567890");
        break;
      default:
        setCountryCode("");
    }
  };
  return (
    <div className="flex flex-col items-center md:flex-row h-screen overflow-y-hidden justify-between">
    <div className="px-5 items-center flex flex-col gap-8 mt-3 md:w-1/2  min-h-screen">
      <div className="w-full flex justify-center">
        <Image
          src="/logo1.png"
          width={50}
          height={50}
          alt="logo-img"
          className="rounded-full flex"
        />
      </div>
      <h1 className="font-bold text-3xl w-full">Can we get your number?</h1>
      <form
        action=""
        className="flex gap-3 items-center max-w-md mx-auto w-full"
      >
        <div className="flex flex-col">
          <label For="country" className="text-xl font-serif">
            Country
          </label>
          <select
            name="country"
            id="country"
            onChange={handleCountryChange}
            className="p-4 ring-2 ring-gray-500 mt-2 rounded-lg bg-gray-100 text-gray-500"
          >
            <option value="kenya">KE +254</option>
            <option value="tanzania">TZ +255</option>
            <option value="uganda">UG +256</option>
            <option value="unitedkingdom">UK +44</option>
            <option value="unitedstates">US +1</option>
          </select>
        </div>
        <fieldset className="flex flex-col w-full">
          <label For="phoneNo" className="text-xl font-serif">
            Phone number
          </label>
          <input
            type="tel"
            name="phoneNo"
            id="phoneNo"
            required
            autoFocus
            placeholder={`${countryCode} `}
            className="ring-2 ring-gray-500 p-4 mt-2 rounded-lg w-full bg-gray-100"
          />
        </fieldset>
      </form>
      <p className="text-gray-500">
        We&apos;ll text you a code to verify you&apos;re really you. Message and
        data rates ma apply.
        <a href="/" className="text-blue-500 font-semibold underline">
          What happens if your number changes?
        </a>
      </p>
      <Link
        href="/signup/userNumber/codesent"
        className="rounded-full py-3 bg-gray-200 w-full items-center flex justify-center"
      >
        <button className="font-bold text-gray-600">Next</button>
      </Link>
    </div>
    <div className="bg-red-600 w-1/2 h-screen max-sm:hidden max-md:hidden">
        <Image src="/phone.png" width={300} height={200} className="w-full h-full" alt="phone" quality={100} priority={true}></Image>
      </div>
    </div>
  );
}
