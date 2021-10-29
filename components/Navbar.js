import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavBarSearch from "./NavBarSearch";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { FaAngleDown } from "react-icons/fa";
import LoginPopup from "./LoginPopup";
import LoginAccountTpe from "./LoginAccountType";
import { useSelector, useDispatch } from "react-redux";
import { logoutGoogle } from "../store/auth/authSlice";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [accountMenuActive, setAccountMenuActive] = useState(false);

  const accountMenuRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!accountMenuRef.current.contains(event.target))
        setAccountMenuActive(false);
    };
    if (accountMenuActive) {
      document.addEventListener("mousedown", handler);
    }

    // clear up event listener
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [accountMenuActive]);

  const onClick = () => {
    setMenuActive(!menuActive);
  };

  const handleAccountMenu = () => {
    setAccountMenuActive(!accountMenuActive);
  };

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setAccountMenuActive(false);
    dispatch(logoutGoogle());
  };

  return (
    <>
      <LoginPopup
        handleLoginModal={handleLoginModal}
        showLoginModal={showLoginModal}
      />
      {!auth.profileCompleted && auth.currentUser !== null ? (
        <LoginAccountTpe />
      ) : (
        ""
      )}
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
                <NavBarSearch />
              </li>

              <li className="list-none">
                {auth.currentUser === null ? (
                  <button
                    type="button"
                    className=" text-white rounded-full px-7 py-1 bg-accent"
                    onClick={handleLoginModal}
                  >
                    Login
                  </button>
                ) : (
                  <div className="relative inline-block" ref={accountMenuRef}>
                    <button
                      type="button"
                      className=" text-white rounded-full px-7 py-1 bg-accent inline-flex justify-center items-center"
                      onClick={handleAccountMenu}
                    >
                      Account
                      <FaAngleDown />
                    </button>
                    <div
                      className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        !accountMenuActive && "hidden"
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <Link href="#">
                        <a
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          View Profile
                        </a>
                      </Link>
                      <Link href="#">
                        <a
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Edit Profile
                        </a>
                      </Link>

                      <div className="py-1 " role="none">
                        <button
                          type="submit"
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 border-t border-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                          onClick={handleLogoutClick}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
