import { contractsList } from "../../../assets/data"; // Importing the contracts data
import { useParams, Link } from "react-router-dom"; // Importing hooks and components from React Router

// Contract component to display individual contract details
const Contract = () => {
  const { id } = useParams(); // Extracting the contract ID from the URL parameters

  // Destructure properties from the contract object using the ID
  const { contractName, tokens, signedDate, nr } = contractsList[id];

  return (
    // Main container for the contract with styling for rounded corners and shadow
    <div className="rounded-lg shadow-custom mt-[120px] m-10">
      {/* Header displaying the contract name and signed date */}
      <p className="bg-[#ffe5e5] rounded-t-lg text-[#6B6B6B] font-[Roboto] font-bold p-2 text-center">
        Subscription agreement {contractName} {signedDate}
      </p>

      {/* Content area with a fixed height for visual consistency */}
      <div className="h-[800px] bg-blue-200 overflow-hidden text-center">
        {/* Placeholder text; replace with relevant content as necessary */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatum
        exercitationem explicabo, vero modi fugiat officia excepturi
        repudiandae. Nisi eveniet itaque quidem pariatur quis excepturi
        necessitatibus at sequi totam dolore! Excepturi facere veritatis
        accusantium nulla asperiores. Corrupti culpa dignissimos, minus beatae
        officia, obcaecati magni expedita reiciendis eaque quaerat consectetur
        iure dicta nam suscipit natus nesciunt aperiam perspiciatis soluta
        sapiente accusantium. Ipsam enim porro, natus ex, recusandae dolorem
        ipsum maxime libero alias aspernatur nam autem! In reprehenderit nostrum
        est. Facere ipsum mollitia ut sunt laudantium minus necessitatibus neque
        itaque.
      </div>

      {/* Details section displaying additional contract information */}
      <div>
        <div className="p-5 space-y-2">
          {/* Contract title and registration number */}
          <h3 className="text-[#333333] text-[20px] font-bold">
            "{contractName}" cadastar NR: {nr}
          </h3>
          <p>Subscription agreement</p>

          {/* Tokens and signed date display */}
          <div className="flex gap-5">
            <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
              Tokens
              <span className="text-[#0FB404] font-[Roboto] text-[20px]">
                {tokens}
              </span>
            </p>
            <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
              Signed date
              <span className="text-[#0FB404] font-[Roboto] text-[20px]">
                {signedDate}
              </span>
            </p>
          </div>

          {/* Navigation and action buttons */}
          <div className="flex justify-between items-center pt-5">
            {/* Link to navigate back to the contracts list */}
            <Link
              className="text-[#6B6B6B] uppercase font-[Roboto] font-bold text-[15px] px-5 py-3 rounded-lg"
              to="/user/contracts"
            >
              Back to contracts
            </Link>
            <div className="space-x-5">
              {/* Link to see a preview of the contract */}
              <Link to={`/user/contracts/${id}`}>
                <button className="text-[#0FB404] border-[1px] border-[#0FB404] font-[Roboto] font-bold text-[15px] px-5 py-3 rounded-lg">
                  See preview
                </button>
              </Link>
              {/* Buttons for downloading the contract in different formats */}
              <button className="bg-[#0FB404] font-[Roboto] font-bold text-[15px] text-white px-5 py-3 rounded-lg">
                Download EDOC
              </button>
              <button className="bg-[#0FB404] font-[Roboto] font-bold text-[15px] text-white px-5 py-3 rounded-lg">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
