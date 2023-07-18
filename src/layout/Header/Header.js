import { useState, useEffect } from "react";

import logo from "../../assets/img/logo.png";
import icon_paper from "../../assets/img/icons/paper.png";
import icon_discord from "../../assets/img/icons/discord.png";
import icon_twitter from "../../assets/img/icons/twitter.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setNavOpen(false);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <nav
      className={`header z-50 ${
        navOpen ? "open" : "close"
      } w-full flex justify-center bg-[#1A1A1A] py-2 lg:py-4`}
      data-te-navbar-ref
    >
      <div className="w-full lg:flex items-center justify-between px-3 max-w-[1920px]">
        <div className="flex">
          <button
            className="block border-0 bg-transparent lg:hidden !p-0"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="6 0 12 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className="!visible flex flex-grow basis-[100%] items-center justify-center xl:justify-start lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <Link
              className="mb-4 mt-3 flex items-center lg:mb-0 lg:mt-0"
              to="/"
            >
              <img
                className="mr-2 h-14 lg:h-20"
                src={logo}
                alt="BITCOIN RACCOONS"
                loading="lazy"
              />
              <span className="text-[16px] font-coda tracking-[.2em] scale-y-125 lg:text-[28px]">
                BITCOIN <br className="block lg:hidden" /> RACCOONS
              </span>
            </Link>
          </div>
        </div>

        <div
          className={`${
            navOpen ? "block" : "hidden"
          } lg:flex items-center lg:gap-[50px] xl:gap-[100px] p-[50px] lg:p-0`}
        >
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row gap-[20px] lg:gap-[20px] xl:gap-[100px]"
            data-te-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link className="text-[20px] hover:text-[#F7C953] font-semibold" to="/">
                About
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link className="text-[20px] hover:text-[#F7C953] font-semibold" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-[20px] hover:text-[#F7C953] font-semibold"
                href="#"
                data-te-nav-link-ref
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="relative flex justify-between items-center gap-[20px] lg:gap-[50px] mr-0 lg:mr-[20px] mt-[50px] lg:mt-0">
            <a className="" href="#">
              <img
                src={icon_paper}
                style={{ height: "28px" }}
                alt="Paper"
                loading="lazy"
              />
            </a>
            <a className="" href="#">
              <img
                src={icon_discord}
                style={{ height: "28px" }}
                alt="Discord"
                loading="lazy"
              />
            </a>
            <a className="" href="#">
              <img
                src={icon_twitter}
                style={{ height: "28px" }}
                alt="Twitter"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
