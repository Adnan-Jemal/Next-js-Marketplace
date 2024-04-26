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
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
});
const RestPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const success = await sendPasswordResetEmail(values.email);
    if (success) {
      router.push("/login");
      toast("Password reset email sent");
    } else {
      form.setError("email", { message: 'account not found' });
    }
  }

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

          <Button disabled={sending} variant={"default"} type="submit">
            {sending ? (
              <span className="text-4xl animate-bounce">...</span>
            ) : (
              <span>Send Reset Email</span>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default RestPasswordForm;
