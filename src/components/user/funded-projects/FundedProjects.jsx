import ProjectItem from "../common/ProjectItem"; // Importing the ProjectItem component to display individual projects
import { fundedProjects } from "../../../assets/data";

/**
 * FundedProjects Component
 * This component fetches and displays a list of active projects using the ProjectItem component.
 *
 * @returns {JSX.Element} - The rendered active projects list.
 */
const FundedProjects = () => {
  return (
    <div className="mx-10">
      {/* Container for the active projects section */}
      <h2 className="text-center font-lexend text-[32px] text-[#333333] font-bold">
        Funded Projects {/* Section heading */}
      </h2>
      <div className="grid grid-cols-2 gap-5 my-5">
        {" "}
        {/* Grid layout for project items */}
        {fundedProjects.map((fundedProject, index) => (
          <ProjectItem key={index} item={fundedProject} />
        ))}
      </div>
    </div>
  );
};

export default FundedProjects; // Exporting the component for use in other parts of the application
