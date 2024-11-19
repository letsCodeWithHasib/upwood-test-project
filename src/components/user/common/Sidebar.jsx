// Importing necessary assets and components for routing and styling
import logoutImage from "../../../assets/logout.png";
import { sidebarItems } from "../../../assets/data";
import { Link, useMatch, useLocation } from "react-router-dom"; // Importing routing components
import { style } from "../../../assets/style"; // Importing custom styles
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/features/authSlice";
import profile from "../../../assets/profile.png";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change and set the selected image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Clean up object URL when selectedImage changes or component unmounts
  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  // Hide the sidebar when the location changes
  useEffect(() => {
    setShowSideBar(false);
  }, [location]);

  // Helper to check if a route is active
  const isRouteActive = (route) => location.pathname.includes(route);

  return (
    <aside
      className={`md:w-[250px] fixed md:top-[134px] ${
        showSideBar ? "block" : "hidden"
      } md:block md:z-0 rounded-t-lg items-start h-screen top-0 flex flex-col bg-white z-40 md:justify-between w-full mt-[100px] md:mt-0 md:ml-5`}
    >
      <nav className="flex flex-col justify-center items-center w-full">
        {/* Profile section with file input */}
        <button className="md:hidden w-full flex items-center -mt-5">
          <label htmlFor="fileInput" className="cursor-pointer rounded-full">
            <img
              className="w-full"
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
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            {user?.firstName || "CRE"} {user?.lastName || "Source"}
          </span>
        </button>

        {/* Sidebar links */}
        <div className="flex flex-col gap-1 md:[w-300px] w-full">
          {sidebarItems.map((sidebarItem, index) => {
            const { title, white, normal, path } = sidebarItem;
            const isActive = isRouteActive(path);

            return (
              <Link key={index} to={path} className="flex items-center">
                <button
                  className={`${style.sideLink} ${
                    isActive && style.sideLinkSelected
                  }`}
                >
                  <img
                    className="w-[22px]"
                    src={isActive ? white : normal}
                    alt={title}
                  />
                  {title}
                </button>
              </Link>
            );
          })}
        </div>

        {/* Logout button */}
        <button
          className={`${style.sideLink} md:hidden flex items-center gap-2`}
          onClick={() => dispatch(signOut())}
        >
          <img
            className="w-[20px] h-[20px]"
            src={logoutImage}
            alt="Logout Icon"
          />
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B]">
            Logout
          </span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
