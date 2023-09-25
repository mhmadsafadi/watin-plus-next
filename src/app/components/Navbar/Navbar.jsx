"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { Links } from "./dataRoute";
import "./navbar.css";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };
    window.addEventListener("scroll", changeColor, true);
    return window.removeEventListener("scroll", changeColor);
  }, []);


  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <nav className={`px-2.5 py-3 md:py-6 mb-10 sticky top-0 transition-all ${navbarColor ? 'bg-transparent' : 'bg-main/10 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo width={160} height={160} />
        </Link>

        <div className="hidden lg:flex gap-10">
          {Links.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className="text-gray-500 hover:text-secondary font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-white font-medium text-sm md:text-base py-2 px-2 md:px-8 rounded-full bg-main hover:bg-secondary shadow-xl shadow-main/50 hover:shadow-secondary/50 transition"
          >
            <span className="hidden md:block">تسجيل الدخول</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="block md:hidden w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>

          <label className="group hamburger cursor-pointer">
            {/* <p>{checked ? "checked" : "unchecked"}</p> */}
            <input
              type="checkbox"
              className="hidden"
              checked={checked}
              onChange={handleChange}
            />
            <svg viewBox="0 0 32 32" className="h-12 transition-all">
              <path
                className="line line-top-bottom stroke-main group-hover:stroke-secondary"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path
                className="line stroke-main group-hover:stroke-secondary"
                d="M7 16 27 16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
