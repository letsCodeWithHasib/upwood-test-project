import { Link } from "react-router-dom";

/**
 * ProjectItem Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const ProjectItem = ({ item, openPopup }) => {
  const { heading, title, description, roi, carbonCredits, image, area, id } =
    item;
  return (
    <div className="shadow-lg rounded-xl">
      {/* Container for the project item */}
      <div className="h-[200px] bg-gray-50 flex justify-center">
        {/* Image container */}
        <img
          className="w-full rounded-t-lg"
          src={image}
          alt="Project Illustration"
        />
        {/* Project image */}
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-5">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-2xl font-lexend ">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[16px] text-[Roboto] pt-2">
          {description}
          {/* Project description */}
        </p>
        <div className="flex gap-3">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area :
            <span className="text-[#333333] text-2xl font-semibold">
              {area}
              {area === "TBA" ? "" : "ha"}
            </span>{" "}
            {/* Area statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            ROI :
            <span className="text-[#333333] text-2xl font-semibold">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Carbon Credit :
            <span className="text-[#333333] text-2xl font-semibold">
              {carbonCredits}
            </span>
            {/* Carbon credits statistic */}
          </p>
        </div>
        <div className="flex justify-end gap-5 mt-5">
          {" "}
          {/* Action buttons container */}
          <Link to={`active-project/${id}`}>
            <button className="py-3 px-5 text-[15px] font-bold rounded-lg text-[#0FB404] bg-white border-[#0FB404] border-[1px] ">
              View details {/* Button to view project details */}
            </button>
          </Link>
          <button
            onClick={() => openPopup(item)}
            className="py-3 px-5 text-[15px] font-bold rounded-lg bg-[#0FB404] text-white"
          >
            Invest {/* Button to initiate investment */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem; // Exporting the component for use in other parts of the application
