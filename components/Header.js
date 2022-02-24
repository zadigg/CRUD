import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

function Header() {
  return (
    <header className="bg-white-600 ">
      <div className="flex items-center justify-between p-3 max-w-6xl mx-auto p-2 ">
        <div>
          <img className="h-14" alt="bus logo" src={logo.src} />
        </div>
        <div>
          <div className="bg-blue-500 px-2 py-1 rounded-lg">Sign Up</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
