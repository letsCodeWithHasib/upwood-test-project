// PortfolioDetails component to display key metrics of the investment portfolio
const PortfolioDetails = ({ investmentPortfolio }) => {
  // Destructure the necessary properties from the investment portfolio object
  const { portfolioValue, yearlyProfit, roi, carbonTonsoffset } =
    investmentPortfolio;

  return (
    // Main container with shadow and padding for styling
    <div className="shadow-custom  rounded-lg p-5 justify-between flex mt-5">
      {/* Flex container to arrange the metrics evenly and wrap on smaller screens */}
      <div className="flex md:flex-row flex-col items-center  md:justify-between  w-full">
        {/* Locked Value */}
        <div className="text-center flex md:flex-col items-center gap-3 justify-center w-full p-2">
          <h4 className="text-[#6B6B6B] font-bold text-sm sm:text-[15px]">
            Locked token value
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">99 000 €</p>
        </div>

        {/* Portfolio Value */}
        <div className="text-center flex md:flex-col items-center gap-3 justify-center w-full  p-2">
          <h4 className="text-[#6B6B6B] font-bold text-sm sm:text-[15px]">
            Portfolio Value
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">
            {portfolioValue}
          </p>
        </div>

        {/* Yearly Portfolio Growth */}
        <div className="text-center flex md:flex-col items-center gap-3 justify-center w-full  p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Yearly Portfolio Growth
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">
            {yearlyProfit}
          </p>
        </div>

        {/* Return on Investment */}
        <div className="text-center flex md:flex-col items-center gap-3 justify-center w-full  p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Return on Investment
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">{roi}</p>
        </div>

        {/* Carbon Tons Offset */}
        <div className="text-center flex md:flex-col  items-center gap-3 justify-center w-full p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Carbon Tons Offset
          </h4>
          <p className=" font-bold text-[20px] sm:text-[22px]">
            {carbonTonsoffset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
