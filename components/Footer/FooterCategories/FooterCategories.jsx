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
    <div>
      <div className="categories">
        <div className="font-bold">Categories</div>
        <ul className={`grid grid-cols-4 ${isLoading && `animate-pulse`} `}>
          {mainCat.map((cat) => {
            return (
              <Link key={cat.id} href={`#`}>
                <a>
                  <li className="font-extralight text-[12px]">{cat.name}</li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="others flex-1"></div>
    </div>
  );
};

export default FooterCategories;
