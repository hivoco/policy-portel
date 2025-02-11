import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2
      className={`text-[27px] font-bold leading-[33px] text-left ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
