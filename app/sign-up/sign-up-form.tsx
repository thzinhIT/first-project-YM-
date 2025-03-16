// import React from "react";

// const Signup = () => {
//   return <div> Signup</div>;
// };

// export default Signup;
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
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // const dataEmail = "thanhvinh@gmail.com";
    // const dataPassword = "123456";

    // if (email === dataEmail && password === dataPassword) {
    //   router.push("/");
    // } else {
    //   alert("Email or password is incorrect");
    //   setEmail("");
    //   setPassword("");
    // }

    // gọi Post API SIgn-up

    try {
      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log("<<< check data đây", data);
      if (res.ok) {
        toast.success("Đăng ký thành công!");

        router.push("/login");
      } else {
        toast.error(data.error || "Đăng ký thất bại");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("submitted", email, password);
  };
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
