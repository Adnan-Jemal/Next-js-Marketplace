"use client";
import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GoogleLogin from "@/components/auth/GoogleLogin";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { auth } from "@/firebase";

const SignupPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [loading]);
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className=" flex flex-col relative gap-6  items-center justify-center">
        <Link href={"/"}>
          <div className=" absolute top-[8%]  md:top-[10%] left-8 flex items-center justify-center gap-5">
            <ArrowLeft className="size-8" />
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </div>
        </Link>
        <h2 className="text-2xl mb-6"> Let's Get Started</h2>
        <GoogleLogin />

        <SignupForm />
        <div className="">
          <span className="text-sm">Already have an account? </span>
          <Link href={"/login"}>
            <Button variant={"link"}>Log in</Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:inline-grid ">
        <img className="h-full object-cover " src="/bmesh.png" />
      </div>
    </div>
  );
};

export default SignupPage;
