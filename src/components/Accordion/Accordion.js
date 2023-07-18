import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FaqAccordion() {
  const items = [
    { uuid: 0, heading: "What is the supply?", content: "Supply is supply?" },
    { uuid: 1, heading: "What is the supply?", content: "Supply is supply?" },
    { uuid: 2, heading: "What is the supply?", content: "Supply is supply?" },
    { uuid: 3, heading: "What is the supply?", content: "Supply is supply?" },
  ];

    return (
      <Accordion allowZeroExpanded>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className="my-[30px]">
            <AccordionItemHeading>
              <AccordionItemButton className="px-[40px] py-[20px] font-coda text-[17px] bg-[#3B3D5E]">
                {item.heading}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-[40px] font-[500] text-[18px] text-[#3B3D5E] bg-[#DEDEDE]">
              {item.content}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
}
