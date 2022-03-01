import Image from "next/image";
import Link from "next/link";
import React from "react";
import { default_image } from "../../Home/ProductList";
const url =
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_476555.jpg";
const ProductList = ({ name, price, sku, images, slug }) => {
  const image = images[0];

  return (
    <div className="">
      <Link href={`/product/${slug}`} scroll={true} passHref>
        <div className="cat-product-info md:m-0 mt-[16px] mr-[6px] mb-[0px] ml-[6px] md:rounded-none md:shadow-none rounded-[3px] shadow-md bg-white cursor-pointer min-h-[300px] min-w-[240px] flex flex-col justify-between p-3 border border-r-[white] border-t-[white] border-[#EEEEEE] md:hover:border-[#CCCCCC]">
          <div className="image-part space-y-5">
            <div className="image-loader w-[140px] h-[140px] mx-auto flex-shrink-0">
              <Image
                src={image === undefined ? default_image : image?.src}
                width={120}
                height={120}
                alt=""
              />
            </div>
            <div className="text-[12px] text-[#666666] overflow-hidden overflow-ellipsis break-words block leading-[1em] max-h-[2em]">
              {name}
            </div>
            <div className="sku flex justify-start text-[12px]">
              <div>SKU: </div>
              <div>{sku}</div>
            </div>
          </div>

          <div className="price-btn md:flex md:justify-between md:items-center w-full">
            <div className="price text-[16px] font-bold">
              Rs{Math.trunc(price)}
            </div>
            <div className="cart-btn h-[32px] md:w-[98px] rounded-[3px] md:rounded-[68px] w-full bg-[#FFE141] flex justify-center items-center">
              <div className="px-4 text-[12px]">Add To Cart</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
