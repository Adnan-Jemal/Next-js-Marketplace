"use client";
import GoogleLogin from "@/components/auth/GoogleLogin";
import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [loading]);
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className=" relative flex flex-col gap-6 items-center justify-center">
        <Link href={"/"}>
          <div className=" absolute top-[8%]  md:top-[10%] left-8 flex items-center justify-center gap-5">
            <ArrowLeft className="size-8" />
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </div>
        </Link>
        <h2 className="text-2xl mb-6">Login to Continue</h2>
        <GoogleLogin />

        <LoginForm />
        <div className="">
          <span className="text-sm">Don't have an account?</span>
          <Link href={"/signup"}>
            <Button variant={"link"}>Sign Up</Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:inline-grid">
        <img className="h-full object-cover" src="/bmesh.png" />
      </div>
    </div>
  );
};

export default LoginPage;
