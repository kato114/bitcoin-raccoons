import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import icon_paper from "../../assets/img/icons/paper.png";
import icon_discord from "../../assets/img/icons/discord.png";
import icon_twitter from "../../assets/img/icons/twitter.png";

const Footer = (props) => {
  const { page } = props;

  return (
    <section className="footer z-40">
      <nav
        className="w-full flex justify-center py-2 lg:py-4"
        data-te-navbar-ref
      >
        <div className="w-full flex items-center justify-between px-3 max-w-[1920px]">
          <div
            className="!visible flex flex-grow basis-[100%] items-center justify-center xl:justify-start lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <a
              className="mb-4 mt-3 flex items-center lg:mb-0 lg:mt-0 brightness-50"
              href="#"
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
            </a>
          </div>

          <div className="hidden xl:flex gap-[100px]">
            {page != "gallery" && (
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row gap-[100px] brightness-50"
                data-te-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-[20px] font-semibold"
                    href="#about"
                    data-te-nav-link-ref
                  >
                    About
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    href="#gallery"
                    className="text-[20px] font-semibold"
                    data-te-nav-link-ref
                  >
                    Gallery
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-[20px] font-semibold"
                    href="#faq"
                    data-te-nav-link-ref
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            )}
            <div className="relative flex items-center gap-[50px] mr-[20px]">
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
    </section>
  );
};

export default Footer;
