import React, { useEffect } from "react";

const Alert = ({ removeAlert, msg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="">
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
