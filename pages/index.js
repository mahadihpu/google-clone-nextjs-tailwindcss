import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-gray-700">
        <div className="flex space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="Google Logo"
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-600" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-600" />
        </div>
        <div className="mt-3 flex flex-col w-1/2 space-y-2 justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I am feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
