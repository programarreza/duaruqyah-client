"use client";
import Link from "next/link";
import DropDown from "./DropDown";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar  p-8 pb-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isOpen && (
              <>
                {" "}
                <ul
                  tabIndex={0}
                  className="menu absolute flex h-auto  menu-sm dropdown-content mt-3 z-[10] p-2   rounded-box  w-[250px] "
                >
                  <input
                    type="text"
                    placeholder="Search by Dua Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </ul>
              </>
            )}
          </div>
          <Link href="/" className=" text-xl">
            <h2 className="text-2xl">Duas Page</h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end ">
          {/* user profile */}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mr-auto"
          />
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
