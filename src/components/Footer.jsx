import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
    <section className=" grid grid-cols-2 bg-gray-950 h-52 md:justify-around md:flex text-white shadow-2xl md:grid-cols-3 overflow-x-hidden lg:grid-cols-3 sm:grid-cols-3">
      {/* SITEMAP */}
      <div className=" flex flex-col p-3 ">
        <h1 className="text-xl font-bold text-center text-red-950  md:flex md:justify-start">Navigation</h1>
        <div className="justify-between flex flex-col md:flex-col md:text-2xl">
          <Link href="#mission" className="cursor-pointer hover:text-blue-600">
            Our mission
          </Link>
          <Link href="#features" className="cursor-pointer hover:text-blue-600">
            Features
          </Link>
          <Link href="#reviews" className="cursor-pointer hover:text-blue-600">
            Reviews
          </Link>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="p-3 ">
        <h1 className="text-xl font-bold text-center text-red-950">Socials</h1>
        <div className="flex justify-around md:flex md:gap-x-9 p-2">
          <Image src="/facebook.png" width={24} height={24} alt="facebook img" />
          <Image
            src="/ig.jpeg"
            width={24}
            height={24}
            className="rounded-full"
            alt="instagram img"
          />
          <Image
            src="/twitter.jpg"
            width={24}
            height={24}
            className="rounded-full"
            alt="x img"
          />
        </div>
      </div>
      {/* CONTACT */}
      <div>
        <h1 className="text-xl font-bold text-center text-red-950 p-3">Contact info</h1>
        <div className="flex p-2 space-x-2 md:text-2xl">
          <Image src="/phone.png" width={20} height={20} alt="phoneimg" />
          <p>
            Phone:
            <Link href="tel:0746266399" className="hover:text-blue-600"> 0746266399</Link>
          </p>
        </div>
        <div className="flex p-2 space-x-2">
          <Image
            src="/envelope.png"
            width={20}
            height={20}
            className="bg-white rounded-xl"
            alt="emailimg"
          />
          <p>
            Email:{" "}
            <Link href="mailto:calitosyuri@gmail.com" className="hover:text-blue-600">
              calitosyuri@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
    <footer className="text-center bg-slate-200 text-black font-semibold p-2">
        <span>@2024 Ali Athman</span>
      </footer>
    </div>
  );
}
