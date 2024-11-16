// Importing the QueryBox component and platform updates data
import QueryBox from "./UpdateBox";
import { platformUpdates } from "../../../assets/data";

const PlatformUpdates = () => {
  return (
    // Grid layout with responsive column settings and custom shadow and padding
    <div className="shadow-custom rounded-lg p-5 mt-7">
      <h3 className="text-lg font-bold font-lexend ">
        Planned platform maintenance
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {/* Mapping through platformUpdates array to render each update */}
        {platformUpdates.map((platformUpdate, index) => {
          const { updateNum, updateName } = platformUpdate; // Destructuring update object

          // Rendering QueryBox for each update, passing data as props
          return (
            <QueryBox
              key={index} // Using index as key; ideally use unique identifiers if available
              boxData={{ heading: updateNum, query: updateName }} // Passing data to QueryBox component
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-5 mb-5">
        <button className="text-[#0FB404] font-[Roboto] uppercase font-bold text-[15px]">
          See All
        </button>
      </div>
    </div>
  );
};

export default PlatformUpdates;
