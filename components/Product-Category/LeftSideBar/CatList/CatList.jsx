import { Router } from "next/router";
import React, { useContext } from "react";
import { useGlobalContext } from "../../../../context/context";

const CatList = ({ id, name, setMain, count, main, slug }) => {
  const { catId, setCatId } = useGlobalContext();
  return (
    <div>
      {" "}
      <div className="h-[54px] hover:bg-gray-200 cursor-pointer border-b-[1px] border-[#EEEEEE]">
        <div
          onClick={() => setCatId(id)}
          className={` ${
            catId === id ? `active` : null
          } h-full w-full pt-[17px] pr-[14px] pb-[18px] pl-[30px] float-left text-[14px] text-[#666] flex whitespace-nowrap`}
        >
          {name}
          <div className="ml-2">({count})</div>
        </div>
      </div>
    </div>
  );
};

export default CatList;
