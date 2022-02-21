import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProductHeader = ({ title, refs }) => {
  const scroll = (scrollOffset) => {
    refs.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="header flex justify-between items-center content-center">
        <div className="left lg:ml-2 ml-4">
          <div>
            <h2 className="font-bold flex-nowrap lg:text-[18px] text-[16px]">
              {title}
            </h2>
            <p className="flex-nowrap lg:text-sm text-xs">
              eat fresh, stay healthy
            </p>
          </div>
        </div>
        <div className="right lg:mr-2 mr-4 flex sm:justify-center items-center sm:space-x-3">
          <div className="flex cursor-pointer justify-center items-center flex-nowrap float-right text-sm py-1">
            <div>see more</div>
            <div className="icon ml-1 bg-[#FFe141] flex justify-center items-center  rounded-full">
              <AiOutlineRight className="w-2 h-2" />
            </div>
          </div>
          <div className="lg:inline-block hidden">
            <div className="flex flex-col justify-center items-center">
              <div
                onClick={() => scroll(-500)}
                className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd] hover:bg-[#0c831f] hover:transition-all hover:text-white cursor-pointer"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:inline-block hidden">
            <div
              onClick={() => scroll(500)}
              className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd] hover:bg-[#0c831f] hover:transition-all hover:text-white cursor-pointer"
            >
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
