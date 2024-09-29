import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Link from "next/link";
import "../../styles/globals.css";
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-100  ">
      <Nav />
      {/* MOTTO */}
      <div className="bg-[url('/temporary/gym-pics/gym1.jpg')] bg-cover bg-center h-screen p-6 flex items-center justify-center">
        <h1 className="md:text-8xl text-5xl  animate-text-shimmer text-gray-800 font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-center"> 
           &quot;Train Together, Achieve Together&quot;
        </h1>
      </div>
      {/* MISSION & FEATURES */}
      <div className="p-6">
        {/* MISSION */}
        <div className="mb-10" id="mission">
          <h1 className="font-extrabold animate-slide-in-top text-black text-4xl text-center">
            Our Mission
          </h1>
          <h2 className="mt-4 text-gray-500 text-center animate-slide-in">
            &quot;Our mission is to empower fitness enthusiasts by providing a
            platform to connect, motivate, and achieve their goals together. We
            believe in the strength of partnership and aim to foster a
            supportive community where members inspire each other to reach new
            heights in their fitness journey.&quot;
          </h2>
        </div>
        {/* FEATURES */}
        <div className="-mx-6">
          <h1 className="text-4xl font-extrabold animate-slide-in-top mb-8 justify-center flex">
            Features
          </h1>
          <div
            className="flex flex-col py-3 md:space-x-5 md:flex-row md:justify-around bg-gray-800  md:h-96 items-center min-w-full xl:space-x-5 space-y-4 md:space-y-0 "
            id="features"
          >
            {/* CARDS */}
            {/* CARD1 */}
            <div className="flex flex-col items-center  bg-white shadow-white shadow-2xl overflow-hidden p-3 rounded-3xl w-full max-w-xs h-auto hover:shadow-inner hover:shadow-black hover:scale-110 hover:bg-red-100 ">
              <div className="w-24 h-24">
                <Image
                  src="/temporary/gym-pics/gym2.jpg"
                  width="50"
                  height="50"
                  alt="instructor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-blue-600 font-semibold py-4 flex items-center text-center">
                <Image src="/lens.png" width={24} height={24} />
                <Link href="/" className="ml-2">
                  Find a gym near you
                </Link>
              </h2>
            </div>
            {/* CARD2 */}
            <div className="flex flex-col items-center bg-white  overflow-hidden p-3 rounded-3xl w-full max-w-xs h-auto shadow-red-700 shadow-2xl hover:shadow-inner  hover:shadow-black hover:scale-110 hover:bg-red-100">
              <div className="w-24 h-24">
                <Image
                  src="/partner.jpg"
                  width="50"
                  height="50"
                  alt="partner"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-blue-600 font-semibold py-4 flex items-center text-center">
                <Image src="/lens.png" width={24} height={24} />
                <Link href="/" className="ml-2 cursor-pointer">
                  Find a gym partner near you
                </Link>
              </h2>
            </div>
            {/* CARD3 */}
            <div className="flex flex-col items-center  bg-white shadow-2xl overflow-hidden p-3 rounded-3xl w-full max-w-xs h-auto hover:shadow-inner  shadow-white hover:shadow-black hover:scale-110 hover:bg-red-100">
              <div className="w-24 h-24">
                <Image
                  src="/partners-chatting.jpg"
                  width="50"
                  height="50"
                  alt="instructor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-blue-600 font-semibold py-4 flex items-center text-center">
                <Image src="/chat.png" width={24} height={24} />
                <Link href="/" className="ml-2 cursor-pointer">
                  Chat with your gym partner
                </Link>
              </h2>
            </div>
            {/* CARD4 */}
            <div className="flex flex-col items-center  bg-white shadow-2xl overflow-hidden p-3 rounded-3xl w-full max-w-xs h-auto hover:shadow-inner  shadow-red-800 hover:shadow-black hover:scale-110 hover:bg-red-100">
              <div className="w-24 h-24">
                <Image
                  src="/instructor.jpg"
                  width="50"
                  height="50"
                  alt="instructor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-blue-600 font-semibold py-4 flex items-center text-center">
                <Image src="/lens.png" width={24} height={24} alt="lens" />
                <Link href="/" className="ml-2 cursor-pointer">
                  Find a gym trainer nearby
                </Link>
              </h2>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Reviews />
      <Footer />
    </main>
  );
}
