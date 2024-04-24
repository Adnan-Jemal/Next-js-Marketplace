import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";


const NavProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" cursor-pointer border-secondary border-2 hover:shadow-md transition-shadow rounded-2xl p-2 gap-3 flex items-center">
          <MenuIcon className="" />
          <div className="size-8 bg-slate-600 rounded-full"></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} className="border-secondary border-2 rounded-xl" align="start">
        <DropdownMenuItem className="cursor-pointer">Sign up</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Log In</DropdownMenuItem>
        <DropdownMenuSeparator className=" h-[2px]  " />
        <DropdownMenuItem className="cursor-pointer">Add an item</DropdownMenuItem>

    
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavProfile;
