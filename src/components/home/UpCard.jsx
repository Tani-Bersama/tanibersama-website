import React from "react";

export default function UpCard({ number, title, desc }) {
  return (
    <div className="flex flex-row justify-start items-start ">
      <div className="text-2xl font-bold m-2">{number}</div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
