import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserDocumentType } from "@/types";
import { User } from "firebase/auth";
import PhotoUpdateBtn from "./PhotoUpdateBtn";

type propType = {
  userData: UserDocumentType | null | undefined;
  user: User | null | undefined;
  userDataLoading: Boolean;
};

const ProfileProfile = ({ user, userData, userDataLoading }: propType) => {
  return (
    <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start  ">
      {user ? (
        <Avatar className="size-32">
          <AvatarImage src={user.photoURL!} />
          <AvatarFallback className="text-5xl ">
            {userData?.name!.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ) : (
        <Skeleton className="size-24 rounded-full" />
      )}
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="text-3xl flex items-center font-semibold gap-2 justify-center  md:justify-start truncate flex-wrap">
            <span className="font-light">Hey, </span>
           
            {userDataLoading ? (
              <Skeleton className="h-4  w-24 mt-1" />
            ) : userData ? (
              <h2 className="truncate">{userData.name}</h2>
            ) : (
              <Skeleton className="h-4 w-24 mt-1" />
            )}
          </div>
        </div>

        <PhotoUpdateBtn/>
      </div>
    </div>
  );
};

export default ProfileProfile;
