"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-1">
        <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center p-6"
        aria-label="Toggle menu"
        >
        <span
            className={`bg-gray-700 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        />
        <span
            className={`bg-gray-700 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
            className={`bg-gray-700 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        />
        </button>

        <div className={`${isOpen ? "text-center" : "hidden"}`}>
            <div className="p-2">
                <NavLink path="/" title='Home '/>
            </div>
            <div className="p-2">
                <NavLink path="/blog" title="Blog "/>
            </div>
            <div className="p-2">
                <NavLink path="/about" title="About "/>
            </div>
            <div className="p-2">
                <NavLink path="/contact" title="Contact "/>
            </div>
        
        
       
         
        </div>

    </div>
  );
}
