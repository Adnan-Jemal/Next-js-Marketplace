"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(4, {
    message: "password too short",
  }),
});

const SignupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()
useEffect(() => {
  if(user){
    if (user) {
      router.push("/");
    }
  
  }

}, [loading])

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[60%] lg:w-[50%]  flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <Label className="">Email</Label>
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <Label className="">Password</Label>
                <FormItem>
                  <FormControl>
                    <Input placeholder="password ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button variant={"default"} type="submit">
            Sign UP
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
