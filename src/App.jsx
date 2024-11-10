import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy loading components
const LoginPage = lazy(() => import("./pages/Login"));
const LoginComponent = lazy(() => import("./components/login/Login"));
const MailSentComponent = lazy(() => import("./components/login/MailSent"));
const RegisterComponent = lazy(() => import("./components/login/Register"));
const ForgotPasswordComponent = lazy(() =>
  import("./components/login/ForgotPassword")
);
const VerifyComponent = lazy(() => import("./components/login/Verify"));
const UserPage = lazy(() => import("./pages/User"));
const ActiveProjects = lazy(() =>
  import("./components/user/active-projects/ActiveProjects")
);
const ContractList = lazy(() =>
  import("./components/user/contracts/ContractList")
);
const FundedProjects = lazy(() =>
  import("./components/user/funded-projects/FundedProjects")
);
const InvestmentPortfolio = lazy(() =>
  import("./components/user/Investment-portfolio/InvestmentPortfolio")
);
const NewsAndUpdates = lazy(() =>
  import("./components/user/new-and-update/NewsAndUpdates")
);
const Settings = lazy(() => import("./components/user/settings/Settings"));
const Support = lazy(() => import("./components/user/support/Support"));
const WalletManagement = lazy(() =>
  import("./components/user/wallet-management/WalletManagement")
);
const SingleContract = lazy(() =>
  import("./components/user/contracts/SingleContract")
);
const ViewActiveDetails = lazy(() =>
  import("./components/user/active-projects/ViewActiveDetails")
);
const ViewFundedProject = lazy(() =>
  import("./components/user/funded-projects/ViewFundedProject")
);
const ViewPortfolioProject = lazy(() =>
  import("./components/user/Investment-portfolio/ViewPortfolioProject")
);
const Activate = lazy(() => import("./components/login/Activate"));
const AuthRouteWrapper = lazy(() => import("./routes/AuthRouteWrapper"));
const UserRouteWrapper = lazy(() => import("./routes/UserRouteWrapper"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading app...</div>}>
      <Routes>
        {/* Authentication routes */}
        <Route
          path="auth"
          element={
            <Suspense fallback={<div>Loading auth...</div>}>
              <AuthRouteWrapper>
                <LoginPage />
              </AuthRouteWrapper>
            </Suspense>
          }
        >
          <Route index element={<LoginComponent />} />
          <Route path="forgot-password" element={<ForgotPasswordComponent />} />
          <Route path="mail-sent" element={<MailSentComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="verification" element={<VerifyComponent />} />
        </Route>

        {/* User routes */}
        <Route
          path="user"
          element={
            <Suspense fallback={<div>Loading user section...</div>}>
              <UserRouteWrapper>
                <UserPage />
              </UserRouteWrapper>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Active page loading</div>}>
                <ActiveProjects />
              </Suspense>
            }
          />
          <Route path="active-project/:id" element={<ViewActiveDetails />} />
          <Route path="funded-projects" element={<FundedProjects />} />
          <Route path="funded-projects/:id" element={<ViewFundedProject />} />
          <Route
            path="investment-portfolio"
            element={<InvestmentPortfolio />}
          />
          <Route
            path="investment-portfolio/:id"
            element={<ViewPortfolioProject />}
          />
          <Route path="contracts" element={<ContractList />} />
          <Route path="contracts/:id" element={<SingleContract />} />
          <Route path="wallet-management" element={<WalletManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="news" element={<NewsAndUpdates />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
