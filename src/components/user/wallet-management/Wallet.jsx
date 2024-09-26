import { wallet } from "../../../assets/data";

// Wallet component to display wallet information
const Wallet = () => {
  // Destructure wallet properties from the imported data
  const { walletId, entity, carbonCredits, dividend, eTree } = wallet;

  return (
    <div className="shadow-custom rounded-lg p-10 space-y-5 mt-5">
      {/* Container for wallet details, using flex for layout */}
      <div className="flex justify-around">
        {/* Mapping over wallet details to generate each section dynamically */}
        {[
          { label: "Wallet", value: walletId, action: "Change" },
          { label: "Entity", value: entity, action: "Change" },
          { label: "Carbon credits", value: carbonCredits, action: "Claim" },
          { label: "Dividends", value: dividend, action: "Claim" },
          { label: "E-trees", value: eTree, action: "Claim" },
        ].map(({ label, value, action }, index) => (
          // Each section requires a unique key for optimal rendering
          <div key={index} className="space-y-5 text-center">
            <div>
              {/* Displaying the label and value for each wallet detail */}
              <p className="text-[#6B6B6B] text-[14px] font-bold">{label}</p>
              <h4 className="font-bold text-[#333333] mt-3">{value}</h4>
            </div>
            {/* Button for changing or claiming the respective details */}
            <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
              {action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
