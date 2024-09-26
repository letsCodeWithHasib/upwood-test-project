import ProfileSettings from "./ProfileSettings";
import TransactionHistory from "./TransactionHistory";
import AffiliateSettings from "./AffiliateSettings";

const Settings = () => {
  return (
    <div className="mx-10 mb-10">
      {/* Container for the active projects section */}
      <h2 className="text-center font-lexend text-[32px] text-[#333333] font-bold">
        Settings {/* Section heading */}
      </h2>
      <ProfileSettings />
      <TransactionHistory />
      <AffiliateSettings />
    </div>
  );
};

export default Settings; // Exporting the component for use in other parts of the application
