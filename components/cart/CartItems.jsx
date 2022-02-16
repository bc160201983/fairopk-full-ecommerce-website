import React from "react";
import { default_image } from "../Home/ProductList";
import CartBtns from "./CartBtns";

const CartItems = ({ id, title, price, image, amount, stock_quantity }) => {
  return (
    <div>
      <div className="product-list h-[140px] mt-[2px] flex bg-white">
        <div className="product-image h-[140px] w-[124px] flex justify-center items-center">
          <img
            className=""
            src={image === undefined ? default_image : image?.src}
            alt=""
          />
        </div>
        <div className="product-details flex flex-col justify-between w-[208px] items-start m-[16px]">
          <div className="text-[14px] w-full">{title}</div>
          <div className="text-[16px] w-full font-bold">
            Rs{Math.trunc(price)}
          </div>
          <div className="flex flex-row justify-between items-center w-full font-medium text-[12px] text-[#666666]">
            <div>500 g</div>
            <div className="inc-dec-btns">
              <CartBtns
                id={id}
                amount={amount}
                stock_quantity={stock_quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
