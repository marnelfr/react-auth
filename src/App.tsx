import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/Layout/Root";
import DashboardPage from "./pages/Dashboard";
import AuthLayout from "./pages/Layout/Auth";
import UsersPage from "./pages/Users";
import PersistAuthLayout from "./pages/Layout/PersistAuth";
import { ROUTES } from "./constants/routes";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<RootLayout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />

        <Route element={<PersistAuthLayout />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.root} element={<DashboardPage />} />
            <Route path={ROUTES.users} element={<UsersPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
