// Importing necessary assets and components for routing and styling
import active from "../../../assets/active.png";
import funded from "../../../assets/funded.png";
import investment from "../../../assets/investment.png";
import contracts from "../../../assets/contracts.png";
import wallet from "../../../assets/wallet.png";
import support from "../../../assets/support.png";
import news from "../../../assets/news.png";
import settings from "../../../assets/settings.png";
import { Link, useMatch, useLocation } from "react-router-dom"; // Importing routing components
import { style } from "../../../assets/style"; // Importing custom styles

const Sidebar = () => {
  const contains = (route) => {
    return useLocation().pathname.includes(route);
  };

  return (
    // Sidebar container with fixed positioning and custom width
    <aside className="w-[300px] fixed mx-10 top-[150px]">
      {/* Navigation container with vertical layout and spacing */}
      <nav className="flex flex-col gap-1">
        {/* Link to Active Projects */}
        <Link to="." className="flex items-center">
          <button
            className={`${style.sideLink} ${
              (useMatch("/user") || contains("/user/active-project")) &&
              style.sideLinkSelected
            }`} // Apply selected style if current route matches
          >
            <img src={active} alt="Active Projects" /> Active Projects
          </button>
        </Link>

        {/* Link to Funded Projects */}
        <Link to="funded-projects" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/funded-projects") && style.sideLinkSelected
            }`}
          >
            <img src={funded} alt="Funded Projects" /> FUNDED PROJECTS
          </button>
        </Link>

        {/* Link to Investment Portfolio */}
        <Link to="investment-portfolio" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/investment-portfolio") && style.sideLinkSelected
            }`}
          >
            <img src={investment} alt="Investment Portfolio" /> INVESTMENT
            PORTFOLIO
          </button>
        </Link>

        {/* Link to Contracts */}
        <Link to="contracts" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/contracts") && style.sideLinkSelected
            }`}
          >
            <img src={contracts} alt="Contracts" /> CONTRACTS
          </button>
        </Link>

        {/* Link to Wallet Management */}
        <Link to="wallet-management">
          <button
            className={`${style.sideLink} ${
              contains("/user/wallet-management") && style.sideLinkSelected
            }`}
          >
            <img src={wallet} alt="Wallet Management" /> Wallet Management
          </button>
        </Link>

        {/* Link to Settings */}
        <Link to="settings" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/settings") && style.sideLinkSelected
            }`}
          >
            <img src={settings} alt="Settings" /> SETTINGS
          </button>
        </Link>

        {/* Link to News & Updates */}
        <Link to="news" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/news") && style.sideLinkSelected
            }`}
          >
            <img src={news} alt="News & Updates" /> NEWS & UPDATES
          </button>
        </Link>

        {/* Link to Support */}
        <Link to="support" className="flex items-center">
          <button
            className={`${style.sideLink} ${
              contains("/user/support") && style.sideLinkSelected
            }`}
          >
            <img src={support} alt="Support" /> SUPPORT
          </button>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
