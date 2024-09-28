import { wallet } from "../../../assets/data"; // Importing wallet data

// Wallet component to display wallet information
const Wallet = () => {
  // Destructure wallet properties from the imported data
  const { walletId, entity, carbonCredits, dividend, eTree } = wallet;

  return (
    <div className="shadow-custom rounded-lg p-5 sm:p-10 space-y-5 mt-5">
      {/* Container for wallet details, using flex for layout */}
      <div className="grid grid-cols-2 gap-5 sm:flex justify-center">
        {/* First two items without underline */}
        {[
          { label: "Wallet", value: walletId, action: "Change" },
          { label: "Entity", value: entity, action: "Change" },
        ].map(({ label, value, action }, index) => (
          <div key={index} className="space-y-2 text-center">
            <div>
              <p className="text-[#6B6B6B] text-[14px] font-bold">{label}</p>
              <h4 className="font-bold text-[#333333] mt-2">{value}</h4>
            </div>
            <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
              {action}
            </button>
          </div>
        ))}

        {/* Container for the last three items */}
        <div className="border-[#EBEBEB] w-full">
          <div className="flex">
            {[
              {
                label: "Carbon Credits",
                value: carbonCredits,
                action: "Claim",
              },
              { label: "Dividends", value: dividend, action: "Claim" },
              { label: "E-Trees", value: eTree, action: "Claim" },
            ].map(({ label, value, action }, index) => (
              <div key={index} className="space-y-2 text-center">
                <div>
                  <p className="text-[#6B6B6B] text-[14px] font-bold">
                    {label}
                  </p>
                  <h4 className="font-bold text-[#333333] mt-2">{value}</h4>
                </div>
              </div>
            ))}
            <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet; // Exporting the component for use in other parts of the application
