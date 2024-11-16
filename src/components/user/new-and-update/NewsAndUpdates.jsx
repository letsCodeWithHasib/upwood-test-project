// Importing child components: NewsArticles and PlateformUpdates
import NewsArticles from "./NewsArticles";
import PlateformUpdates from "./PlateformUpdates";

const NewsAndUpdates = () => {
  return (
    // Main container with margin applied to the sides and bottom
    <div className="mx-5 mb-10">
      {/* Section heading */}
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        News & updates
      </h2>

      {/* Platform how-to guides section */}
      <div className="shadow-custom rounded-lg p-5 space-y-2 mt-5">
        {/* Sub-heading for platform guides */}
        <h3 className="text-lg font-bold font-lexend">
          Planned platform maintenance
        </h3>

        {/* Support information text */}
        <p className="text-[#333333] text-[15px]">
          Next planned platform maintenance is going to happen at 22.07.2024 22
          : 00 (CET), please be aware that there may be short time frame when
          platform may show service maintenance. We are constantly working on
          platform improvements, updates and new features to provide better
          investment experience. Your funds are in your digital wallet, thereby,
          always safe!
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
