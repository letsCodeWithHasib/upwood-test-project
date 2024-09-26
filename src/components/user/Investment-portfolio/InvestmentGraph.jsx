import graph from "../../../assets/graph.png"; // Importing the investment graph image

// InvestmentGraph component to display the investment performance graph and summary
const InvestmentGraph = () => {
  return (
    // Main container for the investment graph with shadow and padding
    <div className="shadow-custom rounded-lg p-10 py-5 space-y-5 mt-5">
      {/* Section heading for the graph */}
      <h3 className="text-[20px] font-bold font-lexend">
        Platform How-To Guides
      </h3>

      {/* Container for the investment graph image */}
      <div className="w-full">
        <img className="w-full" src={graph} alt="Investment Graph" />
      </div>

      {/* Summary of investment performance for the month */}
      <div className="flex gap-2 items-center">
        <p className="text-[#333333] text-[14px] font-[Roboto] font-bold">
          {/* Indicator for the monthly performance */}
          <span className="text-[100px] text-[#0FB404] font-normal">.</span>
          This month
          <span className="text-[#0FB404] text-[20px] ml-2 mt-2">+104€</span>
        </p>
      </div>
    </div>
  );
};

export default InvestmentGraph;
