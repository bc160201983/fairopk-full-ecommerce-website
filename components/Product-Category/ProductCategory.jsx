import { useRouter } from "next/router";
import React from "react";
import LeftSideBar from "./LeftSideBar/LeftSideBar";

const ProductCategory = ({ data }) => {
  console.log(data.parent);
  return (
    <div className="max-w-screen-xl mx-auto h-full pt-5 pb-5">
      <div className="content flex shadow-md h-full ">
        <div className="left basis-1/4 bg-white border border-[#EEEEEE]">
          <LeftSideBar parent={data.parent} sub={data.sub} />
        </div>
        <div className="right basis-3/4 bg-white">right</div>
      </div>
    </div>
  );
};

export default ProductCategory;
