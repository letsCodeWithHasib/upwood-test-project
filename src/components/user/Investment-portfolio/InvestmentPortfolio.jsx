import PortfolioDetails from "./PortfolioDetails"; // Importing the PortfolioDetails component
import { investmentPortfolio } from "../../../assets/data"; // Importing investment portfolio data
import InvestmentProjects from "./InvestmentProjects"; // Importing InvestmentProjects component
import InvestmentGraph from "./InvestmentGraph"; // Importing InvestmentGraph component

// InvestmentPortfolio component to display the user's investment portfolio overview
const InvestmentPortfolio = () => {
  return (
    // Main container for the investment portfolio with margin for spacing
    <div className="mx-10 mb-10">
      {/* Section heading for the investment portfolio */}
      <h2 className="text-center font-lexend text-[32px] text-[#333333] font-bold">
        Investment Portfolio
      </h2>

      {/* Displaying portfolio details using the imported component */}
      <PortfolioDetails investmentPortfolio={investmentPortfolio} />

      {/* Displaying the investment performance graph */}
      <InvestmentGraph />

      {/* Displaying the investment projects */}
      <InvestmentProjects />
    </div>
  );
};

export default InvestmentPortfolio;
