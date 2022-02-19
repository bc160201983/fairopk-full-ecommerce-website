import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Image from "next/image";
import { default_image } from "../../Home/ProductList";

const ImageSlider = ({ image }) => {
  const images = [image[0]?.src];

  const zoomInProperties = {
    indicators: true,
    infinite: false,
    arrows: true,
    autoplay: true,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Image
              rel="preload"
              priority={true}
              alt=""
              width={346}
              height={346}
              className="object-cover flex-shrink"
              src={each === undefined ? default_image : each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlider;
