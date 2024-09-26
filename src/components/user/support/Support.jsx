import PlateformGuides from "./PlateformGuides";
import WriteMessage from "./WriteMessage";

const Support = () => {
  return (
    <div className="mx-10 mb-10">
      {/* Container for the active projects section */}
      <h2 className="text-center font-lexend text-[32px] text-[#333333] font-bold mb-5">
        Supports {/* Section heading */}
      </h2>
      <PlateformGuides />
      <WriteMessage />
    </div>
  );
};

export default Support;
