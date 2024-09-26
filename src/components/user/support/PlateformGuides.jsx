import QueryBox from "../common/QueryBox";

const PlateformGuides = () => {
  return (
    <div className="shadow-2xl rounded-2xl p-7">
      <h3 className="text-2xl font-bold font-lexend ">
        Platform how to guides
      </h3>
      <div className="grid grid-cols-3 gap-x-5 gap-y-7 mt-5 ">
        <QueryBox
          boxData={{
            heading: "Portfolio",
            query: "How to manage your investments portfolio?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Wallet",
            query: "How to manage your wallet?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Contracts",
            query: "How to manage your contracts?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Contracts",
            query: "How to manage your contracts?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Portfolio",
            query: "How to manage your investments portfolio?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Wallet",
            query: "How to manage your wallet?",
          }}
        />
      </div>
      <button className="text-[#0FB404] font-bold text-[15px] w-full text-right my-5">
        See all
      </button>
    </div>
  );
};

export default PlateformGuides;
