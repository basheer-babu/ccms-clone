import React from "react";
/**
 * red Underline 
 * @param {*} param0 
 * @returns 
 */
const Underline = ({ width = "30px", className = "mx-3 mt-1 mb-2" }) => {
  return (
    <div
      className={className}
      style={{ height: "4px", width, backgroundColor: "#FF5E00" }}
    ></div>
  );
};

export default Underline;
