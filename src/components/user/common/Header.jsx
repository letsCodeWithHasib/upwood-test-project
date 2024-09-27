// Importing image assets for logo, profile picture, and logout icon
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import logoutImage from "../../../assets/logout.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/features/authSlice";
import { useState } from "react";

const Header = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    // Check if the user has selected a file
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      // Set the selected image URL for preview
      setSelectedImage(imageUrl);

      // Optionally, clean up the URL when the component unmounts or the image changes
      return () => URL.revokeObjectURL(imageUrl);
    }
  };
  return (
    // Header with flex layout, fixed positioning, and padding for spacing
    <header className="flex bg-white justify-between items-center p-5 fixed w-full top-0">
      {/* Logo section */}
      <section className="logo">
        {/* Logo image with a defined width */}
        <img className="w-[120px]" src={logo} alt="Company Logo" />
      </section>

      {/* User profile and logout button section */}
      <section className="flex gap-10">
        {/* Profile button with image and username */}
        <button className="flex items-center gap-5">
          {/* Profile image with a specified height and width */}
          <label htmlFor="fileInput">
            <img
              className={`${
                selectedImage
                  ? "h-[30px] w-[30px] shadow-custom"
                  : "h-[50px] w-[50px]"
              } rounded-full cursor-pointer`}
              src={selectedImage || profile}
              alt="Profile"
            />
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Username with styling and slight negative margin for alignment */}
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            {username}
          </span>
        </button>

        {/* Logout button with icon and text */}
        <button
          className="flex items-center gap-2"
          onClick={() => dispatch(logout())}
        >
          {/* Logout text with styling */}
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            logout
          </span>
          {/* Logout icon with defined size */}
          <img
            className="w-[20px] h-[20px]"
            src={logoutImage}
            alt="Logout Icon"
          />
        </button>
      </section>
    </header>
  );
};

export default Header;
