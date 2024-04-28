"use client";
import {
  Heart,
  LayoutDashboard,
  MessagesSquare,
  Package,
  Settings,
  UserCog,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const SidebarMenus = () => {
  const menuItems = [
    {
      link: "/account/dashboard",
      icon: <LayoutDashboard className="mr-2 size-6" />,
      text: "Dashboard",
    },
    {
      link: "/account/profile",
      icon: <UserCog className="mr-2 size-6" />,
      text: "Profile",
    },
    {
      link: "/account/my-items",
      icon: <Package className="mr-2 size-6" />,
      text: "My Items",
    },
    {
      link: "/account/favorites",
      icon: <Heart className="mr-2 size-6" />,
      text: "Favorites",
    },
    {
      link: "/account/messages",
      icon: <MessagesSquare className="mr-2 size-6" />,
      text: "Messages",
    },
    {
      link: "/account/settings",
      icon: <Settings className="mr-2 size-6" />,
      text: "Settings",
    },
  ];
  const [currentPath, setCurrentPath] = useState("account/dashboard");
  useEffect(() => {
    setCurrentPath(
      typeof window !== "undefined" ? window.location.pathname : ""
    );
  }, []);

  return (
    <>
      {menuItems.map((item) => (
        <Link onClick={() => setCurrentPath(item.link)} href={item.link}>
          <Button
            onClick={() => setCurrentPath(item.link)}
            variant={"outline"}
            size={"lg"}
            className={`flex items-center justify-start w-full text-md border-none transition-colors select-none ${
              currentPath === item.link && "bg-secondary"
            }`}
          >
            {item.icon} {item.text}
          </Button>
        </Link>
      ))}
      {/* <Link href={"/account/dashboard"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <LayoutDashboard className="mr-2 size-6" /> Dashboard
            </Button>
          </Link>
          <Link href={"/account/profile"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <UserCog className="mr-2 size-6" /> Profile Settings
            </Button>
          </Link>
          <Link href={"/account/my-items"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <Package className="mr-2 size-6" /> My Items
            </Button>
          </Link>
          <Link href={"/account/favorites"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <Heart className="mr-2 size-6" /> Favorites
            </Button>
          </Link>
          <Link href={"/account/messages"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <MessagesSquare className="mr-2 size-6" /> Messages
            </Button>
          </Link>
          <Link href={"/account/settings"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center justify-start w-full text-md border-none"
            >
              <Settings className="mr-2 size-6" /> Settings
            </Button>
          </Link> */}
    </>
  );
};

export default SidebarMenus;
