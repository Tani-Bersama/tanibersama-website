import React from "react";

export default function PersonsCard({ name, cat, children }) {
  return (
    <div className="flex flex-col items-center mx-8 my-20 text-center min-w-[200px] max-w-[350px]">
      <div className="h-[100px] w-[100px] bg-slate-300 rounded-[50%] inline-block"></div>
      <div className="mt-2">{name}</div>
      <div>{cat}</div>
      <div className="w-[100px] h-[2px] bg-[#5EBB48] my-5"></div>
      <div className="flex flex-col gap-y-[20px]">{children}</div>
    </div>
  );
}
