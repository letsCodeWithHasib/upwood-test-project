import { tokenPortfolioList } from "../../../assets/data"; // Importing token portfolio data

/**
 * TokenPortfolio Component
 * Displays a list of tokens with relevant details such as asset name, contract address, share amount, and earnings.
 */
const TokenPortfolio = () => {
  return (
    <div className="p-5  sm:p-7 shadow-custom mt-7 space-y-5 rounded-2xl">
      {/* Header section with title and export buttons */}
      <div className="flex  flex-col md:flex-row md:justify-between md:items-center items-start">
        <h3 className="font-lexend font-bold text-[20px] text-[#333333] mb-2 sm:mb-0">
          Token Portfolio List
        </h3>
        <div className="flex md:flex-row flex-col gap-3">
          {/* Button to export transaction history */}
          <button className="text-[#0FB404] uppercase text-sm font-bold font-[Roboto]">
            Export Transaction History
          </button>
          {/* Button to export token portfolio list */}
          <button className="text-[#0FB404] uppercase text-sm font-bold font-[Roboto]">
            Export Token Portfolio List
          </button>
        </div>
      </div>

      {/* Table for horizontal scrreen to display the token portfolio data */}
      <div className="hidden md:block">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-t-[1px] text-[14px] border-[#808080] my-5">
              {/* Table headers */}
              <th className="py-2 text-[#6B6B6B]">Token Symbol</th>
              <th className="py-2 text-[#6B6B6B]">Asset Name</th>
              <th className="py-2 text-[#6B6B6B]">Smart Contract Address</th>
              <th className="py-2 text-[#6B6B6B]">Share Amount</th>
              <th className="py-2 text-[#6B6B6B]">Share Value</th>
              <th className="py-2 text-[#6B6B6B]">Carbon Credits</th>
              <th className="py-2 text-[#6B6B6B]">Dividends Earned</th>
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
                <tr
                  key={index}
                  className="border-t-[1px] text-sm text-[#333333] border-[#333333]"
                >
                  {/* Render token details in table cells */}
                  <td className="">{symbol}</td>
                  <td className="py-2">{assetName}</td>
                  <td className="py-2">{smartContractAddress}</td>
                  <td className="py-3 px-4 text-center text-sm">
                    {shareAmount}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {shareValue}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {carbonCredits}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {dividentEarned}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* table for mobile view */}
      <div className="md:hidden ">
        {tokenPortfolioList.map((tokens, index) => {
          const {
            assetName,
            carbonCredits,
            dividentEarned,
            shareAmount,
            shareValue,
            symbol,
            smartContractAddress,
          } = tokens;

          return (
            <div
              key={index}
              className="flex gap-5 flex-col py-5 px-2 border-t-2 border-[#808080]"
            >
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Token Symbol
                  </p>
                  <p>{symbol}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">Asset name</p>
                  <p>{assetName}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Smart contract address
                  </p>
                  <p>{smartContractAddress}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Share amount
                  </p>
                  <p>{shareAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Share value
                  </p>
                  <p>{shareValue}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Carbon credits
                  </p>
                  <p>{carbonCredits}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] font-bold">
                    Dividends earned
                  </p>
                  <p>{dividentEarned} €</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button to view all tokens, positioned to the right */}
      <div className="flex justify-end">
        <button className="text-[rgb(15,180,4)] uppercase font-[Roboto] font-bold">
          See All Tokens
        </button>
      </div>
    </div>
  );
};

export default TokenPortfolio; // Exporting the component for use in other parts of the application
