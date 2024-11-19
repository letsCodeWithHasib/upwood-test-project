const TransactionHistory = () => {
  const transactionHistory = [
    {
      transactionHash: "765192",
      type: "Share purchase",
      sender: "35CJPZ..",
      amount: 500,
      status: "Successful",
    },
    {
      transactionHash: "765192",
      type: "Share purchase",
      sender: "35CJPZ..",
      amount: 500,
      status: "Pending",
    },
    {
      transactionHash: "765192",
      type: "Share purchase",
      sender: "35CJPZ..",
      amount: 500,
      status: "Failed",
    },
  ];
  return (
    <div className="p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <h3 className="font-lexend font-bold text-[20px] text-[#333333]">
        Your Transaction History
      </h3>
      <p className="text-[#333333] font-[Roboto] text-[16px]">
        Earn up to 5% by sharing Upwood with your network! In this section, you
        will find your unique referral link and see your affiliate earnings.
      </p>

      {/* for large screen size */}
      <div className="hidden md:block">
        {/* Add this div for horizontal scrolling */}
        <table className="min-w-full border-collapse">
          <thead className="">
            <tr className="border-t-[1px] text-sm border-[#333333] text-[#6B6B6B] text-left font-bold font-[Roboto]">
              <th className="py-2 ">Transaction hash</th>
              <th className="">Type</th>
              <th className="">Sender</th>
              <th className="">Amount</th>
              <th className="">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((history, index) => {
              const { transactionHash, type, sender, amount, status } = history;
              return (
                <tr
                  key={index}
                  className="border-y-[1px] border-[#333333] font-[Roboto] text-left text-sm"
                >
                  <td className="py-2">{transactionHash}</td>
                  <td className="">{type}</td>
                  <td className="">{sender}</td>

                  <td className="">{amount} EuroE</td>
                  <td
                    className={`${
                      status === "Successful"
                        ? "text-[#0FB404]"
                        : status === "Pending"
                        ? "text-[#FF8A00]"
                        : "text-[#FF0000]"
                    } font-bold`}
                  >
                    {status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* for mobile view */}
      <div className="md:hidden block">
        {transactionHistory.map((history, index) => {
          const { transactionHash, type, status, amount, sender } = history;
          return (
            <div
              key={index}
              className="flex gap-5 flex-col py-5 px-2 border-t-2 border-[#808080]"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Transaction hash
                  </p>
                  <p className="text-[12px] md:text-sm">{transactionHash}</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Type
                  </p>
                  <p className="text-[12px] md:text-sm">{type}</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Sender
                  </p>
                  <p className="text-[12px] md:text-sm">{sender}</p>
                </div>
                <div>
                  <p className="text-[12px] md:text-sm text-[#6B6B6B] font-bold">
                    Amount
                  </p>
                  <p className="text-[12px] md:text-sm">{amount} EuroE</p>
                </div>

                <div className="">
                  <p
                    className={`text-[12px] md:text-sm text-[#6B6B6B] font-bold`}
                  >
                    Status
                  </p>
                  <p
                    className={`${
                      status === "Successful"
                        ? "text-[#0FB404]"
                        : status === "Pending"
                        ? "text-[#FF8A00]"
                        : "text-[#FF0000]"
                    } text-[12px] md:text-sm font-bold`}
                  >
                    {status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button className="text-[rgb(15,180,4)] uppercase text-[12px] md:text-sm font-bold font-[Roboto]">
          See Full Transaction History
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
