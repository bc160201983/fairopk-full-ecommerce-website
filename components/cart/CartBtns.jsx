import React from "react";
import { useGlobalContext } from "../../context/context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartBtns = ({ id, amount, stock_quantity }) => {
  const { increase, decrease, showAlert } = useGlobalContext();
  return (
    <div className="rounded-[4px] bg-[#FFe141] w-[68px] h-[28px] flex justify-between items-center border border-solid border-[#dddddd]">
      <div
        onClick={() => decrease(id)}
        className="cursor-pointer flex justify-center items-center rounded-[4px] w-[26px] h-[28px]"
      >
        <AiOutlineMinus className="h-[16px] w-[16px] text-black" />
      </div>
      <div className="cursor-pointer flex justify-center items-center rounded-[4px] w-[26px] h-[28px] text-black">
        {amount}
      </div>

      <div
        onClick={
          amount === stock_quantity
            ? () => showAlert(true)
            : () => increase(id, stock_quantity)
        }
        className={`${amount === stock_quantity && `text-[#ccad00]`}
    
         cursor-pointer flex justify-center items-center rounded-[4px] w-[26px] h-[28px] text-black`}
      >
        <AiOutlinePlus className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
};

export default CartBtns;
