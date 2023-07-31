import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import SearchBox from "../../components/SearchBox";
import ToggleSwitch from "../../components/ToggleSwitch";

const Gallery = ({ setPage }) => {
  const items = [
    {
      uuid: 0,
      heading: "Backgrounds",
      options: [
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
      ],
    },
    {
      uuid: 1,
      heading: "Backgrounds",
      options: [
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
      ],
    },
    {
      uuid: 2,
      heading: "Backgrounds",
      options: [
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
      ],
    },
    {
      uuid: 3,
      heading: "Backgrounds",
      options: [
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
        "Gray#50",
      ],
    },
  ];

  useEffect(() => {
    setPage("gallery");
  }, []);

  return (
    <section className="gallery flex flex-col items-center gap-[100px] md:gap-[100px] md:gap-[150px] py-[90px] mt-[112px]">
      <h1 className="mb-[-20px] font-luckiest text-[40px] sm:text-[50px] lg:text-[70px] xl:text-[110px] xxl:text-[125px] drop-shadow-[4px_7px_5px_rgba(255,255,255,0.25)]">
        GALLERY
      </h1>
      <div className="flex flex-col md:flex-row px-[20px] gap-[30px]">
        <div className="w-full lg:w-1/4">
          <SearchBox />
          <span className="block lg:hidden text-[15px] text-center mt-[5px]">
            Showing 28 results of 1000 items.
          </span>
          <Accordion preExpanded={[0]}>
            {items.map((item) => (
              <AccordionItem
                key={item.uuid}
                uuid={item.uuid}
                className="my-[30px]"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="px-[40px] py-[20px] text-[17px] bg-[#3B3D5E]">
                    {item.heading}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="font-[500] text-[#3B3D5E] bg-[#F0F0F0] max-h-[262.5px] overflow-y-auto">
                  {item.options.map((option) => (
                    <div className="w-full flex justify-between p-[15px] border-b-[0.5px] border-[#7E7F8E77]">
                      <div className="flex gap-[30px] items-center">
                        <ToggleSwitch />
                        <span className="text-[15px] text-[#3B3D5E] text-400">
                          {option}
                        </span>
                      </div>
                      <span className="text-[15px] text-[#3B3D5E] text-400">
                        10
                      </span>
                    </div>
                  ))}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full lg:w-3/4">
          <span className="hidden lg:block text-[15px] text-right mb-[5px] mt-[-28px]">
            Showing 28 results of 1000 items.
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
            <img src="img/nfts/2.png" width="100%" />
            <img src="img/nfts/3.png" width="100%" />
            <img src="img/nfts/4.png" width="100%" />
            <img src="img/nfts/5.png" width="100%" />
            <img src="img/nfts/6.png" width="100%" />
            <img src="img/nfts/7.png" width="100%" />
            <img src="img/nfts/8.png" width="100%" />
            <img src="img/nfts/9.png" width="100%" />
            <img src="img/nfts/10.png" width="100%" />
            <img src="img/nfts/11.png" width="100%" />
            <img src="img/nfts/12.png" width="100%" />
            <img src="img/nfts/13.png" width="100%" />
            <img src="img/nfts/14.png" width="100%" />
            <img src="img/nfts/15.png" width="100%" />
            <img src="img/nfts/16.png" width="100%" />
            <img src="img/nfts/17.png" width="100%" />
            <img src="img/nfts/18.png" width="100%" />
            <img src="img/nfts/19.png" width="100%" />
            <img src="img/nfts/20.png" width="100%" />
            <img src="img/nfts/21.png" width="100%" />
            <img src="img/nfts/22.png" width="100%" />
            <img src="img/nfts/23.png" width="100%" />
            <img src="img/nfts/24.png" width="100%" />
            <img src="img/nfts/25.png" width="100%" />
            <img src="img/nfts/26.png" width="100%" />
            <img src="img/nfts/27.png" width="100%" />
            <img src="img/nfts/28.png" width="100%" />
            <img src="img/nfts/29.png" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
