import "react-slideshow-image/dist/styles.css";
import React, { useState } from "react";
import Image from "next/image";
import { default_image } from "../../Home/ProductList";
import styled from "styled-components";
const ImageSlider = ({ image }) => {
  const [main, setMain] = useState(image[0].src);

  return (
    <div>
      <Wrapper>
        <Image
          src={main}
          width={346}
          height={346}
          alt="main"
          className="main shadow-lg"
        />
        <div className="gallery">
          {image.map((image, index) => {
            return (
              <Image
                src={image.src}
                alt={image.name}
                width={75}
                height={75}
                key={index}
                onClick={() => setMain(image.src)}
                className={`${image.src === main ? "active" : null}`}
              />
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  .main {
    height: 400px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  .gallery {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid #0c831f;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ImageSlider;
