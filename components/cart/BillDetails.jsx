import React from "react";
import { useGlobalContext } from "../../context/context";

const BillDetails = () => {
  const { total } = useGlobalContext();
  return (
    <div className="bg-white mt-2 h-[170px] p-[16px] w-full divide-y">
      <div className="title font-bold text-base mb-[16px]">bill details</div>
      <div className="subtotal flex justify-between text-sm ">
        <div className="title-subtotal">SUB TOTAL</div>
        <div className="amount">Rs{total.total}</div>
      </div>
      <div className="discount flex justify-between text-sm">
        <div className="title-subtotal">product discount</div>
        <div className="amount">-Rs10</div>
      </div>
      <div className="delivery-charges flex justify-between text-sm">
        <div className="title-subtotal">delivery charges</div>
        <div className="amount">Rs50</div>
      </div>
      <div className="bill-total flex justify-between mt-[16px]">
        <div className="title-subtotal font-medium text-sm">bill total</div>
        <div className="amount font-medium text-sm">Rs{total.total}</div>
      </div>
    </div>
  );
};

export default BillDetails;
