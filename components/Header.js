import React, { useRef, useState } from "react";
import { Image } from "next/image";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderElements from "./HeaderElements";
import { useRouter } from "next/router";

const Header = () => {
  // const [value,setValue] = useState('');
  const searchInputRef = useRef(null);
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const handleDelete = (e) => {
    searchInputRef.current.value = "";
  };
  return (
    <header className="mt-3">
      <div className="flex w-full item-center p-6">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="h-10 mt-1"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow ml-5 border border-gray-200 rounded-full shadow-lg max-w-3xl px-5 py-3">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 cursor-pointer transition transform duration-100 hover:scale-110"
            onClick={handleDelete}
          />
          <div className="text-blue-400 border-l-2 hidden sm:inline-flex">
            <MicrophoneIcon className="h-7 cursor-pointer" />
            <SearchIcon onClick={handleSearch} className="h-7 cursor-pointer" />
          </div>
        </form>
        <Avatar url="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" className="ml-auto" />
      </div>
      <HeaderElements />
    </header>
  );
};

export default Header;
