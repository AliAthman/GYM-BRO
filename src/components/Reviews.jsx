import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Reviews() {
  return (
    <>
      <h1 className="text-4xl font-extrabold justify-center flex animate-slide-in-top ">
        What People are saying...
      </h1>
      <section
        className="flex flex-col space-y-6 text-center md:gap-x-3 w-full min-w-full  md:space-y-0 md:flex-row px-5 py-8 "
        id="reviews"
      >
        {/* COMMENT1 */}
        <div className="flex flex-col  items-center animate-slide-in  p-3 ring-1 hover:bg-red-200 hover:ring-red-600  ring-teal-300 rounded-3xl bg-blue-200">
          <Image
            src="/temporary/users/user1.jpg"
            width={40}
            height={40}
            className="rounded-md "
            alt="user"
          />
          <p className="text-xl font-bold mt-2">Clinton Pundav</p>
          <span className="text-blue-400">@clinton_gee</span>
          <span className="text-gray-500  p-2">
            &quot;It is a very usefull site,i met my gym bro here 5 years
            ago&quot;
          </span>
        </div>
        {/* COMMENT2 */}
        <div className="flex flex-col hover:bg-red-200 animate-slide-in md:animate-slide-in-top hover:ring-red-600 items-center p-3 ring-1 ring-teal-300  bg-blue-200 rounded-3xl">
          <Image
            src="/temporary/users/user1.jpg"
            width={40}
            height={40}
            className="rounded-md "
            alt="user"
          />
          <p className="text-xl font-bold mt-2">Clinton Pundav</p>
          <span className="text-blue-400">@clinton_gee</span>
          <span className="text-gray-500 p-2">
            &quot;It is a very usefull site,i met my gym bro here 5 years
            ago&quot;
          </span>
        </div>
        {/* COMMENT3 */}
        <div className="flex flex-col hover:bg-red-200 animate-slide-in-right hover:ring-red-600 items-center p-3 ring-1 ring-teal-300  bg-blue-200 rounded-3xl">
          <Image
            src="/temporary/users/user1.jpg"
            width={40}
            height={40}
            className="rounded-md "
            alt="user"
          />
          <p className="text-xl font-bold mt-2">Clinton Pundav</p>
          <span className="text-blue-400">@clinton_gee</span>
          <span className="text-gray-500 p-2">
            &quot;It is a very usefull site,i met my gym bro here 5 years
            ago&quot;
          </span>
        </div>
      </section>
    </>
  );
}
