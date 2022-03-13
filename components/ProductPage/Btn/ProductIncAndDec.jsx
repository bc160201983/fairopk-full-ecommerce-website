import React from "react";
import { useGlobalContext } from "../../../context/context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ProductIncAndDec = ({ id, amount, stock_quantity }) => {
  const { increase, decrease, showAlert } = useGlobalContext();
  return (
    <div>
      <div className="absolute rounded-[4px] bg-[#FFe141] bottom-0 w-[100px] h-7 flex justify-between items-center border border-solid border-[#dddddd]">
        <div
          onClick={() => decrease(id)}
          className="cursor-pointer flex justify-center items-center rounded-[4px]  left-[6rem] bottom-[96px] w-[26px] h-[28px]"
        >
          <AiOutlineMinus className="w-4 h-4" />
        </div>
        <div className="cursor-pointer flex justify-center items-center rounded-[4px] text-[12px]">
          {amount}
        </div>

        <div
          onClick={
            amount === stock_quantity
              ? () => showAlert(true)
              : () => increase(id, stock_quantity)
          }
          className={`${amount === stock_quantity && `text-[#ccad00]`}

     cursor-pointer flex justify-center items-center rounded-[4px] w-[26px] h-[28px]`}
        >
          <AiOutlinePlus className=" w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductIncAndDec;
