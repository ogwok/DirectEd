import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Transition from "../utils/Transition";
import dapplogo from "../images/dapp-logo.svg";

function Header({ mode }) {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    setActiveRoute(location.pathname);
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`absolute bg-primary w-full z-30 ${
        mode !== "light" && "dark"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <span
              onClick={() => window.open("https://directed.dev/")}
              className="block text-blue-600 transition duration-150 ease-in-out cursor-pointer"
              aria-label="Cruip"
            >
              <img src={dapplogo} />
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  to="/"
                  className={`
                  ${activeRoute == "/" ? "underline font-bold" : ""}
                   font-medium text-white hover:text-blue-60 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
                >
                  SCHOLARSHIP POOLS
                </Link>
              </li>
              <li>
                <Link
                  to="/scholar-section"
                  className={`
                  ${
                    activeRoute == "/scholar-section"
                      ? "underline font-bold"
                      : ""
                  }
                  font-medium text-white hover:text-blue-600 dark:text-white dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
                >
                  SCHOLARS' PROGRESS
                </Link>
              </li>
              <li>
                <Link
                  to="/transactions"
                  className={`
                  ${activeRoute == "/transactions" ? "underline font-bold" : ""}
                  font-medium text-white hover:text-blue-600 dark:text-white dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
                >
                  TRANSACTIONS
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  CONNECT WALLET{" "}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link
                      to="/"
                      className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                    >
                      SCHOLARSHIP POOLS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scholar-section"
                      className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                    >
                      SCHOLARS' PROGRESS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/transactions"
                      className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                    >
                      TRANSACTIONS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800"
                    >
                      CONNECT WALLET
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
