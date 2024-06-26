"use client";
import { Menu, SidebarOpen } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarMenus from "./SidebarMenus";
import SidebarProfile from "./SidebarProfile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
const [open, setOpen] = useState(false);


  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className=" border-none mt-1  ">
          <Button variant={"ghost"} size={"icon"} className="">
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col border-secondary">
          <div className="grow flex flex-col px-4 mt-6 gap-4">
            <SidebarMenus setOpen={setOpen} />
          </div>
          <SidebarProfile />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
