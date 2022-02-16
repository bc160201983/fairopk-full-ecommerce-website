import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { useGlobalContext } from "../../context/context";

const Footer = () => {
  const { total, cart } = useGlobalContext();

  return (
    <>
      <div
        className={`shadow-top top-[calc(100vh - 64px)] flex items-center pt-[8px] p-[16px] sticky bottom-0 `}
      >
        <div className="flex cursor-pointer justify-between items-center font-bold p-[12px] pr-[16px] w-full rounded-[4px] text-[14px] text-white bg-[#0c831F]">
          <div className="left flex space-x-2 justify-center items-center">
            <div className="items">{total.amount} item</div>
            <div className="font-bold flex justify-center items-center h-[16px] w-[16px]">
              <GoPrimitiveDot />
            </div>
            <div className="total-price">Rs{total.total}</div>
          </div>
          <div className="right mr-[4px] flex justify-center items-center">
            <div>proceed</div>
            <div className="h-[16px] w-[16px] text-[16px] items-center">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
