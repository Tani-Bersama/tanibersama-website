import React from "react";
import strat from "../assets/strategi.png";

export default function StratCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold my-5 text-[18px] text-center">
        Strategi Tumbuh dengan Cepat dan Berkelanjutan
      </div>
      <img src={strat} alt="strategy" className="w-[auto] h-[600px] my-20" />
    </div>
  );
}
