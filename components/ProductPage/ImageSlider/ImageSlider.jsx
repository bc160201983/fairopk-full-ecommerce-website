import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Image from "next/image";

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
              alt=""
              width={346}
              height={346}
              className="object-cover"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlider;
