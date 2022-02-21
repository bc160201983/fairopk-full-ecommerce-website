import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { api } from "../../../lib/woo";

const FooterCategories = () => {
  const [mainCat, setMainCat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCat = async () => {
    const res = await api.get("products/categories", {
      per_page: 200,
    });
    const data = await res.data;
    const newCat = data.filter((cat) => cat.display != "subcategories");
    setMainCat(newCat);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1">
      <div className="categories sm:p-0 p-4 border-b-[1px] md:border-r-[1px] border-[#EEEEEE]">
        <div className="font-bold">Categories</div>
        <ul className={`grid grid-cols-4 ${isLoading && `animate-pulse`} `}>
          {mainCat.map((cat) => {
            return (
              <Link key={cat.id} href={`/product-category/${cat.slug}`}>
                <a>
                  <li className="font-extralight text-[12px] text-[#666666]">
                    {cat.name}
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
      {/* <div className="categories lg:pl-10 pl-0 border-b-[1px] border-[#EEEEEE]">
        <div className="font-bold">Categories</div>
        <ul className={`grid grid-cols-4 ${isLoading && `animate-pulse`} `}>
          {mainCat.map((cat) => {
            return (
              <Link key={cat.id} href={`#`}>
                <a>
                  <li className="font-extralight text-[12px] whitespace-nowrap text-[#666666]">
                    {cat.name}
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default FooterCategories;
