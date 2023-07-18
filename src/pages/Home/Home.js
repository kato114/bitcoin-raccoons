import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import FaqAccordion from "../../components/Accordion"

import faq_tree from "../../assets/img/backgrounds/faq-right.png"

const Home = () => {
  return (
    <>
      <section className="hero lg:px-[50px] lg:pt-[70px] lg:pb-[100px] xl:px-[100px] xl:pt-[100px] xl:pb-[150px] flex justify-center">
        <div className="flex flex-col gap-[50px] xl:gap-[70px] items-center max-w-[1400px] bg-[#1D1D1F99] px-[10px] py-[100px] md:px-[60px] md:py-[150px] lg:px-[100px] lg:py-[80px]">
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
          <Button text="WHITELIST" />
        </div>
      </section>
      <section className="gallery flex flex-col items-center gap-[100px] md:gap-[100px] md:gap-[150px] py-[112px]">
        <h1 className="mb-[-20px] font-luckiest text-[40px] sm:text-[50px] lg:text-[70px] xl:text-[110px] xxl:text-[125px] drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)]">
          GALLERY
        </h1>
        <Carousel />
        <Button text="VIEW FULL COLLECTION" />
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
    </>
  );
};

export default Home;
