import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { Divide } from "lucide-react";
import { toast } from "react-toastify";

interface User {
  email: string;
  password: string;
}
export function DialogCreate({
  open,
  setOpen,
  fetchUser,
}: // dataDelete,

Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  // dataDelete?: User;
  fetchUser: () => void;
}>) {
  const isOpen = open;
  console.log("<<<<check isOpen", isOpen);
  const setIsOpen = setOpen;

  const validate = z.object({
    email: z.string().email("nhập sai email rồi 3"),
    password: z.string().min(6, "bạn phải nhập ít nhất 6 ký tự"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(validate) });
  const onSubmit: SubmitHandler<User> = (data) => {
    console.log("<<<<<<alo alo", data);
    const fetchCreate = async () => {
      const res = await fetch("http://localhost:3000/api/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const req = await res.json();
      if (res.ok) {
        toast.success(req.message);
        fetchUser();
        setIsOpen(false);
      } else {
        toast.error(req.error);
      }
    };

    fetchCreate();
  };
  // const handleDelete = () => {
  //   const fetchDelete = async () => {
  //     const res = await fetch("http://localhost:3000/api/createuser", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: dataDelete?.email ?? "",
  //         password: dataDelete?.password ?? "",
  //       }),
  //     });
  //     console.log("1234545", res);
  //   };
  //   fetchDelete();
  //   setIsOpen(false);
  //   fetchUser();
  // };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Please enter the details below to create a new user account!!!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email:
            </Label>
            <Input id="name" className="col-span-3" {...register("email")} />
            {errors.email && (
              <div className="text-red-500 p-1 text-sm col-span-4 text-center">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password:
            </Label>
            <Input
              id="username"
              {...register("password")}
              className="col-span-3"
            />
            {errors.password && (
              <div className="text-red-700 p-1 text-sm col-span-4 text-center">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-500 text-sm"
            onClick={handleSubmit(onSubmit)}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
