"use client";

import { useParams, useRouter } from "next/navigation";


type propTypes = {
  categoryName: String;
  categoryLink: String;
  categoryIcon?: React.ReactNode;
};
const NavCategory = ({ categoryName, categoryIcon, categoryLink }: propTypes) => {
  //used to check if the current tap is selected
  const params = useParams<{ tag: string; catName: string }>();
  const router = useRouter()

  return (

      <button
        className={`flex flex-col items-center cursor-pointer w-full group  transition-opacity hover:opacity-100 ${
          params.catName === categoryName ? "opacity-100" : "opacity-80"
        } `}
        onClick={()=>router.push(`/category${categoryLink}`)}
      >
        {categoryIcon}
        <p className="text-[.85rem] font-medium mt-1">{categoryName}</p>
        <div
          className={`h-[2px] w-full  group-hover:bg-primary transition-colors ease-in rounded-full mt-2 ${
            params.catName === categoryName.toLocaleLowerCase() ? "bg-primary" : "bg-transparent"
          }  `}
        ></div>
      </button>
    
  );
};

export default NavCategory;
