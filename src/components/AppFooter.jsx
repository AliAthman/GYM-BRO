// import Image from "next/image";
// import Link from "next/link";
// export default function AppFooter() {
//   return (
//     <div className="flex justify-between p-2 static  bg-black">
//       {/* LINKS */}
//       <div>
//         <Link href="//">
//           <Image className="rounded-full" src="/logo1.png" width={30} height={30}></Image>
//         </Link>
//       </div>
//       <div>
//         <Link href="//">
//           <Image src="/chat2.png" width={30} height={30}></Image>
//         </Link>
//       </div>

//       <div>
//         <Link href="//">
//           <Image src="/diamond.png" width={30} height={30}></Image>
//         </Link>
//       </div>
//       <div>
//         <Link href="//">
//           <Image src="/usericon.png" width={30} height={30}></Image>
//         </Link>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function AppFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between p-2 items-center bg-white">
      {/* LINKS */}
      <div>
        <Link href="//">
          <Image className="rounded-full" src="/logo1.png" width={30} height={30} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link href="//">
          <Image src="/chat2.png" width={30} height={30} alt="Chat" />
        </Link>
      </div>

      <div>
        <Link href="//">
          <Image src="/diamond.png" width={30} height={30} alt="Diamond" />
        </Link>
      </div>
      <div>
        <Link href="//">
          <Image className="rounded-full bg-transparent" src="/usericon.png" width={30} height={30} alt="User" />
        </Link>
      </div>
    </div>
  );
}
