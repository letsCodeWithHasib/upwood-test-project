import { useState } from "react";
import check from "../../../assets/check-green.png";
import { Link } from "react-router-dom";

const Popup = ({ selectedInvestProject, closePopup }) => {
  const [price, setPrice] = useState(0);
  const [invested, setInvested] = useState(false);
  const [failed, setFailed] = useState(false);
  const { available, price: itemPrice } = selectedInvestProject;

  const investNow = () => {
    if (price > 0) {
      setFailed(false);
      setInvested(true);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="fixed z-[1000000] inset-0 bg-[rgb(0,0,0,.5)] bg-opacity-30 backdrop-blur-lg flex justify-center items-center">
      {invested ? (
        <div className="bg-white mx-10 rounded-lg shadow-custom p-6 max-w-lg w-full text-center">
          <h3 className="font-bold text-lexend text-[20px]">
            Congratulations!
          </h3>
          <h4 className="font-bold text-lexend text-[16px] mt-3">
            You successfully purchased{" "}
            <span className="text-[#0FB404] text-2xl">{price}</span> shares
          </h4>
          <div className="flex justify-center mt-5">
            <img className="w-[50px]" src={check} alt="" />
          </div>
          <div className="mt-5 flex flex-col gap-4">
            <Link to="/user/investment-portfolio">
              <button
                onClick={closePopup}
                className="uppercase font-[Roboto] text-[#0FB404] text-sm font-bold"
              >
                Go to investment portfolio
              </button>
            </Link>
            <button
              onClick={() => closePopup(false)}
              className="font-[Roboto] font-bold uppercase text-[#6B6B6B]"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white mx-10 rounded-lg shadow-custom p-6 max-w-lg w-full text-center">
          <h2 className="text-[#333333] font-lexend font-bold text-[20px]">
            Type amount of shares you want to buy
          </h2>
          <div className="mt-5 space-y-2">
            <p className="text-[Roboto] font-bold">
              Shares available :{" "}
              <span className="text-[#0FB404] text-[20px]">{available}</span>
            </p>
            <p className="text-[Roboto] font-bold">
              Price per share :{" "}
              <span className="text-[#0FB404] text-[20px]">{itemPrice}€</span>
            </p>
            <input
              className={`p-4 border-[1px] rounded-md ${
                failed ? "border-[#ff0000]" : "border-black"
              }`}
              type="number"
              placeholder="Type the amount€"
              onChange={(e) => setPrice(e.target.value)}
            />
            {failed && (
              <div className="flex justify-center">
                <p className="w-[300px] text-center text-sm text-[#ff0000]">
                  Your wallet balance is not sufficient to buy shares. Please
                  add funds to your wallet.
                </p>
              </div>
            )}
            <p className="text-[Roboto] font-bold mt-5">
              I understand, let’s continue
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                className="text-[Roboto] text-sm font-bold mt-3 uppercase bg-[#0FB404] py-[14px] px-[24px]  rounded-lg text-white"
                onClick={investNow}
              >
                Invest
              </button>
            </div>
            <button
              onClick={() => closePopup(false)}
              className="font-[Roboto] font-bold uppercase text-[#6B6B6B]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
