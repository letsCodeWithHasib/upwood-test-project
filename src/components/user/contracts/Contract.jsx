import { Link } from "react-router-dom";
import download from "../../../assets/arrow-down.png";

// Contract component to display individual contract details
const Contract = ({ contract }) => {
  // Destructure properties from the contract object
  const { contractName, tokens, signedDate, nr, id } = contract;

  return (
    // Main container for each contract with rounded corners and shadow
    <div className="rounded-lg shadow-custom overflow-hidden">
      {/* Header displaying the contract name and signed date */}
      <p className="bg-[#EBEBEB] text-sm rounded-t-lg text-[#6B6B6B] font-[Roboto] font-bold p-2 text-center">
        Subscription agreement {contractName} {signedDate}
      </p>

      {/* Content area with a fixed height for visual consistency */}
      <div className="h-[250px]  overflow-hidden text-center p-4">
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
      <div className="border-t-8 border-[rgb(235,235,235)]">
        <div className="p-5 space-y-2">
          {/* Contract title and registration number */}
          <h3 className="text-[#333333] font-lexend text-lg font-bold">
            "{contractName}" cadastrar NR: {nr}
          </h3>
          <p className="text-sm font-[Roboto]">Subscription agreement</p>

          {/* Tokens and signed date display */}
          <div className="flex flex-col md:flex-row gap-4">
            <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
              <span className="text-[#0FB404] font-[Roboto] text-lg">
                {signedDate}
              </span>
            </p>
          </div>

          {/* Action buttons for the user */}
          <div className="flex justify-center gap-10 pt-5 ">
            <Link to={`/user/contracts/${id}`} className="">
              <button className="w-full text-[#0FB404] uppercase  font-[Roboto] font-bold text-[14px] rounded-lg ">
                See preview
              </button>
            </Link>
            <button className="text-[#0FB404] uppercase items-center font-[Roboto] font-bold text-[14px] rounded-lg flex gap-5">
              EDOC
              <img src={download} alt="" />
            </button>
            <button className="text-[#0FB404] uppercase items-center font-[Roboto] font-bold text-[14px] rounded-lg flex gap-5">
              PDF
              <img src={download} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
