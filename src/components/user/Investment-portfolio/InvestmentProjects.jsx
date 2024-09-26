import { usersPortfolio } from "../../../assets/data"; // Importing user portfolio data
import InvestmentProject from "./InvestmentProject"; // Importing the InvestmentProject component

// InvestmentProjects component to display a grid of individual investment projects
const InvestmentProjects = () => {
  return (
    // Main container for the investment projects with grid layout
    <div className="shadow-custom rounded-lg p-10 grid grid-cols-2 gap-5 my-5">
      {/* Mapping through usersPortfolio to render each InvestmentProject */}
      {usersPortfolio.map((portfolioProject, index) => (
        // Providing a unique key for each item to help React identify changes
        <InvestmentProject key={index} item={portfolioProject} />
      ))}
    </div>
  );
};

export default InvestmentProjects; // Exporting the component for use in other parts of the application
