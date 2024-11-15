import { contractsList } from "../../../assets/data";
import Contract from "./Contract";

const ContractList = () => {
  return (
    <div className="mx-5 mb-10">
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        Contracts
      </h2>

      {/* Responsive grid layout */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {contractsList.length > 0 ? (
          contractsList.map((contract) => (
            <Contract key={contract.id} contract={contract} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No contracts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContractList;
