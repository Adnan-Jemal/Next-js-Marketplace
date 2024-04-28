import Link from "next/link";
import { Button } from "../ui/button";
import {
  Heart,
  LayoutDashboard,
  MessagesSquare,
  Package,
  PackagePlus,
  Plus,
  Settings,
  SidebarOpen,
  UserCog,
  Users,
} from "lucide-react";

import SidebarMenus from "./SidebarMenus";
import SidebarProfile from "./SidebarProfile";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  return (
    <>
     <MobileSidebar/>
      <div className=" hidden sm:inline-flex max-w-[300px] min-h-screen  flex-col gap-5 bg-background border-r-2 border-secondary  ">
        <div className="border-b-2 py-[22px] border-secondary px-6">
          <Link href={"/"} className="">
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </Link>
        </div>

        <div className="grow flex flex-col px-4 mt-6 gap-4">
          <SidebarMenus />
        </div>
        <SidebarProfile />
      </div>
    </>
  );
};

export default Sidebar;
