import Image from "next/image";
import React from "react";

const DeliveryIcon = ({ image, title, dis }) => {
  return (
    <>
      <div className="fatDelivery flex lg:justify-center lg:items-center p-2">
        <div className="icon w-14 h-14 text-[14px] flex flex-shrink-0 mr-4">
          <Image width={56} height={56} src={image} alt="" />
        </div>
        <div className="table-cell">
          <div className="tite mb-2">{title}</div>
          <div className="discription font-extralight text-[#666666] text-[12px] mr-[15px]">
            {dis}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryIcon;
