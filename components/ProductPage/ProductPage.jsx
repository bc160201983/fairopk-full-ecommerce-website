import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductPage = ({ product }) => {
  const [productData, setProductData] = useState(product || []);
  console.log(productData);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="first-row grid lg:grid-cols-2 grid-cols-1 h-[400px]">
        <div className="image-slider flex-1 bg-blue-200">
          <div className="carusal">image</div>
        </div>
        <div className="product-info pt-5 flex-1 flex flex-col justify-evenly mt-5">
          <div className="info px-4">
            <div className="title-btn my-2 flex justify-between">
              <div className="name pr-[2px] font-bold text-[14px]">
                {productData[0].name}
              </div>
              <div className="btn text-[14px] text-[#0c831f] rounded text-center w-[100px] h-7 border-2 border-[#CCCCCC]">
                add
              </div>
            </div>
            <div className="unit mb-2 text-sm">
              Category :
              <Link href={"#"}>
                <a>{productData[0].categories[0].name}</a>
              </Link>
            </div>
            <div className="price font-bold text-[14px]">
              Rs{Math.trunc(productData[0].price)}
            </div>
          </div>
          <div className="unti-section items-center">
            <div className="flex flex-col  m-3 justify-start">
              <div className="my-1 mx-[6px]">Unit</div>
              <div className="m-2 p-2 h-[38px] w-[56px] whitespace-nowrap text-center border-[1px] border-[#0c831f] rounded-[3px]">
                1 Unit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
