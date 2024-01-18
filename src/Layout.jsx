import React from "react";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div>Navbar</div>
      <div>{children}</div>
      <Footer/>
    </>
  );
}
