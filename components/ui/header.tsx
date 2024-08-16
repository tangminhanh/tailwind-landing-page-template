"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useTheme } from "next-themes";
import img1 from '@/public/svg/home-alt-svgrepo-com.svg'
import Image from 'next/image';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showButton, setShowButton] = useState(false);
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "light" : "dark");
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Navigation links */}
          <ul className="flex flex-1 items-center justify-center space-x-4">
            <li>
              <Link href="#home" style={{ display: showButton ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="24" height="24">
                  <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600s600-268.629,600-600S931.371,0,600,0z M600,276.489l292.969,227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199L600,276.489z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#about-me" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="24" height="24">
                  <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600s600-268.629,600-600S931.371,0,600,0z M600,276.489l292.969,227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199L600,276.489z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#work-experience">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="24" height="24">
                  <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600s600-268.629,600-600S931.371,0,600,0z M600,276.489l292.969,227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199L600,276.489z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#projects" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="24" height="24">
                  <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600s600-268.629,600-600S931.371,0,600,0z M600,276.489l292.969,227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199L600,276.489z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#contact" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="24" height="24">
                  <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600s600-268.629,600-600S931.371,0,600,0z M600,276.489l292.969,227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199L600,276.489z"/>
                </svg>

              </Link>
            </li>
          </ul>
          {/* Toggle dark mode */}
           <ul className="flex flex-1 items-center justify-end">
            <div className="toggle-switch">
              <label className="switch-label">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={theme === "light"}
                  onChange={handleThemeChange}
                />
                <span className="slider"></span>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
