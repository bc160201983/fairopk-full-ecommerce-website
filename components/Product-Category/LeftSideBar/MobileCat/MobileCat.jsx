import React from "react";
import MobileCatList from "./MobileCatList";

const MobileCat = ({ sub }) => {
  return (
    <div>
      <div className="mobile-sub-cat flex">
        {sub.map((cat) => {
          return <MobileCatList key={cat.id} {...cat} />;
        })}
      </div>
    </div>
  );
};

export default MobileCat;
