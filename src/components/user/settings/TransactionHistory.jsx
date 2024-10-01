const TransactionHistory = () => {
  return (
    <div className="p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <h3 className="font-lexend font-bold text-[20px] text-[#333333]">
        Your Transaction History
      </h3>
      <p className="text-[#333333] font-[Roboto] text-[16px]">
        Earn up to 5% by sharing Upwood with your network! In this section, you
        will find your unique referral link and see your affiliate earnings.
      </p>

      <div className="overflow-x-auto">
        {" "}
        {/* Added wrapper for horizontal scrolling */}
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-t-[1px] border-[#333333] my-5 text-center">
              <th className="py-2">Transaction Hash</th>
              <th>Type</th>
              <th>Sender</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((_, index) => (
              <tr
                key={index}
                className="border-t-[1px] text-center border-[#333333]"
              >
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

      <div className="flex justify-end">
        <button className="text-[rgb(15,180,4)] text-sm font-bold font-[Roboto]">
          See Full Transactions
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
