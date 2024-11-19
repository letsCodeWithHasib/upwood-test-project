import { contractsList } from "../../../assets/data"; // Importing the contracts data
import { useParams, Link } from "react-router-dom"; // Importing hooks and components from React Router
import downloadImage from "../../../assets/download-image.png";

// SingleContract component to display individual contract details
const SingleContract = () => {
  const { id } = useParams(); // Extracting the contract ID from the URL parameters

  // Validate ID and destructure properties from the contract object
  const contract = contractsList[id];

  // Handle case where contract is not found
  if (!contract) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-red-500">Contract not found.</h2>
        <Link to="/user/contracts" className="text-blue-600 underline">
          Back to contracts
        </Link>
      </div>
    );
  }

  const { contractName, tokens, signedDate, nr } = contract;

  return (
    <div>
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        Contracts
      </h2>
      {/* // Main container for the contract with styling for rounded corners and
      shadow */}
      <div className="rounded-lg shadow-custom mt-10 mx-4 mb-10 md:mx-10">
        {/* Header displaying the contract name and signed date */}
        <p className="bg-[#EBEBEB] rounded-t-lg text-[#6B6B6B] font-[Roboto] font-bold p-2 text-center">
          Subscription Agreement: {contractName} {signedDate}
        </p>

        {/* Content area with dynamic height for visual consistency */}
        <div className="h-[300px] overflow-hidden text-center p-4 my-4">
          <p className="text-gray-700">
            {/* Placeholder text; replace with relevant content as necessary */}
            Detailed contract information will be displayed here.
          </p>
        </div>

        {/* Details section displaying additional contract information */}
        <div className="border-t border-gray-400">
          <div className="p-5 space-y-4">
            {/* Contract title and registration number */}
            <h3 className="text-[#333333] text-[18px] font-bold">
              "{contractName}" | Cadastar NR: {nr}
            </h3>
            <p className="text-sm">Subscription Agreement</p>

            {/* Tokens and signed date display */}
            <div className="flex-col gap-7 md:flex-row flex md:gap-5">
              <p className="font-[Roboto] font-bold text-[#333333] hidden md:flex gap-2 items-center">
                Tokens:
                <span className="text-[#0FB404] font-[Roboto] text-[20px]">
                  {tokens}
                </span>
              </p>
              <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
                Signed Date:
                <span className="text-[#525652] font-[Roboto] text-[20px]">
                  {signedDate}
                </span>
              </p>
            </div>

            {/* Navigation and action buttons */}
            <div className="flex font-[Roboto] justify-between items-start pt-5">
              {/* Link to navigate back to the contracts list */}
              <Link
                className="text-[#6B6B6B] items-center uppercase font-[Roboto] font-bold text-[15px] text-center"
                to="/user/contracts"
                aria-label="Back to contracts list"
              >
                Back to Contracts
              </Link>
              <div className="flex  gap-10 items-center ">
                {/* Buttons for downloading the contract in different formats */}
                <button
                  className="font-[Roboto] justify-center flex items-center gap-3 font-bold text-[15px]   text-[#0FB404] rounded-lg w-full  mb-3"
                  aria-label="Download EDOC"
                >
                  EDOC <img className="w-[17px]" src={downloadImage} alt="" />
                </button>
                <button
                  className="font-[Roboto] justify-center flex items-center gap-3 font-bold text-[15px] text-[#0FB404] rounded-lg w-full  mb-3"
                  aria-label="Download PDF"
                >
                  PDF <img className="w-[17px]" src={downloadImage} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContract;
