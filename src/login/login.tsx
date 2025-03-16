import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="flex min-h-svh h-[100vh]  items-center justify-center p-6 md:p-10  ">
      <div className=" flex items-center justify-center max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
