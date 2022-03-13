import React from "react";
import { useGlobalContext } from "../../../context/context";

const ProductAddBtn = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
}) => {
  const { cart, AddToCart, outOfStock } = useGlobalContext();
  return (
    <div>
      <div
        onClick={
          !outOfStock(stock_status)
            ? () => AddToCart(id, name, price, image, stock_quantity)
            : null
        }
        className="btn shadow-md cursor-pointer flex justify-center items-center text-[14px] text-[#0c831f] rounded w-[100px] h-7 border-[1px] border-[#CCCCCC]"
      >
        {outOfStock(stock_status) ? (
          <div
            className={`whitespace-nowrap text-[#499220] flex justify-center items-center rounded left-[6rem] bottom-[96px] lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]`}
          >
            out of stock
          </div>
        ) : (
          <div
            className={`btn cursor-pointer flex justify-center items-center text-[14px] text-[#0c831f] rounded w-[100px] h-7 left-[6rem] bottom-[96px]`}
          >
            add
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAddBtn;
