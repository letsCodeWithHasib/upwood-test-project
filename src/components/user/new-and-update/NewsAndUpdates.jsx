// Importing child components: NewsArticles and PlateformUpdates
import NewsArticles from "./NewsArticles";
import PlateformUpdates from "./PlateformUpdates";

const NewsAndUpdates = () => {
  return (
    // Main container with margin applied to the sides and bottom
    <div className="mx-10 mb-10">
      {/* Section heading */}
      <h2 className="text-center font-lexend text-[32px] text-[#333333] font-bold">
        News & updates
      </h2>

      {/* Platform how-to guides section */}
      <div className="shadow-another rounded-lg p-10 space-y-5 mt-5">
        {/* Sub-heading for platform guides */}
        <h3 className="text-2xl font-bold font-lexend">
          Platform how to guides
        </h3>

        {/* Support information text */}
        <p className="text-[#333333]">
          Our support hours are 10:00 to 16:00 (UTC +2) Mon to Fri. Please
          expect an answer during those times.
        </p>
      </div>

      {/* Rendering Platform Updates component */}
      <PlateformUpdates />

      {/* Rendering News Articles component */}
      <NewsArticles />
    </div>
  );
};

export default NewsAndUpdates;
