import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useRouter } from "next/router";
import Head from "next/head";
const ProductPage = ({ product }) => {
  const router = useRouter();
  const [productData, setProductData] = useState(product || []);
  const RelatedProduct = productData[0].related_ids;

  return (
    <div className="max-w-screen-xl pt- mx-auto border-b-[4px] border-gray-200">
      <Head>
        <title>{productData[0].name}</title>
        <meta property="og:title" content={productData[0].name} key="title" />
      </Head>
      <div className="first-row grid lg:grid-cols-2 grid-cols-1">
        <div className="image-slider w-full flex-1 flex justify-center items-center">
          <div className="mx-auto">
            <ImageSlider image={productData[0].images} />
          </div>
        </div>
        <div className="product-info pt-5 flex-1 flex flex-col justify-evenly mt-5">
          <div className="info px-4 lg:pb-0 pb-5">
            <div className="title-btn my-2 flex justify-between">
              <div className="name pr-[2px] md:font-bold md:text-black text-[#666666] md:text-[16px] text-[14px]">
                {productData[0].name}
              </div>
              <div className="btn shadow-md cursor-pointer flex justify-center items-center text-[14px] text-[#0c831f] rounded w-[100px] h-7 border-[1px] border-[#CCCCCC]">
                add
              </div>
            </div>
            <div className="unit mb-2 text-[14px] md:text-black text-[#666666]">
              Category :
              <Link
                href={`/product-category/${productData[0].categories[0].slug}`}
              >
                <a>{productData[0].categories[0].name}</a>
              </Link>
            </div>
            <div className="price font-bold text-[14px]">
              Rs{Math.trunc(productData[0].price)}
            </div>
          </div>
          <div className="unti-section items-center border-t-[1px] border-[#ccccccS]">
            <div className="flex flex-col m-3 justify-start">
              <div className="my-1 mx-[6px] md:text-[16px] text-[12px]">
                Unit
              </div>
              <div className="m-2 p-2 h-[38px] w-[56px] whitespace-nowrap flex justify-center items-center border-[1px] border-[#0c831f] rounded-[3px]">
                1 Unit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products h-[338px]  border-t-[4px] border-gray-200">
        <div className="title py-4 pl-4 w-full text-[18px] font-bold">
          <h1>you may also like</h1>
        </div>
        <div className="products">
          <RelatedProducts related_ids={RelatedProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
