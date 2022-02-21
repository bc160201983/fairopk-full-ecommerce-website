import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

const IncAndDec = ({ id, amount, stock_quantity }) => {
  const { increase, decrease, showAlert } = useGlobalContext();

  return (
    <div className="absolute rounded-[4px] bg-[#FFe141] bottom-1 lg:w-[128px] w-[90px] flex justify-between items-center border border-solid border-[#dddddd]">
      <div
        onClick={() => decrease(id)}
        className="cursor-pointer flex justify-center items-center rounded-[4px]  left-[6rem] bottom-[96px] lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]"
      >
        <AiOutlineMinus className="lg:h-[28px] lg:w-[28px] w-5 h-5" />
      </div>
      <div className="cursor-pointer flex justify-center items-center rounded-[4px]  lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]">
        {amount}
      </div>

      <div
        onClick={
          amount === stock_quantity
            ? () => showAlert(true)
            : () => increase(id, stock_quantity)
        }
        className={`${amount === stock_quantity && `text-[#ccad00]`}
    
         cursor-pointer flex justify-center items-center rounded-[4px] lg:w-[36px] w-[28px] lg:h-[36px] h-[28px]`}
      >
        <AiOutlinePlus className="lg:h-[28px] lg:w-[28px] w-5 h-5" />
      </div>
    </div>
  );
};

export default IncAndDec;
