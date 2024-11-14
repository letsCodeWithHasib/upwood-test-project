const UpdateBox = ({ boxData }) => {
  return (
    // Main container with rounded corners and a green border
    <div className="rounded-xl border-[1px] border-[#0FB404] flex-1">
      {/* Heading section with green background, white text, and top-rounded corners */}
      <p className="bg-[#EBEBEB] p-2 rounded-t-xl text-xs text-[#333333] font-bold text-center">
        Update {boxData.heading} {/* Displaying the heading */}
      </p>

      {/* Content section with padding and centered text */}
      <div>
        <p className="p-5 text-[#333333] text-[16px] text-center font-semibold">
          {boxData.query} {/* Displaying the query text */}
        </p>
      </div>
    </div>
  );
};

export default UpdateBox;
