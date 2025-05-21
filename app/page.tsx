import Link from "next/link";
import Home from "./page";
import Image from "next/image";
import backgroundImg from "@/img/goGreen.jpg";

export default function HomePage() {
  return (
    <div
      className="w-full h-screen bg-lime-700 flex justify-center"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1280px] w-full h-screen  text-white px-2 py-3 flex flex-col justify-between gap-8">
        <div className="w-full px-5">
          <nav>
            <ul className="flex items-center justify-end">
              <li className="mr-auto">
                <h1 className="font-black text-2xl">goGreen.</h1>
              </li>
              <li className="mx-1">
                <Link
                  className="py-2 px-5 flex items-center justify-center w-full relative after:ease after:duration-200 after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-white after:w-0 hover:after:left-0 hover:after:w-full "
                  href="./"
                >
                  Home
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  className="py-2 px-5 flex items-center justify-center w-full relative after:ease after:duration-200 after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-white after:w-0 hover:after:left-0 hover:after:w-full "
                  href="./"
                >
                  Services
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  className="py-2 px-5 flex items-center justify-center w-full relative after:ease after:duration-200 after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-white after:w-0 hover:after:left-0 hover:after:w-full "
                  href="./"
                >
                  Blog
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  className="py-2 px-3 flex items-center justify-center w-full  ease duration-200  bg-white text-black hover:bg-slate-200 rounded-ss-[25%] rounded-ee-[25%] "
                  href="/auth/login"
                >
                  Log in
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  className="py-2 px-3 flex items-center justify-center w-full relative ease duration-200 border-1 rounded-ss-[25%] rounded-ee-[25%] border-slate-100 hover:bg-slate-100 hover:text-black"
                  href="/auth/signin"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[100vh] border-1 border-red-500 flex justify-center items-center">
          THis is the main page or the body of the site
        </div>
        <div className="text-center py-3 px-4">
          This is the footer of the site
        </div>
      </div>
    </div>
  );
}
