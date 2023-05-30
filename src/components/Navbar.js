import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} relative group ${router.asPath == href
        ? "text-dark dark:text-light"
        : "text-slate-600 "
        }`}>
        <span>
          {title}
        </span>
        <span
          className={`h-[1px] inline-block bg-black dark:bg-light absolute left-1/4 -bottom-0.5 group-hover:w-1/2 transition-[width] ease duration-300 ${router.asPath == href ? "w-1/2" : "w-0"
            }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  const CustomMobileLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    const handleClick1 = () => {
      setIsOpen(!isOpen);
      router.push(href);
    };
    return (
      <Link
        href={href}
        className={`${className} relative group  ${router.asPath == href
          ? "text-light lg:text-light dark:lg:text-dark"
          : "text-slate-600 "
          }`}
        onClick={handleClick1}
      >
        <span>{title}</span>
        <span
          className={`h-[1px] inline-block bg-black lg:bg-light dark:bg-light dark:lg:bg-dark absolute left-1/4 -bottom-0.5 group-hover:w-1/2 transition-[width] ease duration-300 ${router.asPath == href ? "w-1/2" : "w-0"
            }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between lg:px-8 lg:justify-start dark:text-light relative mb-2">
        <button
          className="hidden lg:flex flex-col justify-start items-center"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
          ></span>
        </button>
        <Logo />
        <nav className="w-full flex items-center justify-end lg:hidden ">
          <CustomLink href={"/"} title={"Home"} className="mr-2" />
          <CustomLink href={"/about"} title={"About"} className="mx-2" />
          <CustomLink
            href={"/experience"}
            title={"Experience"}
            className="mx-2"
          />
          <CustomLink href={"/projects"} title={"projects"} className="mx-2" />
          <CustomLink href={"/contact"} title={"Contact"} className="mx-2" />
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>

        {isOpen ? (
          <motion.nav
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className={`min-w-[70vw] flex flex-col z-30 items-center  justify-between  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 text-light dark:text-light gap-3 `}
            onClick={handleClick}
          >
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className=""
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className=""
            />
            <CustomMobileLink
              href={"/experience"}
              title={"Experience"}
              className=""
            />
            <CustomMobileLink
              href={"/projects"}
              title={"projects"}
              className=""
            />
            <CustomMobileLink
              href={"/contact"}
              title={"Contact"}
              className=""
            />
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`my-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </motion.nav>
        ) : null}
      </header>
      <div className={`absolute z-30 left-3 top-52`}>
        <SocialLinks />
      </div>
    </>
  );
};

export default Navbar;
