import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";
import DeliveryIcon from "./DeliveryIcon/DeliveryIcon";
import FooterCategories from "./FooterCategories/FooterCategories";
import Social from "./Social/Social";

data = [
  {
    id: 1,
    title: "10 minute grocery now",
    image: "https://blinkit.com/images/home/express-delivery-icon-93fce76.png",
    dis: "Get your order delivered to your doorstep at the earliest from dark stores near you.",
  },
  {
    id: 2,
    title: "Wide Assortment",
    image:
      "https://blinkit.com/images/home/footer-genuine-products-icon-d2756ce.png",
    dis: "Choose from 5000+ products across food, personal care, household & other categories.",
  },
  {
    id: 3,
    title: "Easy Returns",
    image:
      "https://blinkit.com/images/home/footer-easy-returns-icon-02b777e.png",
    dis: "Not satisfied with a product? Return it at the doorstep & get a refund within hours.",
  },

  {
    id: 4,
    title: "Best Prices & Offers",
    image: "https://blinkit.com/images/home/footer-best-price-icon-90b5bd7.png",
    dis: "Cheaper prices than your local supermarket, great cashback offers to top it off.",
  },
];

const Footer = () => {
  return (
    <div className="">
      <div className="xl:h-[155px] h-[275px] max-w-screen-xl mx-auto">
        <div className="first-row grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-4 xl:p-0 p-4 h-full">
          {data.map((item) => (
            <DeliveryIcon
              key={item.id}
              title={item.title}
              image={item.image}
              dis={item.dis}
            />
          ))}
        </div>
      </div>
      <div className="md:pt-5 lg:mt-0 mt-[100px] max-w-screen-xl mx-auto border-t-[1px] border-[#EEEEEE]">
        <div className="secound-row p-4">
          <FooterCategories />
        </div>
      </div>
      <div className="md:pt-5 lg:h-0 sm:h-[230px] h-[100px] lg:mt-0 mt-[10px] max-w-screen-xl mx-auto">
        <div className="secound-row pl-1 pb-2">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
