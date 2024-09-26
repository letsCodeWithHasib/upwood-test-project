import { tokenPortfolioList } from "../../../assets/data"; // Importing token portfolio data

/**
 * TokenPortfolio Component
 * Displays a list of tokens with relevant details such as asset name, contract address, share amount, and earnings.
 */
const TokenPortfolio = () => {
  return (
    <div className="p-7 shadow-custom mt-7 space-y-5 rounded-2xl">
      {/* Header section with title and export buttons */}
      <div className="flex justify-between">
        <h3 className="font-lexend font-bold text-2xl text-[#333333]">
          Token portfolio list
        </h3>
        <div className="flex gap-5">
          {/* Button to export transaction history */}
          <button className="text-[#0FB404] font-bold font-[Roboto]">
            Export transaction history
          </button>
          {/* Button to export token portfolio list */}
          <button className="text-[#0FB404] font-bold font-[Roboto]">
            Export token portfolio list
          </button>
        </div>
      </div>

      {/* Table to display the token portfolio data */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-t-[1px] border-[#808080] my-5">
            {/* Table headers */}
            <th className="py-2">Token Symbol</th>
            <th>Asset name</th>
            <th>Smart contract address</th>
            <th>Share amount</th>
            <th>Share value</th>
            <th>Carbon credits</th>
            <th>Dividends earned</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through tokenPortfolioList to create a row for each token */}
          {tokenPortfolioList.map((token, index) => {
            const {
              symbol,
              assetName,
              smartContractAddress,
              shareAmount,
              shareValue,
              carbonCredits,
              dividentEarned,
            } = token; // Destructure token properties

            return (
              <tr key={index} className="border-t-[1px] border-[#333333]">
                {/* Render token details in table cells */}
                <td className="py-2">{symbol}</td>
                <td>{assetName}</td>
                <td>{smartContractAddress}</td>
                <td className="text-center">{shareAmount}</td>
                <td className="text-center">{shareValue}</td>
                <td className="text-center">{carbonCredits}</td>
                <td className="text-center">{dividentEarned}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Button to view all tokens, positioned to the right */}
      <div className="flex justify-end ">
        <button className="text-[rgb(15,180,4)] font-[Roboto] font-bold">
          See all tokens
        </button>
      </div>
    </div>
  );
};

export default TokenPortfolio; // Exporting the component for use in other parts of the application
