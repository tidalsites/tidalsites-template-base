"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { NavLink } from "./NavLink";

export const Navbar: FC = () => {
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);

  const pathname = usePathname();

  const activateDropdown = () => {
    document.body.classList.add("no-scroll");
    setDropdownActivated(true);
  };

  const deactivateDropdown = () => {
    document.body.classList.remove("no-scroll");
    setDropdownActivated(false);
  };

  useEffect(() => {
    window.addEventListener("resize", deactivateDropdown);
  }, []);

  return (
    <header className="w-[100vw] fixed z-10 backdrop-blur-lg bg-black/50">
      <div className="w-full max-w-page flex gap-2 mx-auto">
        <div className="grow flex justify-between px-10 items-center">
          <div className="py-1">
            <Link className="flex items-center gap-4 relative py-1" href="/">
              <div className="w-6 h-6 bg-accent rotate-45 rounded-md outline outline-white -outline-offset-[10px] border-4 border-white"></div>
              <span
                aria-hidden
                className="font-bold text-xl hidden min-[900px]:block"
              >
                Generic Construction Co.
              </span>
            </Link>
          </div>
          <button
            aria-label="Mobile Navigation Button"
            aria-controls="mobile-menu"
            aria-expanded={dropdownActivated}
            className="md:hidden transition-all hover:bg-black hover:text-white duration-400 hover:outline-offset-2"
            onClick={activateDropdown}
          >
            <LuMenu className="text-4xl" />
          </button>
          <nav aria-label="Primary Navigation" className="hidden md:block">
            <ul className="flex gap-2 flex-wrap justify-end">
              <NavLink href="/" name="home" active={pathname === "/"} />
              <NavLink
                href="/about"
                name="about"
                active={pathname === "/about"}
              />
              <NavLink
                href="/services"
                name="services"
                active={pathname === "/services"}
              />
              <NavLink
                href="/portfolio"
                name="portfolio"
                active={pathname === "/portfolio"}
              />
              <NavLink
                href="/contact"
                name="contact"
                active={pathname === "/contact"}
              />
            </ul>
          </nav>

          <div
            id="mobile-menu"
            className={`${
              dropdownActivated
                ? "translate-y-0 flex flex-col"
                : "translate-y-[-100vh] invisible"
            } fixed inset-0 -top-2 -left-2 justify-center bg-black/90 overflow-hidden z-50 transition-all duration-300 w-[100vw] h-[100vh] backdrop-filter backdrop-blur-[40px]`}
          >
            <button
              onClick={deactivateDropdown}
              aria-label="Close Mobile Menu"
              className=" bg-black/30 rounded-full shadow-md text-2xl absolute top-4 right-4 p-1"
            >
              <MdClose />
            </button>

            <ul className="flex flex-col content-center items-center min-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-[0_0_20px_-10px_rgba(255,255,255,.25)] bg-black/90">
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    HOME
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/about">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    ABOUT
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/services">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    SERVICES
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/portfolio">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    PORTFOLIO
                  </span>
                </Link>
              </li>
              <li className="w-full text-center">
                <Link href="/contact">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
