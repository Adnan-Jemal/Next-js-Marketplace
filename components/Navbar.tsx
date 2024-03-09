import React from "react";
import { ModeToggle } from "./darkModeToggle";

const Navbar = () => {
  return (
    <div className="w-full    items-center   ">
      <div className=" m-auto h-16 px-4  flex items-center justify-center bg-slate-500">
        <ModeToggle />
      </div>
      <div className=" m-auto h-16 border-b-2 flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
