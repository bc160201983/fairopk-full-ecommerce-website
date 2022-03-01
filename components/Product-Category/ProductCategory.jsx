import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { api } from "../../lib/woo";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Loader from "../../public/Loading-bar.gif";
import ProductList from "./RightSideBar/ProductList";
import Link from "next/link";
import Head from "next/head";
import { AiOutlineRight } from "react-icons/ai";

const ProductCategory = ({ data }) => {
  const router = useRouter();
  //const mainCatslug = router.query.mainCatslug.split("-");
  const { catId } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [parentName, setParentName] = useState(data.parent[0].name);
  const [subName, setSubName] = useState({ main: data.parent[0].name });
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
  const mainCatName = (id) => {
    const name = data.sub.find((cat) => cat.id === id);
    setParentName(name?.name || data.parent[0].name);

    setSubName((prev) => {
      return { ...prev, subcat: name?.name };
    });
  };
  // const slugMaker = () => {
  //   console.log(data.sub);
  // };
  useEffect(() => {
    mainCatName(catId);
    //slugMaker();
    fetchProduct(catId);
  }, [catId]);

  return (
    <div className="max-w-screen-xl mx-auto h-full pt-5 pb-5">
      <div className="content flex shadow-md h-full bg-white">
        <div className="self-start basis-1/4 md:block hidden border sticky overflow-y-auto top-[64px] border-[#EEEEEE]">
          <LeftSideBar parent={data.parent} sub={data.sub} />
        </div>

        <div className="right md:basis-3/4 w-full bg-white border-l-[1px] border-[#EEEEEE]">
          <div className="right-header pl-6 border border-[#EEEEEE] w-full">
            <div className="pt-[15px] pb-[5px] text-[12px] font-thin text-[#666666]">
              <div className="whitespace-nowrap space-x-1 flex">
                <div className="breadcrum flex justify-center items-center space-x-1">
                  <div>
                    <Link href={"/"}>
                      <a>Home</a>
                    </Link>
                  </div>
                  <div className="">
                    <AiOutlineRight />
                  </div>
                </div>
                <div className="breadcrum flex justify-center items-center space-x-1">
                  <div>
                    <Link href={"/"}>
                      <a>{data.parent[0].name}</a>
                    </Link>
                  </div>
                  {subName && (
                    <div className="">
                      <AiOutlineRight />
                    </div>
                  )}
                </div>
                {subName && (
                  <div className="">
                    <div>{subName.subcat}</div>
                  </div>
                )}
              </div>
            </div>
            <Head>
              <title>{parentName || subName}</title>
              <meta
                property="og:title"
                content={parentName || subName}
                key="title"
              />
            </Head>
            <div className="current-category font-[600] flex pt-[5px] pb-[15px]">
              {parentName || subName}
            </div>
          </div>
          {isLoading ? (
            <div className="loading">
              <img src={Loader.src} />
            </div>
          ) : (
            products.map((p) => {
              return <ProductList key={p.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
