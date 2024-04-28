import React from "react";
import { Button } from "../ui/button";
import { PackagePlus } from "lucide-react";
import { ModeToggle } from "./darkModeToggle";
import Link from "next/link";
import MobileSidebar from "../account/MobileSidebar";

const AccountHeader = () => {
  return (
    <div
      className={` border-b-2 border-secondary sticky top-0 z-10 bg-background`}
    >
      <div className=" max-w-7xl select-none px-4 m-auto   flex items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <MobileSidebar />
          <Link href={"/"} className={"sm:scale-0"}>
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </Link>
        </div>

        <div className="flex items-center md:gap-4 gap-2">
          <div className=" py-4 mx-3">
            <Button
              variant={"default"}
              className=" items-center py-6 text-lg   text-md border-none hidden sm:inline-flex"
            >
              <PackagePlus className="mr-2 size-6" /> List an Item
            </Button>
            <Button variant={"default"} size={"icon"} className=" sm:hidden ">
              <PackagePlus className="  size-6" />
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
