/**
 * InvestmentProject Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details.
 * @returns {JSX.Element} - The rendered project item.
 */
const InvestmentProject = ({ item }) => {
  // Destructure project details from the item object
  const { heading, title, description, roi, carbonCredits, image, area } = item;

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* Container for the project item image */}
      <div className="h-[200px] bg-gray-50 flex justify-center">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Project Illustration" // Descriptive alt text for accessibility
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-4 md:p-5">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-lg md:text-[20px] font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-sm md:text-[16px] text-[Roboto] pt-2">
          {description} {/* Project description */}
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-start md:items-center">
          {/* Stats container for project metrics */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area:
            <span className="text-[#333333] text-lg font-semibold">
              {area} {area === "TBA" ? "" : "ha"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            ROI:
            <span className="text-[#333333] text-lg font-semibold">
              {roi} {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Carbon Credit:
            <span className="text-[#333333] text-lg font-semibold">
              {carbonCredits}
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-end gap-4 mt-4">
          {/* Action buttons container */}
          <button className="py-2 px-4 text-sm font-bold rounded-lg text-[#0FB404] bg-white border-[#0FB404] border-[1px]">
            Sell Shares {/* Button to sell project shares */}
          </button>
          <button className="py-2 px-4 text-sm font-bold rounded-lg bg-[#0FB404] text-white">
            Invest More {/* Button to initiate additional investment */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentProject; // Exporting the component for use in other parts of the application
