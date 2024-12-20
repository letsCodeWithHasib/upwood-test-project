import { activeProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";
import Popup from "./ActivePopup";
import { useState } from "react";

/**
 * ViewProjectDetail Component
 * Displays detailed information about a specific project related to forest plantations.
 *
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewProjectDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { id } = useParams();

  const openPopup = (item) => {
    setIsOpen(true);
    setSelectedProject(item);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

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
    <div>
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        Active Projects {/* Section heading */}
      </h2>

      <div className="shadow-custom rounded-xl mx-5 sm:mx-10 mt-5 mb-7">
        {isOpen && (
          <Popup closePopup={closePopup} selectedProject={selectedProject} />
        )}
        {/* Container for the project item */}
        <div className="w-full bg-gray-50 p-0 m-0">
          {/* Image container with full width and no padding or margins */}
          <img
            className="rounded-t-lg w-full h-[300px] object-cover block"
            src={image}
            alt="Project Illustration"
          />
        </div>
        <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
          {heading} {/* Label for the project type */}
        </p>
        <div className="p-5 sm:p-10">
          {/* Main content area */}
          <h3 className="text-[#333333] font-bold text-2xl sm:text-3xl font-lexend">
            {title} {/* Project title */}
          </h3>
          <p className="text-[#333333] text-[16px] sm:text-[18px] font-[Roboto] pt-2">
            {description}
            {/* Project description */}
          </p>

          {/* Responsive stats container */}
          <div className="flex  flex-col text-lg font-semibold sm:flex-row gap-5 mt-5 items-start sm:items-center">
            <p className="text-[#6B6B6B] font-[Roboto]">
              Area:
              <span className="text-[#333333] text-xl font-bold ml-1">
                {area}
                {area === "TBA" ? "" : " ha"}
              </span>
            </p>
            <p className="text-[#6B6B6B] font-[Roboto]">
              ROI:
              <span className="text-[#333333] text-xl font-bold ml-1">
                {roi}
                {roi === "TBA" ? "" : "%"}
              </span>
            </p>
            <p className="text-[#6B6B6B] font-[Roboto]">
              Carbon Credits:
              <span className="text-[#333333] text-xl font-bold ml-1">
                {carbonCredits}
              </span>
            </p>
            <p className="text-[#6B6B6B] font-[Roboto]">
              Shares available:
              <span className="text-[#333333] text-xl font-bold ml-1">
                {900}
              </span>
            </p>
            <p className="text-[#6B6B6B] font-[Roboto]">
              Shares Reserved:
              <span className="text-[#333333] text-xl font-bold ml-1">
                {reserved}
              </span>
            </p>
          </div>

          <div className="mt-10 flex items-center gap-5 sm:flex-row justify-end">
            <Link
              to="/user"
              className="uppercase text-[#6B6B6B] text-sm font-bold font-[Roboto]"
            >
              Back to projects
            </Link>
            <button
              onClick={() => {
                openPopup(activeProjects[id]);
              }}
              className="uppercase p-2 rounded-lg text-sm text-[white] bg-[#0FB404] font-bold font-[Roboto]"
            >
              Invest
            </button>
          </div>

          {/* Responsive button container */}
          <div className="flex flex-col sm:flex-row gap-3  mt-10 justify-start">
            <button className="py-2 sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1 text-left">
              Offering documentation
            </button>
            <button className="py-2 text-left sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
              Financial projections
            </button>
            <button className="py-2 text-left sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
              Property media
            </button>
            <button className="py-2 text-left sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
              Geospatial data
            </button>
          </div>

          <div className="mt-5">
            <h3 className="font-lexend font-bold text-[20px]">
              Property media
            </h3>
            <p className="text-[#333333] font-[Roboto] text-[16px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-7 mt-5">
            <div className="h-[300px] bg-gray-200 rounded-sm"></div>
            <div className="h-[300px] bg-gray-200 rounded-sm"></div>
            <div className="h-[300px] bg-gray-200 rounded-sm"></div>
            <div className="h-[300px] bg-gray-200 rounded-sm"></div>
          </div>

          <p className="text-[#333333] font-[Roboto mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-8 space-y-5">
            <h2 className="font-lexend text-[#333333] text-xl font-bold">
              Title 2
            </h2>
            <p className="text-[#333333] font-[Roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="h-[433px] w-full bg-[#EBEBEB]"></div>
            <p className="text-[#333333] font-[Roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail; // Exporting the component for use in other parts of the application
