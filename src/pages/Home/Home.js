import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import FaqAccordion from "../../components/Accordion";

import faq_tree from "../../assets/img/backgrounds/faq-right.png";

const Home = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <section className="hero lg:px-[50px] lg:pt-[70px] lg:pb-[100px] xl:px-[100px] xl:pt-[100px] xl:pb-[150px] flex justify-center">
        <div className="hero-content flex flex-col gap-[50px] xl:gap-[70px] items-center max-w-[1400px] bg-[#1D1D1F99] px-[10px] py-[100px] md:px-[60px] md:py-[150px] lg:px-[100px] lg:py-[80px]">
          <h1 className="mb-[-20px] font-luckiest text-[40px] sm:text-[50px] lg:text-[70px] xl:text-[110px] xxl:text-[125px] text-center drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)]">
            BITCOIN RACCOONS
          </h1>
          <p className="text-[15px] lg:text-[18px] lg:text-[24px] text-center">
            An Ordinals based project. Carefully and masterfully crafted, we
            want Bitcoin Raccoons to stand out and reshape the narrative. Our
            goal is to onboard the masses as Bitcoin leads digital artifacts
            into a new era. The truly decentralized, immutable, and legacy
            nature of Bitcoin allows for the strongest forms of community. We
            want a brand fitting of Bitcoin's cryptic nature, that a community
            can rally behind - Raccoons
          </p>
          <Button
            text="WHITELIST"
            clickEvent={() => setModalStatus(!modalStatus)}
          />
        </div>
      </section>
      <section className="gallery flex flex-col items-center gap-[100px] md:gap-[100px] md:gap-[150px] py-[112px]">
        <h1 className="mb-[-20px] font-luckiest text-[40px] sm:text-[50px] lg:text-[70px] xl:text-[110px] xxl:text-[125px] drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)]">
          GALLERY
        </h1>
        <Carousel />
        <Link to="/gallery">
          <Button text="VIEW FULL COLLECTION" />
        </Link>
      </section>
      <section className="faq h-fit mb-[100px] sm:mb-[200px] md:mb-[50px] flex flex-col items-center gap-[30px]">
        <h1 className="lg:mb-[-50px] font-luckiest text-[40px] sm:text-[50px] lg:text-[70px] xl:text-[110px] xxl:text-[125px] drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)] pt-[40px] md:pt-[0px] lg:pt-[50px]">
          FAQ
        </h1>
        <div className="w-full min-h-fit flex flex-col md:flex-row lg:gap-[100px] lg:px-6 items-center">
          <div className="order-last md:order-first z-20 w-full lg:w-7/12 px-[20px] md:ps-[30px] lg:ps-[100px] xl:px-[150px]">
            <FaqAccordion />
          </div>
          <div className="order-first md:order-last z-10 absolute md:relative w-full lg:w-5/12 text-center lg:mb-[100px]">
            <img className="w-full md:w-4/5" src={faq_tree} alt="faq tree" />
          </div>
        </div>
      </section>
      <div
        id="modal-back"
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
          modalStatus ? "flex" : "hidden"
        } justify-center items-center bg-[#191919AA] px-[10px]`}
        onClick={(e) => {
          if (e.target.id == "modal-back") setModalStatus(false);
        }}
      >
        <div className="relative w-fit px-[15px] md:px-[50px] pt-[70px] pb-[50px] flex flex-col gap-[15px] md:gap-[35px] bg-[#3B3D5E]">
          <Link
            className="absolute right-[20px] top-[20px]"
            onClick={() => setModalStatus(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25 5L5 25"
                stroke="#A6ACB7"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 25L5 5"
                stroke="#A6ACB7"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="font-luckiest text-[35px] md:text-[50px] leading-[50px] text-center drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)]">
            WHITELIST CHECKER
          </h1>
          <input
            className="w-full p-[15px] text-center text-[15px] md:text-[24px] text-[#A6ACB7] bg-[#383D5E] border-[2px] border-[#A6ACB7] !outline-none"
            type="text"
            placeholder="YOUR BITCOIN ADDRESS"
          />
          <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row font-semibold md:min-w-[600px]">
            <div className="text-[20px] md:text-[28px]">
              <span>WHITELIST STATUS:</span>
              <span className="text-[#70C51C] ml-[10px] md:ml-[30px]">
                TRUE
              </span>
            </div>
            <div className="text-[28px]">
              <Link className="hover:text-[#FFD600]">CHECK</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
