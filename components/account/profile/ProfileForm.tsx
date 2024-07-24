"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { auth, db } from "@/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-dropdown-menu";
import { collection, doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .optional(),
  name: z.string().min(3, {
    message: "Enter name correctly",
  }),
  phoneNumber: z.string().optional(),

  address: z.string().optional(),
});

const ProfileForm = () => {
  const [user] = useAuthState(auth);
  const [userData] = useDocumentData(user ? doc(db, "users", user.uid) : null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      address: "",
      phoneNumber: "",
    },
  });
  //for default value
  useEffect(() => {
    if (userData) {
      form.setValue("email", userData.email || "");
      form.setValue("name", userData.name || "");
      form.setValue("address", userData.address || "");
      form.setValue("phoneNumber", userData.phoneNumber || "");
    }
  }, [userData, form.setValue]);
  //states for button  disabling and loading
  const [isUpdating, setIsUpdating] = useState(false);
  const [Updated, setUpdated] = useState(false);

  //function to add data to db on submit
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUpdating(true);

    await setDoc(doc(collection(db, "users"), user?.uid), {
      ...userData,
      email: user?.email,
      name: values.name,
      address: values.address,
      phoneNumber: values.phoneNumber,
    })
      .then(() => setIsUpdating(false))
      .then(() => toast("Information Updated"))
      .then(() => setUpdated(false))
      .catch((err) => console.log(err));
  }
  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-6 md:gap-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div>
                  <Label className="">Full Name</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        className="py-7 mt-3 shadow-sm"
                        placeholder="Full Name ..."
                        defaultValue={userData?.name || ""}
                        onFocus={() => setUpdated(true)}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="">
                  <Label className="">Email</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        className="py-7 mt-3 disabled:bg-secondary shadow-sm"
                        placeholder="Email ..."
                        disabled={true}
                        defaultValue={user?.email || ""}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <div>
                  <Label className="">Phone Number</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        onFocus={() => setUpdated(true)}
                        className="py-7 mt-3 shadow-sm"
                        placeholder="Phone Number ..."
                        defaultValue={userData?.phoneNumber || ""}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <div className="">
                  <Label className="">Address</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        onFocus={() => setUpdated(true)}
                        className="py-7 mt-3 shadow-sm"
                        placeholder="Address ..."
                        defaultValue={userData?.address || ""}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
          </div>
          <div className="  flex justify-center">
            <Button
              disabled={isUpdating || !Updated}
              variant={"default"}
              className="w-[30%] mt-5"
              type="submit"
            >
              {isUpdating ? (
                <span className="text-4xl animate-bounce">...</span>
              ) : (
                <span>Update</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
