"use client";
import { MenuIcon, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "firebase/auth";
import LoggedOutDropDown from "./LoggedOutDropDown";
import LoggedInDropdown from "./LoggedInDropdown";


const NavProfile = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" cursor-pointer border-secondary border-2 hover:shadow-md transition-shadow rounded-2xl px-2 py-1.5 gap-3 flex items-center">
          <MenuIcon />
          {user ? (
            <Avatar>
              <AvatarImage src={user.photoURL!} />
              <AvatarFallback className="text-xl">
                {user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <User2 className="bg-secondary rounded-full p-2 h-[40px] w-[40px]" />
          )}
        </div>
      </DropdownMenuTrigger>
      {user ? <LoggedInDropdown />:<LoggedOutDropDown />}
    </DropdownMenu>
  );
};

export default NavProfile;
