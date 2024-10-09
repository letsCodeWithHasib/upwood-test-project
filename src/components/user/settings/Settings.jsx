import ProfileSettings from "./ProfileSettings";
import TransactionHistory from "./TransactionHistory";
import AffiliateSettings from "./AffiliateSettings";

const Settings = () => {
  return (
    <div className="mx-5 mt-5 mb-10">
      {/* Container for the settings section */}
      <h2 className="text-center font-lexend text-2xl text-[#333333] font-bold mb-5">
        Settings {/* Section heading */}
      </h2>
      <div className="flex lg:justify-end md:mt-[-20px] lg:relative z-10 mt-5 justify-center">
        <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
          Update Account
        </button>
      </div>
      <div className="space-y-5">
        <ProfileSettings />
        <TransactionHistory />
        <AffiliateSettings />
      </div>
    </div>
  );
};

export default Settings; // Exporting the component for use in other parts of the application
