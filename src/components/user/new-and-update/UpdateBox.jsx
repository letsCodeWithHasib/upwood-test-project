const UpdateBox = ({ boxData }) => {
  return (
    // Main container with rounded corners and a green border
    <div className="rounded-xl border-[1px] border-[#6B6B6B] flex-1">
      {/* Heading section with green background, white text, and top-rounded corners */}
      <p className="p-2 rounded-t-xl bg-[#EBEBEB] text-xs text-[#333333] font-bold text-center">
        Update {boxData.heading} {/* Displaying the heading */}
      </p>

      {/* Content section with padding and centered text */}
      <div>
        <p className="py-[16px] px-[32px] text-[#333333] font-[Roboto] text-[16px] text-center">
          {boxData.query} {/* Displaying the query text */}
        </p>
      </div>
    </div>
  );
};

export default UpdateBox;
