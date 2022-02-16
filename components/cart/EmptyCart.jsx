import React from "react";

const EmptyCart = () => {
  return (
    <div className="bg-white h-[318px] flex flex-col justify-center items-center p-4">
      <div className="w-[144px] h-[144px]">
        <img
          src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
          alt=""
        />
      </div>
      <div className="font-bold text-[18px] whitespace-pre-wrap text-center mb-2">
        <h2>you don't have any items in your cart</h2>
      </div>
      <div className="mb-5 text-[14px]">
        <p>your favourite items are just a click away</p>
      </div>
      <div className="btn bg-[#0c831f] p-2 text-white rounded-[4px] text-center w-[174px] cursor-pointer">
        <div className="px-2 text-[12px]">start shopping</div>
      </div>
    </div>
  );
};

export default EmptyCart;
