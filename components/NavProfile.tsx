import { MenuIcon, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const NavProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" cursor-pointer border-secondary border-2 hover:shadow-md transition-shadow rounded-2xl px-2 py-1.5 gap-3 flex items-center">
          <MenuIcon  />
          <User2 className="bg-secondary rounded-full p-2 size-9" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className="border-secondary border-2 rounded-xl"
        align="start"
      >
        <DropdownMenuItem className="cursor-pointer">Sign up</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Log In</DropdownMenuItem>
        <DropdownMenuSeparator className=" h-[2px]  " />
        <DropdownMenuItem className="cursor-pointer">
          Sell an item
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavProfile;
