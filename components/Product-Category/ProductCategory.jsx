import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { api } from "../../lib/woo";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Loader from "../../public/Loading-bar.gif";

const ProductCategory = ({ data }) => {
  const router = useRouter();
  const mainCatslug = router.query;
  const { catId } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProduct = async (id) => {
    setIsLoading(true);
    const res = await api.get("products", {
      category: id,
    });
    const data = await res.data;
    setIsLoading(false);
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct(catId);
  }, [catId]);

  return (
    <div className="max-w-screen-xl mx-auto h-full pt-5 pb-5">
      <div className="content flex shadow-md h-full ">
        <div className="left basis-1/4 bg-white border border-[#EEEEEE]">
          <LeftSideBar parent={data.parent} sub={data.sub} />
        </div>
        <div className="right basis-3/4 bg-white">
          {isLoading ? (
            <div className="loading">
              <img src={Loader.src} />
            </div>
          ) : (
            products.map((p) => <h4 key={p.id}>{p.name}</h4>)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
