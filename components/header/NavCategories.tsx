import React from "react";
import NavCategory from "./NavCategory";
import {
  HomeIcon,
  MoreHorizontal,
  Music4,
  Briefcase,
  Drill,
  HeartPulse,
  LucideBookOpenText,
  CarFront,
  Dumbbell,
  Baby,
  Shirt,
  MonitorSmartphone,
} from "lucide-react";

const NavCategories = () => {
  const categories = [
    {
      name: "Electronics",
      link: "/electronics",
      icon: <MonitorSmartphone />,
    },
    {
      name: "Fashion",
      link: "/fashion",
      icon: <Shirt />,
    },
    {
      name: "Vehicles",
      link: "/vehicles",
      icon: <CarFront />,
    },
    {
      name: "Sports",
      link: "/sports",
      icon: <Dumbbell />,
    },
    {
      name: "Baby",
      link: "/baby",
      icon: <Baby />,
    },
    {
      name: "Home",
      link: "/home",
      icon: <HomeIcon />,
    },
    {
      name: "Books",
      link: "/books",
      icon: <LucideBookOpenText />,
    },
    {
      name: "Health",
      link: "/health",
      icon: <HeartPulse />,
    },
    {
      name: "Tools",
      link: "/tools",
      icon: <Drill />,
    },
    {
      name: "Office",
      link: "/office",
      icon: <Briefcase />,
    },
    {
      name: "Music",
      link: "/music",
      icon: <Music4 />,
    },
    {
      name: "Others",
      link: "/others",
      icon: <MoreHorizontal />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto flex items-center mt-4 gap-7 px-4 justify-evenly overflow-x-scroll scrollbar-hide">
      {categories.map((cat) => (
        <NavCategory categoryLink={cat.link} categoryName={cat.name} categoryIcon={cat.icon}/>
          
        
      ))}
    </div>
  );
};

export default NavCategories;
