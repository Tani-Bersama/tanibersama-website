import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about/about.jsx";
import Product from "./product/product.jsx";
import Error from "./error.jsx";
import Navbar from "./components/Navbar.jsx";
import Layout from "./Layout.jsx";
import Collective from "./collective/collective.jsx";
import Technology from "./technology/technology.jsx";
import Partner from "./partner/partner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/collective",
    element: <Collective />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/partner",
    element: <Partner />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
