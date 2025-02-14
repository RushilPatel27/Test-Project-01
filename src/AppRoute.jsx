import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import MemberReg from "./pages/MemberReg";
import ProductList from "./pages/ProductList";
import ProductData from "./pages/data/ProductData";

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/member-reg" element={<MemberReg />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </div>
  );
}
