import { useState } from "react";
import Link from "next/link";
import NavbarSearch from "./NavbarSearch";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const onClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className="relative border-b border-solid  border-gray-300 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
          <div>
            <img src="/logo_nav.svg" alt="Jobie Logo" className="w-full" />
          </div>

          <div onClick={onClick} className={`md:hidden cursor-pointer`}>
            {menuActive ? <FaTimes /> : <FaBars />}
          </div>

          <nav
            className={`${
              !menuActive && "hidden"
            } absolute flex flex-col top-full w-full left-0 z-20 md:static md:w-auto md:flex`}
          >
            <ul className="md:flex-row md:flex items-center md:gap-5">
              <li className="list-none">
                <Link href="/">
                  <a className="flex w-full text-base px-2.5">Home</a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/about">
                  <a className="flex w-full text-base px-2.5">About</a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/roadmaps">
                  <a className="flex w-full text-base px-2.5">Roadmaps</a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/jobs">
                  <a className="flex w-full text-base px-2.5">Jobs</a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/contact">
                  <a className="flex w-full text-base px-2.5">Contact</a>
                </Link>
              </li>
              <li className="list-none">
                <NavbarSearch />
              </li>

              <li className="list-none">
                <Link href="/login">
                  <a className="flex w-full text-base px-2.5">
                    {" "}
                    <button
                      type="button"
                      className=" text-white rounded-full px-7 py-1 bg-accent"
                    >
                      Login
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
