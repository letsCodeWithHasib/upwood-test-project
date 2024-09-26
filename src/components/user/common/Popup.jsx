const Popup = ({ selectedProject, closePopup }) => {
  const { available, price } = selectedProject;
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,.5)] bg-opacity-30 backdrop-blur-lg flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-custom p-6 max-w-lg w-full text-center">
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
            <span className="text-[#0FB404] text-[20px]">{price}€</span>
          </p>
          <input
            className="p-4 border-[1px] rounded-md border-black"
            type="text"
            placeholder="Type the amount€"
          />
          <p className="text-[Roboto] font-bold">
            Total payment :{" "}
            <span className="text-[#0FB404] text-[20px]">5000€</span>
          </p>
          <div className="flex flex-col items-center py-7 gap-3">
            <button className="text-[Roboto] font-bold uppercase text-[#0FB404] justify-center">
              Sign share purchase agreement
            </button>
            <button className="text-[Roboto] font-bold uppercase bg-[#0FB404] py-[14px] px-[24px]  rounded-lg text-white">
              Invest
            </button>
          </div>
          <button
            onClick={() => closePopup(false)}
            className="text-[Roboto] font-bold uppercase  text-[#6B6B6B]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
