import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0A400C] text-white px-6 py-4 shadow-md flex items-center justify-between relative border-b border-gray-600">
      {/* Left: Site Name */}
      <div className="text-xl font-bold z-10">QuizValley</div>

      {/* Center: Nav Items - absolutely centered */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-md font-medium rounded-lg">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Custom Quiz</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
      </ul>

      <div className="z-10"></div>
    </nav>
  );
};

export default Navbar;
