import { Link } from "react-router-dom";
import notifyImage from "../../../assets/notify.png";

/**
 * ProjectItem Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const FundedProject = ({ item, openPopup }) => {
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
        <h3 className="text-[#333333] font-bold text-[20px] font-lexend ">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[16px] text-[Roboto] pt-2">
          {description}
          {/* Project description */}
        </p>
        <div className="flex gap-3 items-center">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area :
            <span className="text-[#333333] text-lg font-semibold">
              {area}
              {area === "TBA" ? "" : "ha"}
            </span>{" "}
            {/* Area statistic */}
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            ROI :
            <span className="text-[#333333] text-lg font-semibold">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Carbon Credit :
            <span className="text-[#333333] text-lg font-semibold">
              {carbonCredits}
            </span>
            {/* Carbon credits statistic */}
          </p>
        </div>
        <div className="flex justify-between gap-5 mt-5">
          {/* Action buttons container */}
          <button
            onClick={() => openPopup(item)}
            className="text-[15px] font-bold  text-[#0FB404] flex gap-2 items-center"
          >
            <img src={notifyImage} alt="" /> notify
          </button>
          <Link to={`${id}`}>
            <button className="text-[15px] font-bold  text-[#0FB404]">
              View details {/* Button to view project details */}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundedProject; // Exporting the component for use in other parts of the application
