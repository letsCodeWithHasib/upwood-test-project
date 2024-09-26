// PortfolioDetails component to display key metrics of the investment portfolio
const PortfolioDetails = ({ investmentPortfolio }) => {
  // Destructure the necessary properties from the investment portfolio object
  const { portfolioValue, yearlyProfit, roi, carbonTonsoffset } =
    investmentPortfolio;

  return (
    // Main container with shadow and padding for styling
    <div className="shadow-custom rounded-lg p-10 space-y-5 mt-5">
      {/* Flex container to arrange the metrics evenly */}
      <div className="flex justify-around">
        {/* Portfolio Value */}
        <div className="text-center">
          <h4 className="text-[#333333] font-[Roboto] font-bold">
            Portfolio Value
          </h4>
          <p className="text-[#0FB404] font-bold text-[20px]">
            {portfolioValue}
          </p>
        </div>

        {/* Yearly Portfolio Growth */}
        <div className="text-center">
          <h4 className="text-[#333333] font-[Roboto] font-bold">
            Yearly Portfolio Growth
          </h4>
          <p className="text-[#0FB404] font-bold text-[20px]">{yearlyProfit}</p>
        </div>

        {/* Return on Investment */}
        <div className="text-center">
          <h4 className="text-[#333333] font-[Roboto] font-bold">
            Return on Investment
          </h4>
          <p className="text-[#0FB404] font-bold text-[20px]">{roi}</p>
        </div>

        {/* Carbon Tons Offset */}
        <div className="text-center">
          <h4 className="text-[#333333] font-[Roboto] font-bold">
            Carbon Tons Offset
          </h4>
          <p className="text-[#0FB404] font-bold text-[20px]">
            {carbonTonsoffset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
