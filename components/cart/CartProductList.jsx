import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { default_image } from "../Home/ProductList";
import AddBtn from "./AddBtn";
import AddtoCartBtns from "../AddToCartBtn/AddtoCartBtns";
import Image from "next/image";
import Link from "next/link";

const CartProductList = ({
  id,
  price,
  images,
  name,
  stock_quantity,
  stock_status,
  slug,
}) => {
  const { cart, outOfStock, AddToCart } = useGlobalContext();
  const image = images[0];
  return (
    <div className="">
      <div className="product px-2 h-[270px] w-[244px] bg-white mr-0">
        <Link href={`/product/${slug}`}>
          <a>
            <div className="image flex justify-center items-center mx-auto h-[140px] w-[140px]">
              <Image
                src={image === undefined ? default_image : image?.src}
                alt=""
                width={140}
                height={140}
                layout="intrinsic"
              />
            </div>
          </a>
        </Link>
        <div className="item-details">
          <div className="price font-bold text-[16px] w-full">
            Rs{Math.trunc(price)}
          </div>
          <div className="product-title whitespace-nowrap w-full text-sm">
            {name.slice(0, 20)}
          </div>
          <div className="weight text-xs mt-1 mb-2">500 g</div>

          <div className="btn relative">
            <AddBtnSlider
              id={id}
              name={name}
              price={price}
              image={image}
              hide={false}
              stock_quantity={stock_quantity}
              stock_status={stock_status}
            />

            {cart.map((cartItem) => {
              if (cartItem.id === id) {
                return (
                  <AddBtn
                    key={cartItem.id}
                    id={cartItem.id}
                    amount={cartItem.amount}
                    stock_quantity={cartItem.stock_quantity}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const AddBtnSlider = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
  hide,
}) => {
  const { cart, outOfStock, AddToCart } = useGlobalContext();

  return (
    <div
      onClick={
        !outOfStock(stock_status)
          ? () => AddToCart(id, name, price, image, stock_quantity)
          : null
      }
      className={`

              ${hide ? "hidden" : `block`}
            ${
              outOfStock(stock_status) ? `bg-[#ccad00]` : `bg-white`
            } cursor-pointer rounded-[4px] cursor-pointe bottom-1 w-full flex justify-center items-center border border-solid border-[cccccc] shadow-md`}
    >
      {outOfStock(stock_status) ? (
        <div
          className={`whitespace-nowrap text-white flex justify-center items-center w-full h-[36px]`}
        >
          out of stock
        </div>
      ) : (
        <div
          className={`text-[#0c831F] flex justify-center items-center rounded-[4px] w-full h-[36px]`}
        >
          add
        </div>
      )}
    </div>
  );
};

export default CartProductList;
