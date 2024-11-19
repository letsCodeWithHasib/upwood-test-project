import exportIcon from "../../../assets/export-icon.png";
const AffiliateSettings = () => {
  const affiliateSettings = [
    {
      number: 1,
      walletAddress: "sfbdsfdsye3267rgdfehsh",
      amountInvested: 5000,
      yourCommission: 3,
      yourEarnings: 150,
      claimableEarnings: 150,
    },
    {
      number: 1,
      walletAddress: "sfbdsfdsye3267rgdfehsh",
      amountInvested: 5000,
      yourCommission: 3,
      yourEarnings: 150,
      claimableEarnings: 150,
    },
  ];
  return (
    <div className="p-5 sm:p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
        <h3 className="font-lexend font-bold text-[20px] text-[#333333]">
          Affiliate settings
        </h3>
        <button className="text-[#0FB404] text-left text-sm font-bold uppercase">
          Affiliate Terms and Conditions
        </button>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[#333333] text-sm font-[Roboto] text-[16px]">
          Your unique link:{" "}
          <span className="text-[#0FB404] text-lg">
            upwood.io/jsdhdsjsdhc1234
          </span>
        </p>
      </div>

      {/* for big screen */}
      <div className="overflow-x-auto hidden md:block">
        {/* Add this div for horizontal scrolling */}
        <table className="min-w-full border-collapse">
          <thead className="">
            <tr className="border-t-[1px] text-sm border-[#333333] text-[#6B6B6B] text-left font-bold font-[Roboto]">
              <th className="py-2 ">Number</th>
              <th className="">Wallet address</th>
              <th className="">Amount Invested</th>
              <th className="">Your commission</th>
              <th className="">Your earnings in EUR</th>
              <th className="">
                Claimable earnings{" "}
                <img className="w-4 h-4 inline-block" src={exportIcon} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {affiliateSettings.map((affiliates, index) => {
              const {
                number,
                yourEarnings,
                claimableEarnings,
                amountInvested,
                yourCommission,
                walletAddress,
              } = affiliates;
              return (
                <tr
                  key={index}
                  className="border-y-[1px] border-[#333333] font-[Roboto] text-left text-sm"
                >
                  <td className="py-2">{number}</td>
                  <td className="">{walletAddress}</td>
                  <td className="">{amountInvested}€</td>
                  <td className="">{yourCommission}%</td>
                  <td className="">{yourEarnings}€</td>
                  <td className="">{claimableEarnings}€</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* for mobile view */}
      <div className="md:hidden block">
        {affiliateSettings.map((affiliates, index) => {
          const {
            number,
            yourEarnings,
            claimableEarnings,
            amountInvested,
            yourCommission,
            walletAddress,
          } = affiliates;
          return (
            <div
              key={index}
              className="flex gap-5 flex-col py-5 px-2 border-t-2 border-[#808080]"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Number
                  </p>
                  <p className="text-[12px] md:text-sm">{number}</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Wallet address
                  </p>
                  <p className="text-[12px] md:text-sm">{walletAddress}</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Amount invested
                  </p>
                  <p className="text-[12px] md:text-sm">{amountInvested}€</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Your commission
                  </p>
                  <p className="text-[12px] md:text-sm">{yourCommission}%</p>
                </div>

                <div className="">
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Your earnings in EUR
                  </p>
                  <p className="text-[12px] md:text-sm"> {yourEarnings}€</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Claimalble Earnings
                  </p>
                  <p className="text-[12px] md:text-sm">
                    {" "}
                    {claimableEarnings}€
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row items-end md:items-center md:justify-end  gap-5">
        <button className="text-[rgb(15,180,4)] w-full md:w-auto  text-right md:text-center font-bold text-sm font-[Roboto] uppercase">
          Export Affiliate Earning Table
        </button>
        <button className="bg-[#0FB404] uppercase text-sm font-bold rounded-2xl font-[Roboto] text-white py-[14px] px-[24px]">
          Claim Earnings
        </button>
      </div>
    </div>
  );
};

export default AffiliateSettings;
