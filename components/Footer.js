import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divider-gray-300 text-sm text-gray-500 bg-gray-0">
      <div className="px-8 py-8">
        <h5>United States</h5>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex justify-center items-center">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>Advertisement</p>
            <p>Business</p>
            <p>How search Works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
