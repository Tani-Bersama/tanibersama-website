import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [margin, setMargin] = useState("hidden");
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="max-h-[70px] w-full flex flex-row justify-between items-center bg-white font-all top-0 sticky">
        <div className="flex flex-row items-center ml-14 mr-14">
          <img
            src="src/components/assets/logonav.png"
            width={45}
            className="mr-3 ml-6 mt-4 mb-4"
          />
          <h1 className="ml-4 font-bold text-[16px] text-[#5EBB47]">
            tanibersama
          </h1>
        </div>
        <div
          className={`mr-14 lmd:ml-14 lmd:static absolute lmd:bg-transparent bg-white lmd:min-h-fit min-h-[40vh] left-0 top-[70px] ${margin} lmd:w-auto w-full lmd:flex flex items-center justify-center px-5`}
        >
          <ul className="flex lmd:flex-row flex-col lmd:items-center text-center text-[14px]">
            <li className="lmd:m-5 md:mt-[-50px] m-2">
              <Link to="/">Home</Link>
            </li>
            <li className="lmd:m-5 m-2">
              <Link to="/collective">Collective</Link>
            </li>
            <li className="lmd:m-5 m-2">
              <Link to="/product">Products</Link>
            </li>
            <li className="lmd:m-5 m-2">
              <Link to="/technology">Technology</Link>
            </li>
            <li className="lmd:m-5 m-2">
              <Link to="/partner">Partners</Link>
            </li>
            <li className="lmd:m-5 m-2">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div
          className="lmd:hidden mr-16 ml-8 cursor-pointer"
          onClick={() => {
            clicked ? setMargin(`hidden`) : setMargin(``);
            setClicked(!clicked);
          }}
        >
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
