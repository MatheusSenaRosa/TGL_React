import { Routes, Route } from "react-router-dom";
import { Home } from "@privatedRoutes";
import { NotFound } from "@publicRoutes";

export function PrivatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
