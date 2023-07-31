import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function FaqAccordion() {
  const items = [
    {
      uuid: 0,
      heading: "What is mint price?",
      content: "Our mint price will be 0.0025 BTC.",
    },
    {
      uuid: 1,
      heading: "Total Supply?",
      content: "3,333 Bitcoin Raccoons on the Bitcoin blockchain.",
    },
    {
      uuid: 2,
      heading: "When did Bitcoin Raccoons mint?",
      content:
        "Keep an eye out on our Twitter page @BTCRaccoons to be the first to know when the discord is open. We advise turning notifications on to maximise your chances of entering.",
    },
    {
      uuid: 3,
      heading: "I have some more questions, where can I get in touch?",
      content:
        "Please feel free to reach out to us on our Discord or drop us a Tweet.",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div class="item" className="my-[30px]">
          <a
            href={`#tab${item.uuid}`}
            className="title font-coda"
          >
            {item.heading}
          </a>
          <div
            id={`tab${item.uuid}`}
            className="content " //p-[40px] font-[500] text-[18px] text-[#3B3D5E] bg-[#DEDEDE]
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
