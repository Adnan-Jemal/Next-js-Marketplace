import SignupForm from "@/components/Auth/SignupForm";
import Link from "next/link";
import {ArrowLeft} from 'lucide-react'
const SignupPage = () => {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className=" flex flex-col relative items-center justify-center">
        <Link href={"/"}>
          <div className= " absolute top-[10%] left-8 flex items-center justify-center gap-5">
            <ArrowLeft  className="size-8"/>
            <h1 className="font-bold text-2xl  sm:text-3xl">Koralew</h1>
          </div>
        </Link>
        <SignupForm />
      </div>
      <div className="bg-blue-50 hidden lg:inline-grid">image</div>
    </div>
  );
};

export default SignupPage;
