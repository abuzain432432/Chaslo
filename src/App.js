// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Layout";
import { REGISTER_ROUTE_CONST, LOGIN_ROUTE_CONST } from "./Constants/ROUTES_CONST";
import UserRegister from "./pages/UserSignUp/UserRegister";
import UserLoginPage from "./pages/UserLogin/UserLoginPage";
import styles from './App.module.scss'
// import { useLocation, useParams } from 'react-router-dom'
function App() {
  // const param = useLocation();
  // useEffect(() => {
  //   console.log(param);
  // }, [])
  return (
    <div className={`${styles['app']}  d-flex flex-column`}>
      {/* <Routes>
        <Route path={LOGIN_ROUTE_CONST} element={<UserLoginPage />} />
        <Route path={REGISTER_ROUTE_CONST} element={<UserRegister />} />
      </Routes> */}
      <Dashboard />
    </div>
  );
}

export default App;
