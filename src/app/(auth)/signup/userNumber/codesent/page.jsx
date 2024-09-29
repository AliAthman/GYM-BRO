import Link from "next/link";
import Image from "next/image";

export default function CodeSent() {
  return (
    <div className="p-3 gap-4 w-11/12 flex flex-col overflow-x-hidden">
      {/* TOP */}
      <div className="flex  justify-between mb-4">
        <Link href="/signup/userNumber">
          <Image src="/backarrow.png" width={30} height={30} alt="Back" />
        </Link>
        <Image src="/logo1.png" width={30} height={30} alt="Logo" className="rounded-full" />
        <Image src="/close.png" width={20} height={30} alt="Close" className="rounded-full" />
      </div>
      <span className="text-xl mb-4 font-extrabold">My code is</span>
      {/* CODE INPUTS */}
      <div className="flex w-full justify-evenly">
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="tel"
          autoFocus
          required
          className="bg-white border-2 border-gray-500 rounded-md w-9 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>
      {/* UPDATE CONTACT */}
      <Link href="/signup/userNumber">
        <span className="font-bold text-blue-500">Update contact info</span>
      </Link>
      {/* RESEND */}
      <div className="flex justify-between items-center">
        <p className="font-bold">+254746266399</p>
        <button type="button" className="font-bold text-blue-500">
          Resend
        </button>
      </div>
      <Link href="/username" className="items-center justify-center flex font-bold text-gray-700 p-3 rounded-full ring-2 ring-black mt-8">
        <p>Next</p>
      </Link>
    </div>
  );
}
