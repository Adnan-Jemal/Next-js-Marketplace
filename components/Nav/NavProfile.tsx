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
              <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <User2 className="bg-secondary rounded-full p-2 size-9" />
          )}
        </div>
      </DropdownMenuTrigger>
      {user ? (
        <DropdownMenuContent
          sideOffset={8}
          className="border-secondary border-2 rounded-xl w-40 "
          align="start"
        >
          <Link href={"/"}>
            <DropdownMenuItem className="cursor-pointer">
              Account
            </DropdownMenuItem>
          </Link>

          <Link href={"/"}>
            <DropdownMenuItem className="cursor-pointer">
              Messages
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator className=" h-[2px]  " />
          <Link href={"/"}>
            <DropdownMenuItem className="cursor-pointer">
              Sell an Item
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator className=" h-[2px]  " />
          <DropdownMenuItem
            onClick={() => signOut(auth)}
            className="cursor-pointer text-red-400"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent
          sideOffset={8}
          className="border-secondary border-2 rounded-xl w-40"
          align="start"
        >
          <Link href={"/signup"}>
            <DropdownMenuItem className="cursor-pointer">
              Sign up
            </DropdownMenuItem>
          </Link>

          <Link href={"/login"}>
            <DropdownMenuItem className="cursor-pointer">
              Log In
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator className=" h-[2px]  " />
          <Link href={"/login"}>
            <DropdownMenuItem className="cursor-pointer">
              Sell an Item
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default NavProfile;
