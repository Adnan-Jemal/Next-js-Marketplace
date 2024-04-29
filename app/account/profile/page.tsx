"use client";
import DeleteAccount from "@/components/account/profile/DeleteAccount";
import ProfileForm from "@/components/account/profile/ProfileForm";
import ProfileProfile from "@/components/account/profile/Profileprofile";
import SkeletonProfileForm from "@/components/account/profile/SkeletonProfileForm";
import { Button } from "@/components/ui/button";

import { auth, db } from "@/firebase";

import { doc } from "firebase/firestore";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

const ProfilePage = () => {
  const [signOut] = useSignOut(auth);
  const [user, loading] = useAuthState(auth);
  const [userData, userDataLoading, userDataError] = useDocumentData(
    user ? doc(db, "users", user.uid) : null
  );
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-14  my-10">
      <ProfileProfile
        user={user}
        userData={userData}
        userDataLoading={userDataLoading}
      />
      {userData ? (
        <ProfileForm user={user} userData={userData} />
      ) : (
        <SkeletonProfileForm />
      )}
      <DeleteAccount />
    </div>
  );
};

export default ProfilePage;
