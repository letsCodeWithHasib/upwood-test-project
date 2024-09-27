import { contractsList } from "../../../assets/data";
import Contract from "./Contract";

const ContractList = () => {
  return (
    // Main container with margin applied to the sides and bottom
    <div className="mx-5 mt-[-20px] mb-10">
      {/* Section heading */}
      <h2 className="text-center font-lexend text-2xl text-[#333333] font-bold">
        Contracts
      </h2>

      {/* Platform how-to guides section */}
      <div className="mt-5 grid grid-cols-2 gap-5 my-5">
        {contractsList.map((contract, index) => {
          return <Contract key={index} contract={contract} />;
        })}
      </div>
    </div>
  );
};

export default ContractList;
