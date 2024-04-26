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
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Invalid Password",
    })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
      message: "Invalid Password",
    }),
});

const LoginForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signInWithEmailAndPassword(values.email, values.password);
  }
  const clearErrors = () => {
    form.clearErrors("email");
    form.clearErrors("password");
    form.clearErrors("root");
  };
  useEffect(() => {
    {
      if (error) {
        form.setError("password", {
          message: "Invalid Password",
        });
        form.setError("email", {
          message: "Invalid Email",
        });
      } else if (user) {
        clearErrors();
        router.push("/");
      }
    }
  }, [loading]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[60%] lg:w-[50%] flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <Label className="">Email</Label>
                <FormItem>
                  <FormControl>
                    <Input
                      onFocus={clearErrors}
                      placeholder="Email ..."
                      {...field}
                    />
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
                    <Input
                      onFocus={clearErrors}
                      placeholder="password ..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button disabled={loading} variant={"default"} type="submit">
            {loading ? (
              <span className="text-4xl animate-bounce">...</span>
            ) : (
              <span>Log In</span>
            )}
          </Button>
          <Link className="self-center" href={"/reset-password"}>
           
            <Button variant={"link"}>Forgot Password?</Button>
          </Link>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
