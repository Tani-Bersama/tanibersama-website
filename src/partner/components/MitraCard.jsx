import React from "react";

export default function MitraCard({ title, children }) {
  return (
    <div className="flex flex-col items-center m-10">
      <div>{title}</div>
      <div className="flex flex-wrap justify-between">{children}</div>
    </div>
  );
}
