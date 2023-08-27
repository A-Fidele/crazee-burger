import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState(false);

  const userContextValue = {
    admin,
    setAdmin,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
