import Link from "next/link";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

export default function LoggedOutDropDown() {
  return (
    <DropdownMenuContent
      sideOffset={8}
      className="border-secondary border-2 rounded-xl w-40"
      align="start"
    >
      <Link href={"/signup"}>
        <DropdownMenuItem className="cursor-pointer">Sign up</DropdownMenuItem>
      </Link>

      <Link href={"/login"}>
        <DropdownMenuItem className="cursor-pointer">Log In</DropdownMenuItem>
      </Link>

      <DropdownMenuSeparator className=" h-[2px]  " />
      <Link href={"/login"}>
        <DropdownMenuItem className="cursor-pointer">
          Sell an Item
        </DropdownMenuItem>
      </Link>
    </DropdownMenuContent>
  );
}
