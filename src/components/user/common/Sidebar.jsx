// Importing necessary assets and components for routing and styling
import logoutImage from "../../../assets/logout.png";
import { sidebarItems } from "../../../assets/data";
import { Link, useMatch, useLocation } from "react-router-dom"; // Importing routing components
import { style } from "../../../assets/style"; // Importing custom styles
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/features/authSlice";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const contains = (route) => {
    return location.pathname.includes(route);
  };

  useEffect(() => {
    setShowSideBar(false);
  }, [location]);

  return (
    // Sidebar container with fixed positioning and custom width
    <aside
      className={`md:w-[250px] fixed px-5 md:top-[100px] ${
        showSideBar ? "block" : "hidden"
      } md:block md:z-0 rounded-t-lg bg-white h-screen top-0 flex flex-col items-center z-40 md:justify-between w-full justify-center`}
    >
      {/* Navigation container with vertical layout and spacing */}
      <nav className="flex flex-col gap-1">
        {/* Link to Active Projects */}
        {sidebarItems.map((sidebarItem, index) => {
          const { title, white, normal, path } = sidebarItem;
          const isActive = useMatch("user");
          return (
            <Link key={index} to={path} className="flex items-center">
              <button
                className={`${style.sideLink} ${
                  (contains(path) ||
                    (isActive && title === "Active Project")) &&
                  style.sideLinkSelected
                }`}
              >
                <img
                  className="w-[22px]"
                  src={
                    contains(path) || (isActive && title === "Active Project")
                      ? white
                      : normal
                  }
                  alt={title}
                />
                {title}
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Logout button with responsiveness */}
      <button
        className={`${style.sideLink} md:hidden flex items-center gap-2`}
        onClick={() => dispatch(logout())}
      >
        <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B]">
          Logout
        </span>
        <img
          className="w-[20px] h-[20px]"
          src={logoutImage}
          alt="Logout Icon"
        />
      </button>
    </aside>
  );
};

export default Sidebar;
