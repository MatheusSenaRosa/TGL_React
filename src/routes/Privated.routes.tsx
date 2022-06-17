import { Routes, Route } from "react-router-dom";

import { Home, NewBet } from "@privateRoutes";
import { NotFound } from "@publicRoutes";

export function PrivatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-bet" element={<NewBet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
