import { Routes, Route } from "react-router-dom";
import { Login, Registration, ForgotPassword, NotFound } from "@pages";

export function NotLogged() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
