import { Authentication, Registration, ResetPassword } from "@pages/index";
import { Navigate, Route, Routes } from "react-router-dom";

const NotLoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default NotLoggedInRoutes;
