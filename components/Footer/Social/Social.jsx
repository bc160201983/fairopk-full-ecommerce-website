import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";

const Social = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 items-center">
      <div className="follow-ud flex justify-start items-center space-x-5">
        <div className="font-bold">Follow us</div>
        <div>
          <FaFacebook className="h-[48px] w-[40px]" />
        </div>
        <div>
          <AiFillTwitterCircle className="h-[48px] w-[40px]" />
        </div>
        <div>
          <AiFillInstagram className="h-[48px] w-[40px]" />
        </div>
      </div>
      <div className="download-app lg:p-0 sm:py-7 py-7 lg:border-none border-t-2 border-[#EEEEEE]">
        <div className="follow-ud flex justify-start items-center space-x-5 lg:border-0">
          <div className="font-bold">Download app</div>
          <div className="flex-shrink-0 w-[104px] h-[35px]">
            <Image
              width={104}
              height={35}
              src={"https://blinkit.com/images/home/google-play_1x-0c7086a.png"}
              alt="google play"
            />
          </div>
          <div className="flex-shrink-0 w-[104px] h-[35px]">
            <Image
              alt="app store"
              width={104}
              height={35}
              src={"https://blinkit.com/images/home/app-store_1x-cbeb7ea.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
