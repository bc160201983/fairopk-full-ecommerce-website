import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const router = useRouter();
  const showSearchBar = router.pathname === "/product/[slug]" ? true : false;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="">
        <div className="search-input  border-solid	border-[D8D8D8] relative">
          <button className="absolute block top-0	left-0 h-[42px] w-[40px] text-[#999999] leading-[27.6px] pl-2 text-[24px]">
            <AiOutlineSearch className="" />
          </button>
          <input
            placeholder="Search for products"
            className={`w-full rounded-t-[8px] h-11 mr-[-43px] pr-[16px] pl-[48px] focus:outline-none ${
              visible || "rounded-[8px]"
            }`}
            type="text"
          />
          {visible && (
            <div
              ref={wrapperRef}
              id="myModal"
              className={`search-modal bg-white w-full h-52 absolute rounded-b-[8px] z-[2001] my-modal ease-in duration-300	`}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
