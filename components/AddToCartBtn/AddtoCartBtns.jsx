import React from "react";
import { useGlobalContext } from "../../context/context";

const AddtoCartBtns = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
}) => {
  const { AddToCart, outOfStock } = useGlobalContext();
  return (
    <div>
      <div
        onClick={
          !outOfStock(stock_status)
            ? () => AddToCart(id, name, price, image, stock_quantity)
            : null
        }
        className={`
            ${
              outOfStock(stock_status) ? `bg-[#ccad00]` : `bg-white`
            } absolute rounded-[4px] cursor-pointe bottom-1 lg:w-[128px] w-[90px] flex justify-center items-center border border-solid border-[#dddddd]`}
      >
        {outOfStock(stock_status) ? (
          <div
            className={`whitespace-nowrap text-white flex justify-center items-center rounded-[4px]  left-[6rem] bottom-[96px] lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]`}
          >
            out of stock
          </div>
        ) : (
          <div
            className={`text-[#0c831F] flex justify-center items-center rounded-[4px] left-[6rem] bottom-[96px] lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]`}
          >
            add
          </div>
        )}
      </div>
    </div>
  );
};

export default AddtoCartBtns;
