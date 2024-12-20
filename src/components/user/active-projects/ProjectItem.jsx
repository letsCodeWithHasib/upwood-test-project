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
    <div className="shadow-custom rounded-xl overflow-hidden">
      {/* Container for the project item */}
      <div className="h-[200px] md:h-[250px] bg-[#CCCCCC] flex justify-center">
        {/* Project image */}
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p
        className={`${
          heading === "TBA" && "h-[15px]"
        } bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]`}
      >
        {heading === "TBA" ? "" : heading} {/* Label for the project type */}
      </p>
      <div className="p-4 md:p-5">
        {/* Main content area */}
        <h3
          className={`${
            title === "To be announced" ? "text-[#999999]" : "text-[#333333]"
          }  font-bold text-[18px] md:text-[20px] font-lexend`}
        >
          {title}
          {/* Project title */}
        </h3>
        <p
          className={` ${
            description === "TBA" ? "text-[#999999]" : "text-[#333333]"
          }  font-[Roboto] text-[14px] md:text-[16px] pt-2`}
        >
          {description}
          {/* Project description */}
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-start mt-2 font-[Roboto]">
          {/* Stats container */}
          <p
            className={`${
              area === "TBA" ? "text-[#999999]" : "text-[#6B6B6B]"
            } flex items-center gap-2 font-bold font-[Roboto]`}
          >
            Area:
            <span
              className={`${
                area === "TBA" ? "text-inherit" : "text-[#333333]"
              } text-xl font-bold font-[Roboto]`}
            >
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
          </p>
          <p
            className={`${
              roi === "TBA" ? "text-[#999999]" : "text-[#6B6B6B]"
            }  flex items-center gap-2 font-bold font-[Roboto]`}
          >
            ROI:
            <span
              className={`${
                roi === "TBA" ? "text-inherit" : "text-[#333333]"
              }  text-xl font-bold`}
            >
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p
            className={`${
              carbonCredits === "TBA" ? "text-[#999999]" : "text-[#6B6B6B]"
            } text-[#6B6B6B] flex items-center gap-2 font-bold`}
          >
            Carbon Credit:
            <span
              className={`${
                carbonCredits === "TBA" ? "text-inherit" : "text-[#333333]"
              } text-[#333333] text-xl font-bold`}
            >
              {carbonCredits}
            </span>
          </p>
        </div>
        <div className="text-right space-x-5 mt-5">
          {/* Action buttons container */}
          <Link to={`${id}`} className=" w-full md:w-auto">
            <button
              className={`${
                area === "TBA"
                  ? "bg-[#EBEBEB] text-[#999999] border-[#999999]"
                  : "bg-transparent"
              } py-[14px] px-[24px] uppercase text-sm font-bold rounded-lg text-[#0FB404] bg-white border-[#0FB404] border-[1px]`}
            >
              View details {/* Button to view project details */}
            </button>
          </Link>
          <button
            onClick={() => openPopup(item)}
            className={`${
              area === "TBA" ? "bg-[#999999]" : "bg-[#0FB404]"
            } py-[14px] px-[24px]  uppercase text-sm font-bold rounded-lg  text-white`}
          >
            Invest {/* Button to initiate investment */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem; // Exporting the component for use in other parts of the application
