import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[300px]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-primary mb-4"></div>
      <p className="text-gray-500 font-medium">{text}</p>
    </div>
  );
};

export default Loader;
