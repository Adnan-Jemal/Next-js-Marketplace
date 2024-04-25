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
  return (
    <div className="max-w-7xl mx-auto flex items-center mt-4 gap-7 px-4 justify-evenly overflow-x-scroll scrollbar-hide">
      <NavCategory categoryName="Electronics">
        <MonitorSmartphone />
      </NavCategory>
      <NavCategory categoryName="Fashion">
        <Shirt />
      </NavCategory>
      <NavCategory categoryName="Vehicles">
        <CarFront />
      </NavCategory>
      <NavCategory categoryName="Sports">
        <Dumbbell />
      </NavCategory>
      <NavCategory categoryName="Baby">
        <Baby />
      </NavCategory>
      <NavCategory categoryName="Home">
        <HomeIcon />
      </NavCategory>

      <NavCategory categoryName="Books">
        <LucideBookOpenText />
      </NavCategory>
      <NavCategory categoryName="Health">
        <HeartPulse />
      </NavCategory>
      <NavCategory categoryName="Tools">
        <Drill />
      </NavCategory>
      <NavCategory categoryName="Office">
        <Briefcase />
      </NavCategory>
      <NavCategory categoryName="Music">
        <Music4 />
      </NavCategory>
      <NavCategory categoryName="Others">
        <MoreHorizontal />
      </NavCategory>
    </div>
  );
};

export default NavCategories;
