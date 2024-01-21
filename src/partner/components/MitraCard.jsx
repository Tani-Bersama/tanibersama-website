import React from "react";

export default function MitraCard({ title, children }) {
  return (
    <div className="flex flex-col items-center m-10 font-all justify-center">
      <div className="font-semibold">{title}</div>
      <div
        className="flex flex-wrap justify-center max-w-[500px] gap-4
                    text-center border-2 border-[#55A840] rounded-xl p-4 m-5"
      >
        {children}
      </div>
    </div>
  );
}
