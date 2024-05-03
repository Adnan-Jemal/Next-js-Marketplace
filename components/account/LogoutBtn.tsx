"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import { LogOut } from "lucide-react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const LogoutBtn = () => {
  const [signOut] = useSignOut(auth);
  return (
    <Link className="justify-center" href="/">
      <Button
        onClick={signOut}
        variant={"ghost"}
        className="hover:text-red-500 gap-2"
      >
        <LogOut className="text-sm" />
        Log Out
      </Button>
    </Link>
  );
};

export default LogoutBtn;
