import React from "react";

export default function CfCard({ title, children }) {
  return (
    <div className="flex flex-col m-10 max-w-[500px] min-w-[300px] items-center font-all">
      <div className="my-5">{title}</div>
      <div className="bg-[#F1F1F1] px-10 py-5 rounded-xl">{children}</div>
    </div>
  );
}
