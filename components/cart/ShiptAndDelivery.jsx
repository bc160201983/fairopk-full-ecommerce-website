import React from "react";
import { useGlobalContext } from "../../context/context";

const ShiptAndDelivery = () => {
  const { total } = useGlobalContext();
  return (
    <div>
      <div className="shipment text-[12px] flex flex-row justify-between items-center px-4 h-[40px] ">
        <div>shipment 1 of 1</div>
        <div>{total.amount} item(s)</div>
      </div>
      <div className="delivery-time h-[72px] p-[16px] bg-white">
        <div className="font-bold text-[16px] whitespace-nowrap max-w-full">
          delivery in 12 minutes
        </div>
        <div className="pt-[4px] text-[12px]">
          from Super Store - Mumbai Kurla West ES24
        </div>
      </div>
    </div>
  );
};

export default ShiptAndDelivery;
