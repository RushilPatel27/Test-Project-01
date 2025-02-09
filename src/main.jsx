import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import AppRoute from "./AppRoute.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <AppRoute />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
