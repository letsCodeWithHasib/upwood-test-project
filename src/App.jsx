import { Routes, Route, Navigate } from "react-router-dom"; // Importing routing components from React Router

// Importing pages for authentication
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";

// Importing authentication components
import LoginComponent from "./components/login/Login";
import MailSentComponent from "./components/login/MailSent";
import RegisterComponent from "./components/login/Register";
import ForgotPasswordComponent from "./components/login/ForgotPassword";
import VerifyComponent from "./components/login/Verify";

// Importing user components for user-related functionalities
import ActiveProjects from "./components/user/active-projects/ActiveProjects";
import ContractList from "./components/user/contracts/ContractList";
import FundedProjects from "./components/user/funded-projects/FundedProjects";
import InvestmentPortfolio from "./components/user/Investment-portfolio/InvestmentPortfolio";
import NewsAndUpdates from "./components/user/new-and-update/NewsAndUpdates";
import Settings from "./components/user/settings/Settings";
import Support from "./components/user/support/Support";
import WalletManagement from "./components/user/wallet-management/WalletManagement";
import SingleContract from "./components/user/contracts/SingleContract";
import ViewProjectDetails from "./components/user/common/ViewProjectDetails";
import Popup from "./components/user/common/Popup";

/**
 * App Component
 * The main application component that defines the routing structure for the application.
 * It includes routes for both authentication and user-related functionalities.
 *
 * @returns {JSX.Element} - The rendered application with routing.
 */
const App = () => {
  return (
    <div>
      <Routes>
        {/* Authentication routes */}
        <Route path="auth" element={<LoginPage />}>
          <Route index element={<LoginComponent />} />
          {/* Default login component */}
          <Route
            path="forgot-password"
            element={<ForgotPasswordComponent />}
          />{" "}
          {/* Route for password recovery */}
          <Route path="mail-sent" element={<MailSentComponent />} />{" "}
          {/* Route for mail sent confirmation */}
          <Route path="register" element={<RegisterComponent />} />{" "}
          {/* Route for user registration */}
          <Route path="verification" element={<VerifyComponent />} />{" "}
          {/* Route for email verification */}
        </Route>

        {/* User routes */}
        <Route path="user" element={<UserPage />}>
          <Route index element={<ActiveProjects />} />
          <Route path="active-project/:id" element={<ViewProjectDetails />} />
          {/* Default user dashboard component */}
          <Route path="funded-projects" element={<FundedProjects />} />{" "}
          {/* Route for funded projects */}
          <Route
            path="investment-portfolio"
            element={<InvestmentPortfolio />}
          />{" "}
          {/* Route for investment portfolio */}
          <Route path="contracts" element={<ContractList />} />
          <Route path="contracts/:id" element={<SingleContract />} />
          {/* Route for user contracts */}
          <Route path="wallet-management" element={<WalletManagement />} />
          {/* Route for wallet management */}
          <Route path="settings" element={<Settings />} />
          {/* Route for user settings */}
          <Route path="news" element={<NewsAndUpdates />} />
          {/* Route for news and updates */}
          <Route path="support" element={<Support />} />
          {/* Route for user support */}
        </Route>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/testing" element={<Popup />} />
      </Routes>
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application
