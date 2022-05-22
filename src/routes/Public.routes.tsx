import { Routes, Route } from "react-router-dom";

import {
  Login,
  Registration,
  ForgotPassword,
  NotFound,
  UpdatePassword,
} from "@publicRoutes";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password/*" element={<UpdatePassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
