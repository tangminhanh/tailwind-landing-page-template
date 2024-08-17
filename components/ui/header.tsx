"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useTheme } from "next-themes";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showButton, setShowButton] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

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

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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
          <ul className="flex flex-1 items-center justify-center space-x-4 dark:invert">
            <li>
          <Link href="#home" onClick={() => handleLinkClick("home")} className={`p-2 flex flex-row rounded ${activeLink === "home" ? "text-blue-500" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
           
          </Link>
        </li>
        <li>
          <Link href="#about-me" onClick={() => handleLinkClick("about-me")} className={`p-2 flex flex-row rounded ${activeLink === "about-me" ? "text-blue-500" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
         
          </Link>
        </li>
        <li>
          <Link href="#work-experience" onClick={() => handleLinkClick("work-experience")} className={`p-2 flex flex-row rounded ${activeLink === "work-experience" ? "text-blue-500" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25a48.07 48.07 0 0 0 16.5 0ZM12 11.25a45.632 45.632 0 0 1-8.64-.757l-.615-.147C2.789 10.18 2.25 9.595 2.25 8.93V7.5c0-1.094.787-2.036 1.872-2.18C6.209 5.044 8.339 4.9 10.5 4.9c2.161 0 4.291.143 6.378.42 1.085.144 1.872 1.086 1.872 2.18v1.43c0 .665-.539 1.25-1.495 1.416l-.615.147a45.632 45.632 0 0 1-4.64.387ZM9 7.5v.125a48.164 48.164 0 0 0 6 0V7.5c-2-.097-4-.097-6 0Z" />
            </svg>
          </Link>
        </li>
            <li>
              <Link href="#projects" onClick={() => handleLinkClick("projects")} className={`p-2 flex flex-row rounded ${activeLink === "projects" ? "text-blue-500" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => handleLinkClick("contact")} className={`p-2 flex flex-row rounded ${activeLink === "contact" ? "text-blue-500" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
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
