import { Outlet } from "react-router-dom"; // Importing Outlet for nested routes
import Header from "../components/user/common/Header"; // Importing the Header component
import Sidebar from "../components/user/common/Sidebar"; // Importing the Sidebar component

const User = () => {
  return (
    <div>
      {/* Render the Header component for user navigation */}
      <Header />

      {/* Main content area with Sidebar and Outlet for nested routes */}
      <div className="mt-[80px]">
        {/* Margin to ensure content is below the header */}
        <Sidebar /> {/* Render the Sidebar for navigation links */}
        {/* Outlet to render child routes, positioned beside the Sidebar */}
      </div>
      <div className="ml-[350px]">
        {/* Margin to align content next to Sidebar */}
        <Outlet /> {/* Renders the matching child route component */}
      </div>
    </div>
  );
};

export default User;
