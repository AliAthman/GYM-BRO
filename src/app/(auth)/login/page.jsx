import Link from "next/link";
import Image from "next/image";
export default function Login() {
  return (
    <section className="flex flex-col items-center md:flex-row justify-between">
      <div className="lg:w-1/2 lg:bg-black lg:h-screen">
        <h1 className="hidden text sm:flex font-extrabold justify-center lg:text-white ">Sign in to Gym Bro </h1>
        <div className="flex justify-center items-center ">
        <button
          type="submit"
          className="flex  bg-white gap-4 items-center px-6 py-3 mt-10  rounded-full ring-gray-300 ring-2"
        >
          <Image
            src="/google.png"
            width={20}
            height={20}
            className="object-contain"
            alt="google"
          />
          <span className="font-mono">Sign in with Google</span>
        </button>
        </div>
        <div class="flex items-center w-full px-5 mt-5">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="px-3 text-gray-500">or sign in with email</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        {/* FORM */}
        <form action="/" method="get" className="p-9">
          {/* USERNAME OR EMAIL */}
          <div class="flex flex-col ">
            <label For="login" className="font-semibold lg:text-white">
              Username or Email
            </label>
            <input
              type="text"
              name="login"
              id="login"
              placeholder=""
              autoFocus
              className="ring-1 ring-gray-300 px-8 py-4 rounded-md"
            />
          </div>
          {/* PASSWORD & FORGOT PASSWORD */}
          <div className="mt-6">
            <div className="flex justify-between">
              <label For="password" className="font-semibold lg:w-1/2 lg:text-white">
                Password
              </label>
              <a
                href="/Forgotpassword"
                className="underline text-gray-500 cursor-pointer"
              >
                Forgot?
              </a>
            </div>
            <fieldset>
              <input
                type="text"
                name="password"
                autoFocus
                className="ring-1 ring-gray-300 px-8 py-4 rounded-md lg:w-full"
              />
            </fieldset>
          </div>
          {/* SIGN IN BTN */}
          <div className="items-center w-full">
            <button
              type="submit"
              className="bg-slate-950 text-white font-semibold border-2 px-20 py-4 w-full rounded-full  mt-5"
            >
              Sign in
            </button>
          </div>
          {/* FOOT END */}
          <div className="items-center justify-center flex text-gray-600  mt-4">
            <p>
              Don&apos;t have an account?
              <Link href="/signup" className="underline cursor-pointer shadow-white shadow-xl">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="bg-red-600 w-1/2 h-screen max-sm:hidden max-md:hidden">
        <Image src="/logo1.png" width={300} height={100} className="w-full h-full" alt="logo" quality={100} priority={true}></Image>
      </div>
    </section>
  );
}
