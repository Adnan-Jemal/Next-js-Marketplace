"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { auth, db } from "@/firebase";
import { doc } from "firebase/firestore";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

import { useSignOut } from "react-firebase-hooks/auth";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const SidebarProfile = () => {
  const [signOut] = useSignOut(auth);
  const [user, loading] = useAuthState(auth);
  const [userData, userDataLoading, userDataError] = useDocumentData(
    user ? doc(db, "users", user.uid) : null
  );

  return (
    <div className="mb-6  w-[90%] mx-auto flex flex-col gap-5 justify-end">
      <div className="flex  gap-2 px-3 py-4 shadow-sm  rounded-xl  border-secondary border-2">
        {user ? (
          <Avatar className="size-12">
            <AvatarImage src={user.photoURL!} />
            <AvatarFallback className="text-xl">
              {userData?.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Skeleton className="size-12 rounded-full" />
        )}
        <div className="grow overflow-hidden">
          <h2 className="text-lg font-semibold truncate">
            {userDataLoading ? (
              <Skeleton className="h-4 w-24 mt-1" />
            ) : userData ? (
              userData.name
            ) : (
              <Skeleton className="h-4 w-24 mt-1" />
            )}
          </h2>
          {userData ? (
            <p className="text-muted-foreground text-sm truncate">
              {user?.email}
            </p>
          ) : (
            <Skeleton className="h-4 w-30 mt-2" />
          )}
        </div>
      </div>
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
    </div>
  );
};

export default SidebarProfile;
