"use client";

import { useParams } from "next/navigation";

import Link from "next/link";
type propTypes = {
  categoryName: String;
  children?: React.ReactNode;
};
const NavCategory = ({ categoryName, children }: propTypes) => {
  //used to check if the current tap is selected 
  const params = useParams<{ tag: string; catName: string }>();

  return (
    <Link href={`/category/${categoryName}`}>
      <div
        className={`flex flex-col items-center cursor-pointer w-full group  transition-opacity hover:opacity-100 ${
          params.catName === categoryName ? "opacity-100" : "opacity-80"
        } `}
      >
        {children}
        <p className="text-[.85rem] font-medium mt-1">{categoryName}</p>
        <div
          className={`h-[2px] w-full  group-hover:bg-primary transition-colors ease-in rounded-full mt-2 ${
            params.catName === categoryName ? "bg-primary" : "bg-transparent"
          }  `}
        ></div>
      </div>
    </Link>
  );
};

export default NavCategory;
