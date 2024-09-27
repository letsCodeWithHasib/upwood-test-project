// Importing necessary assets and components for routing and styling
import { sidebarItems } from "../../../assets/data";

import { Link, useMatch, useLocation } from "react-router-dom"; // Importing routing components
import { style } from "../../../assets/style"; // Importing custom styles

const Sidebar = () => {
  const location = useLocation();
  const contains = (route) => {
    return location.pathname.includes(route);
  };

  return (
    // Sidebar container with fixed positioning and custom width
    <aside className="w-[300px] fixed mx-5 top-[150px]">
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
                  src={
                    contains(path) || (isActive && title === "Active Project")
                      ? white
                      : normal
                  }
                  alt="Contracts"
                />{" "}
                {title}
              </button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
