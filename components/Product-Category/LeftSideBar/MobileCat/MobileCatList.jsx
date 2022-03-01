import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useGlobalContext } from "../../../../context/context";

const MobileList = tw.div`m-[5px] py-2 px-[10px] border border-[#0c831f] rounded-[88px] text-[12px] whitespace-nowrap hover:bg-[#0c831f] hover:transition-all hover:text-white cursor-pointer`;

const MobileCatList = ({ id, name }) => {
  const { catId, setCatId } = useGlobalContext();
  return <MobileList onClick={() => setCatId(id)}>{name}</MobileList>;
};

export default MobileCatList;
