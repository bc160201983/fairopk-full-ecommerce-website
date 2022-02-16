import Image from "next/image";
import React from "react";

const AppdownloadBanner = () => {
  return (
    <>
      <div className="">
        <Image
          alt="banner image"
          layout="responsive"
          width={1280}
          height={235}
          src={
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=220/layout-engine/2022-01/Group-25220.png?61f4df6447c3e"
          }
        />
      </div>
    </>
  );
};

export default AppdownloadBanner;
