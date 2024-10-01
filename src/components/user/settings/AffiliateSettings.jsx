const AffiliateSettings = () => {
  return (
    <div className="p-5 sm:p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="font-lexend font-bold text-[20px] text-[#333333]">
          Affiliate Settings
        </h3>
        <button className="text-[#0FB404] text-sm font-bold">
          Affiliate Terms and Conditions
        </button>
      </div>

      <p className="text-[#333333] text-sm text-[Roboto] text-[16px]">
        Your unique link:{" "}
        <span className="text-[#0FB404] text-lg font-bold">
          upwood.io/jsdhdsjsdhc1234
        </span>
      </p>

      <div className="overflow-x-auto">
        {/* Add this div for horizontal scrolling */}
        <table className="min-w-full text-center border-collapse">
          <thead>
            <tr className="border-t-[1px] border-[#fd6161] my-5">
              <th className="py-2">Transaction Hash</th>
              <th>Type</th>
              <th>Sender</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array(3)
              .fill()
              .map((_, index) => (
                <tr key={index} className="border-t-[1px] border-[#333333]">
                  <td className="py-2">765192</td>
                  <td>Share Purchase</td>
                  <td>350JPZ</td>
                  <td>500 Euro</td>
                  <td>Successful</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
        <button className="text-[rgb(15,180,4)] font-bold text-sm font-[Roboto]">
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
