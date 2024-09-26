// Importing the QueryBox component and platform updates data
import QueryBox from "../common/QueryBox";
import { platformUpdates } from "../../../assets/data";

const PlateformUpdates = () => {
  return (
    // Grid layout with 3 columns, gap between items, and custom shadow and padding
    <div className="grid grid-cols-3 gap-x-5 gap-y-7 mt-7 shadow-another rounded-lg p-10">
      {/* Mapping through plateformUpdates array to render each update */}
      {platformUpdates.map((plateformUpdate, index) => {
        const { updateNum, updateName } = plateformUpdate; // Destructuring update object

        // Rendering QueryBox for each update, passing data as props
        return (
          <QueryBox
            key={index} // Using index as key; ideally use unique identifiers if available
            boxData={{ heading: updateNum, query: updateName }} // Passing data to QueryBox component
          />
        );
      })}
    </div>
  );
};

export default PlateformUpdates;
