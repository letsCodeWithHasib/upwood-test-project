import React from "react";

const QueryBox = ({ boxData }) => {
  return (
    // Main container with rounded corners and a green border
    <div className="rounded-xl border-[1px] border-[#0FB404] flex-1">
      {/* Heading section with green background, white text, and top-rounded corners */}
      <p className="bg-[#0FB404] p-2 rounded-t-xl text-[#FFFFFF] font-bold text-center">
        {boxData.heading} {/* Displaying the heading */}
      </p>

      {/* Content section with padding and centered text */}
      <div>
        <p className="p-8 text-[#333333] text-lg text-center font-bold">
          {boxData.query} {/* Displaying the query text */}
        </p>
      </div>
    </div>
  );
};

export default QueryBox;
