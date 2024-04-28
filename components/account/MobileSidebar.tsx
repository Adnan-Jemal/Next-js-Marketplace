import { SidebarOpen } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SidebarMenus from "./SidebarMenus";
import SidebarProfile from "./SidebarProfile";

const MobileSidebar = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild className=" ">
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-background h-[81px] rounded-none  border-b-2 border-b-secondary"
          >
            <SidebarOpen />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col border-secondary">
          <div className="grow flex flex-col px-4 mt-6 gap-4">
            <SidebarMenus />
          </div>
          <SidebarProfile />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
