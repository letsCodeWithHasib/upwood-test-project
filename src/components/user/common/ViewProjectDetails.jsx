import { activeProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";

/**
 * ProjectItem Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewProjectDetail = ({ item }) => {
  const { id } = useParams();
  const {
    heading,
    title,
    description,
    roi,
    carbonCredits,
    image,
    area,
    reserved,
  } = activeProjects[id];
  return (
    <div className="shadow-custom rounded-xl m-10 mt-[120px]">
      {/* Container for the project item */}
      <div className="bg-gray-50 flex justify-center">
        {/* Image container */}
        <img
          className="rounded-t-lg w-full"
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
        <div className="flex gap-3 items-center">
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
          <p className="text-[#6B6B6B]">
            Shares Reserved :
            <span className="text-[#333333] text-2xl font-semibold">
              {reserved}
            </span>
            {/* Carbon credits statistic */}
          </p>
        </div>
        <div className="flex  gap-5 mt-5">
          {" "}
          {/* Action buttons container */}
          <button className="py-3  text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Offering documentation
          </button>
          <button className="py-3 px-5 text-[15px] font-bold rounded-lg  text-[#0FB404] uppercase">
            Financial projections
          </button>
          <button className="py-3 px-5 text-[15px] font-bold rounded-lg  text-[#0FB404] uppercase">
            ProperTy media
          </button>
          <button className="py-3 px-5 text-[15px] font-bold rounded-lg  text-[#0FB404] uppercase">
            Geospatial data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail; // Exporting the component for use in other parts of the application
