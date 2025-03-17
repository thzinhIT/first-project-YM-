"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignUp {
  email: string;
  password: string;
}
export default function SignUpForm({
  className,
  ...props
}: Readonly<React.ComponentPropsWithoutRef<"div">>) {
  const router = useRouter();

  const validate = z.object({
    email: z.string().email("nhập sai email kìa r a 2!!!!"),
    password: z.string().min(6, "min là 6 ký tự để nhắc mãi!!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({ resolver: zodResolver(validate) });

  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    const res = await fetch("http://localhost:3000/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    const req = await res.json();
    if (res.ok) {
      toast.success("Đăng ký thành công!");

      router.push("/login");
    } else {
      toast.error(req.error || "Đăng ký thất bại");
    }
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   // gọi Post API SIgn-up

  //   try {
  //     const res = await fetch("/api/sign-up", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const data = await res.json();
  //     console.log("<<< check data đây", data);
  //     if (res.ok) {
  //       toast.success("Đăng ký thành công!");

  //       router.push("/login");
  //     } else {
  //       toast.error(data.error || "Đăng ký thất bại");
  //       setEmail("");
  //       setPassword("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log("submitted", email, password);
  // };
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign-up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-red-500 rounded-lg p-1 duration-700 text-sm">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-red-500 rounded-lg p-1 duration-700 text-sm">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign-up
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
