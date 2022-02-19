import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { api } from "../../../lib/woo";
import CartProductList from "../../cart/CartProductList";
const fetcher = async (related_ids) => {
  console.log(related_ids);
};
const RelatedProducts = ({ related_ids }) => {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const res = await api.get("products", { include: related_ids });
    const data = await res.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex no-scrollbar overflow-x-scroll">
      {products.map((item) => {
        return <CartProductList key={item.id} {...item} />;
      })}
    </div>
  );
};

export default RelatedProducts;
