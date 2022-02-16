import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { api } from "../../lib/woo";
import IncAndDec from "../Home/IncAndDec";
import Addbtn from "./AddBtn";
import CartProductList from "./CartProductList";

const ProductSlider = ({ id, name }) => {
  const { cart } = useGlobalContext();
  // const { id, name } = category[0];
  const [products, setProducts] = useState([]);

  const fetchCatProducts = async () => {
    const res = await api.get("products", {
      category: parseInt(id),
    });
    const data = await res.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchCatProducts();
  }, []);

  return (
    <div className={`bg-white h-[350px] mb-4 ${cart.length !== 0 && `mt-2`}`}>
      <div className="header flex justify-between p-[16px] items-center">
        <div className="title font-bold text-[18px]">{name}</div>
        <div className="link py-1 font-medium text-[14px]">see more</div>
      </div>
      <div className="flex overflow-x-auto">
        {products.map((item) => {
          return <CartProductList key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
