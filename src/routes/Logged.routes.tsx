import { Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound } from "@pages";

export function Logged() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
