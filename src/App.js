import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import DashboardLayout from "./Layout/Layout";
import OverviewPage from './pages/OverviewPage/OverviewPage'
import PaymentsPage from './pages/PaymentPage/PaymentPage'
import TransactionsPage from './pages/TransactionsPage/TransactionsPage'
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import SettingsPage from './pages/SettingsPage/SettingsPage'
import HelpPage from './pages/HelpPage/HelpPage'
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from './App.module.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<LandingPage />} />

      <Route path="dashboard" element={<DashboardLayout />} >
        <Route index element={<OverviewPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpPage />} />
      </Route>

    </Route>
  )
);

function App() {
  return (
    <div className={`${styles['app']}  d-flex flex-column`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
