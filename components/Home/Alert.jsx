import React, { useEffect } from "react";

const Alert = ({ removeAlert, msg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="">
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
