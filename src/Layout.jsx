import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div>Navbar</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
}
