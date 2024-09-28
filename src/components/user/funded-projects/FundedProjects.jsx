import FundedProject from "./FundedProject"; // Importing the ProjectItem component to display individual projects
import { fundedProjects } from "../../../assets/data";
import { useState } from "react";
import NotifyPopup from "./NotifyPopup";

/**
 * FundedProjects Component
 * This component fetches and displays a list of active projects using the ProjectItem component.
 *
 * @returns {JSX.Element} - The rendered active projects list.
 */
const FundedProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const openPopup = (item) => {
    setIsOpen(true);
    setSelectedProject(item);
  };

  const closePopup = (item) => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mx-5 mt-[-20px]">
      {isOpen && (
        <NotifyPopup
          closePopup={closePopup}
          selectedProject={selectedProject}
        />
      )}
      {/* Container for the active projects section */}
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        Funded Projects {/* Section heading */}
      </h2>
      <div className="">
        {/* Grid layout for project items */}
        {fundedProjects.map((fundedProject, index) => (
          <FundedProject
            openPopup={openPopup}
            key={index}
            item={fundedProject}
          />
        ))}
      </div>
    </div>
  );
};

export default FundedProjects; // Exporting the component for use in other parts of the application
