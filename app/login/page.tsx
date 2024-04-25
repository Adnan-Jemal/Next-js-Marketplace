import GoogleLogin from "@/components/Auth/GoogleLogin";
import LoginForm from "@/components/Auth/LoginForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className=" relative flex flex-col gap-6 items-center justify-center">
      <Link href={"/"}>
          <div className= " absolute top-[10%] left-8 flex items-center justify-center gap-5">
            <ArrowLeft  className="size-8"/>
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </div>
        </Link>
        <h2 className="text-2xl mb-6">Login to Continue</h2>
        <GoogleLogin/>
        
        <LoginForm />
      </div>
      <div className="bg-blue-50 hidden lg:inline-grid">image</div>
    </div>
  );
};

export default LoginPage;
