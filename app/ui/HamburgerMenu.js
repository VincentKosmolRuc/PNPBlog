"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Form from "next/form";

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

        <div className={`${isOpen ? "flex flex-col items-center" : "hidden"}`}>
            <div className="p-2" onClick={() => setIsOpen(false)}>
                <NavLink path="/" title='Home '/>
            </div>
            <div className="p-2" onClick={() => setIsOpen(false)}>
                <NavLink path="/blog" title="Blog "/>
            </div>
            <div className="p-2" onClick={() => setIsOpen(false)}>
                <NavLink path="/about" title="About "/>
            </div>
            <div className="p-2" onClick={() => setIsOpen(false)}>
                <NavLink path="/contact" title="Contact " />
            </div>
            <div className="w-full max-w-2xs pb-4 flex justify-center">
                <div className="relative">
                    <Form action='/search'>
                        <input name='query'
                        className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Search blog posts..." 
                        />
                        <button type="submit" onClick={() => setIsOpen(false)}
                        className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                        Search
                        </button> 
                    </Form>
                </div>
            </div>
        
       
         
        </div>

    </div>
  );
}



// Big credit to this blog post for the tutorial on creating a burger menu:
// https://jacobhocker.medium.com/creating-an-animated-hamburger-menu-in-nextjs-tailwind-css-9e332d428811 