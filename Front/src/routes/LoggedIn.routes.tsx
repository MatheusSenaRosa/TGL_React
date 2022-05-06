import { Home, NewBet, Account } from "@pages/index";
import { Navigate, Route, Routes } from "react-router-dom";

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/new-bet" element={<NewBet />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default LoggedInRoutes;
