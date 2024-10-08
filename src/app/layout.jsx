import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gym Bro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
