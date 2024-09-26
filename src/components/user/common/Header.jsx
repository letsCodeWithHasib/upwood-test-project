// Importing image assets for logo, profile picture, and logout icon
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import logout from "../../../assets/logout.png";

const Header = () => {
  return (
    // Header with flex layout, fixed positioning, and padding for spacing
    <header className="flex bg-white justify-between items-center px-10 fixed w-full top-0">
      {/* Logo section */}
      <section className="logo">
        {/* Logo image with a defined width */}
        <img className="w-[150px]" src={logo} alt="Company Logo" />
      </section>

      {/* User profile and logout button section */}
      <section className="flex gap-10">
        {/* Profile button with image and username */}
        <button className="flex items-center">
          {/* Profile image with a specified height and width */}
          <img className="h-[80px] w-[80px] mt-2" src={profile} alt="Profile" />
          {/* Username with styling and slight negative margin for alignment */}
          <span className="font-[Roboto] text-sm font-bold uppercase text-[#6B6B6B] -ml-3">
            John Carter
          </span>
        </button>

        {/* Logout button with icon and text */}
        <button className="flex items-center gap-2">
          {/* Logout text with styling */}
          <span className="font-[Roboto] text-sm font-bold uppercase text-[#6B6B6B] -ml-3">
            logout
          </span>
          {/* Logout icon with defined size */}
          <img className="w-[24px] h-[24px]" src={logout} alt="Logout Icon" />
        </button>
      </section>
    </header>
  );
};

export default Header;
