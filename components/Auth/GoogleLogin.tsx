"use client";
import { Button } from "../ui/button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();

  const signIn = async () => {
    await signInWithGoogle();
  };
  useEffect(() => {
    {
      if (error) {
        toast('Something went wrong')
      } else if (user) {
        router.push("/");
      }
    }
  }, [loading]);

  return (
    <div className="w-[50%] flex flex-col gap-4">
      <Button
        disabled={loading}
        onClick={signIn}
        variant={"secondary"}
        size={"lg"}
        className={`w-full ${loading && "animate-pulse"}`}
      >
        {loading ? (
          <span className="text-4xl text-primary animate-bounce">...</span>
        ) : (
          <span>Continue With Google</span>
        )}
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
