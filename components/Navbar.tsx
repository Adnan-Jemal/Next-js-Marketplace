import React from "react";
import { ModeToggle } from "./darkModeToggle";

const Navbar = () => {
  return (
    <div className="w-full    items-center   ">
      <div className=" m-auto h-16 border-b flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
