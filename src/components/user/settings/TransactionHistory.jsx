const TransactionHistory = () => {
  return (
    <div className="p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <h3 className="font-lexend font-bold text-2xl text-[#333333]">
        Your transaction history
      </h3>
      <p className="text-[#333333] text-[Roboto] text-[16px]">
        Earn up to 5% by sharing Upwood to your network! In this section you
        will find your unique referral link and see your affiliate earnings.{" "}
      </p>
      <table className="w-full text-left">
        <thead>
          <tr className="border-t-[1px] border-[#333333] my-5">
            <th className="py-2">Transaction hash</th>
            <th>Type</th>
            <th>Sender</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-[1px] border-[#333333]">
            <td className="py-2">765192</td>
            <td>Share purchase</td>
            <td>350JPZ</td>
            <td>500euroE</td>
            <td>Successful</td>
          </tr>
          <tr className="border-t-[1px] border-[#333333]">
            <td className="py-2">765192</td>
            <td>Share purchase</td>
            <td>350JPZ</td>
            <td>500euroE</td>
            <td>Successful</td>
          </tr>
          <tr className="border-t-[1px] border-[#333333]">
            <td className="py-2">765192</td>
            <td>Share purchase</td>
            <td>350JPZ</td>
            <td>500euroE</td>
            <td>Successful</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end gap-7">
        <button className=" text-[rgb(15,180,4)] font-[Roboto]">
          See full transactions
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
