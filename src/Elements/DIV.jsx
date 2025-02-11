import React from 'react'

const DIV = ({className,children}) => {
  return (
    <div
      className={`py-8 flex flex-col gap-8  border-b border-black ${className}`}
    >
      {children}
    </div>
  );
}

export default DIV
