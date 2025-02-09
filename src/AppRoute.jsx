import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </div>
  );
}
