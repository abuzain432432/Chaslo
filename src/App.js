import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import DashboardLayout from "./Layout/Layout";
import { OverviewPage, PaymentsPage, TransactionsPage, AccountsPage, SettingsPage, HelpPage, LandingPage } from './routes/routes'
import styles from './App.module.scss'
import 'react-phone-number-input/style.css';

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
