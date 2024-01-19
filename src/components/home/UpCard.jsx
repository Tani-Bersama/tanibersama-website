import React from "react";

export default function UpCard({ number, title, desc }) {
  return (
    <div className="flex flex-row font-all m-10 w-[450px] gap-x-5">
      <div className="text-[20px] font-bold mr-4">{number}</div>
      <div>
        <div>
          <div className="font-bold text-[16px]">{title}</div>
          <div className="text-[14px]">{desc}</div>
        </div>
      </div>
    </div>
  );
}
