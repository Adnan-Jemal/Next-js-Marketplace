import React from "react";
import { Button } from "../ui/button";

const GoogleLogin = () => {
  return (
    <div className="w-[50%] flex flex-col gap-4">
      <Button variant={"secondary"} size={'lg'} className="w-full">
        Continue With Google
      </Button>
      <div className="flex items-center justify-center gap-4">
        <span className="h-[2px] w-[40%] bg-secondary"></span>
        <p className="text-xs">OR</p>
        <span className="h-[2px] w-[40%] bg-secondary"></span>
      </div>
    </div>
  );
};

export default GoogleLogin;
