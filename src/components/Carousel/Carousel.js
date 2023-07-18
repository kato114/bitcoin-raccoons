import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import nft1 from "../../assets/img/nfts/1.jpg";
import nft2 from "../../assets/img/nfts/2.jpg";
import nft3 from "../../assets/img/nfts/3.jpg";
import nft4 from "../../assets/img/nfts/4.jpg";
import nft5 from "../../assets/img/nfts/5.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={nft1} className="px-4" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src={nft2} className="px-4" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src={nft3} className="px-4" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src={nft4} className="px-4" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src={nft5} className="px-4" width="100%" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => {
    const responsive = {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 5,
        itemsFit: "contain",
      },
    };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite={true}
      disableButtonsControls={true}
      disableDotsControls={true}
      responsive={responsive}
    />
  );
};

export default Carousel;
