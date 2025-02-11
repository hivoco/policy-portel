import React from "react";

const LI = ({ children,className }) => {
  return (
    <li
      className={`text-[18px] font-normal leading-[22px] text-left list-disc ${className}`}
    >
      {children}
    </li>
  );
};

export default LI;
