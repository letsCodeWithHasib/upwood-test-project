const AffiliateSettings = () => {
  return (
    <div className="p-7 shadow-2xl mt-7 space-y-5 rounded-2xl">
      <div className="flex justify-between">
        <h3 className="font-lexend font-bold text-2xl text-[#333333]">
          Affiliate Settings
        </h3>
        <button className="text-[#0FB404] font-bold">
          Affiliate Terms and Condition
        </button>
      </div>
      <p className="text-[#333333] text-[Roboto] text-[16px]">
        Your unique link :{" "}
        <span className="text-[#0FB404] font-bold">
          upwood.io/jsdhdsjsdhc1234
        </span>
      </p>
      <table className="w-full text-center">
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
          Export affiliate earning table
        </button>
        <button className="bg-[#0FB404] rounded-2xl font-[Roboto] text-white py-[14px] px-[24px]">
          CLAIN EARNINGS
        </button>
      </div>
    </div>
  );
};

export default AffiliateSettings;
