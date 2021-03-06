import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useGlobalContext } from "../../../context/context";
import CatList from "./CatList/CatList";
const LeftSideBar = ({ parent, sub }) => {
  const router = useRouter();
  const [main, setMain] = useState(parent[0].id);
  const { catId, setCatId } = useGlobalContext();

  return (
    <div>
      <div className="Title h-[54px] hover:bg-gray-200 cursor-pointer border-b-[1px] border-[#EEEEEE]">
        <div
          onClick={() => setCatId(main)}
          className={`${
            main === catId ? `active` : null
          } h-full w-full pt-[17px] pr-[14px] pb-[18px] pl-[30px] float-left font-bold text-[#666]`}
        >
          {parent[0].name}
        </div>
      </div>
      {sub.map((cat, index) => {
        const { name, id, count, slug } = cat;
        return (
          <CatList
            key={id}
            name={name}
            id={id}
            setMain={setMain}
            main={main}
            slug={slug}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default LeftSideBar;
