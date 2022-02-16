import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "../../context/context";
import AddtoCartBtns from "../AddToCartBtn/AddtoCartBtns";
import IncAndDec from "./IncAndDec";
import Link from "next/link";

export const default_image =
  "https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1";

const ProductList = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
  slug,
}) => {
  const { AddToCart, cart, outOfStock } = useGlobalContext();
  // const style = {
  //   trasnform: "translateY(10px)",
  //   backgroundColor: "pink",
  // };

  return (
    <div>
      <div className="product-info relative flex flex-col hover:transition-all hover:rounded-[9px]">
        <Link href={`/product/${slug}`}>
          <a>
            <div className="relative w-[126px] flex justify-center items-center h-[126px] rounded-[9px] border border-solid border-[#f2f2f2]">
              <Image
                src={image === undefined ? default_image : image?.src}
                alt=""
                width={88}
                height={88}
                layout="intrinsic"
              />
            </div>
          </a>
        </Link>
        {/* button */}
        <div className="relative h-[20px] cursor-pointer">
          <AddtoCartBtns
            id={id}
            name={name}
            price={price}
            image={image}
            stock_quantity={stock_quantity}
            stock_status={stock_status}
          />
          {cart?.map((cartItem) => {
            if (cartItem.id === id) {
              return (
                <IncAndDec
                  key={cartItem.id}
                  {...cartItem}
                  stock_quantity={stock_quantity}
                />
              );
            }
          })}
        </div>

        <Link href={`/product/${slug}`}>
          <a>
            <div className="p-0">
              <div className="product-name pt-1 truncate text-[14px]">
                {name?.slice(0, 15)}
              </div>
              <div className="weight whitespace-nowrap">1Kg</div>
              <div className="price whitespace-nowrap font-bold	">
                Rs
                {Math.trunc(price)}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
