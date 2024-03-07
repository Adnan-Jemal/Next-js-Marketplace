import React from "react";
import { ModeToggle } from "./darkModeToggle";

const Navbar = () => {
  return (
    <div className="w-full  px-4  items-center  bg-slate-500 ">
      <div className=" m-auto h-20  flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
