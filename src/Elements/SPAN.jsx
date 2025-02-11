import React from "react";

const SPAN = ({children,className}) => {
  return (
    <span className={`text-[18px] font-normal leading-[22px] text-left ${className}`}>
      {children}
    </span>
  );
};

export default SPAN;
