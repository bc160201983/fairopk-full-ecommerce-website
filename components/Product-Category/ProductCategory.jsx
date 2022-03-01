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
import Image from "next/image";
import MobileCat from "./LeftSideBar/MobileCat/MobileCat";

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
      per_page: 20,
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
        <div className="self-start basis-1/4 lg:block hidden border sticky top-[120px] border-[#EEEEEE]">
          <LeftSideBar parent={data.parent} sub={data.sub} />
        </div>

        <div className="right lg:basis-3/4 w-full overflow-y-auto no-scrollbar">
          <div className="right-header pl-3 border bg-white border-[#EEEEEE] w-full">
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
            <div className="current-category font-[600] flex pt-[5px] pb-[15px] md:text-[16px] text-[13px]">
              {parentName || subName}
            </div>
            <div className="mobile-cat-nav lg:hidden block">
              <MobileCat parent={data.parent} sub={data.sub} />
            </div>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:bg-white bg-gray-200">
            {isLoading ? (
              <div className="loading">
                <Image
                  src={Loader.src}
                  width={100}
                  height={100}
                  alt="loading"
                />
              </div>
            ) : (
              products.map((p) => {
                return <ProductList key={p.id} {...p} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
