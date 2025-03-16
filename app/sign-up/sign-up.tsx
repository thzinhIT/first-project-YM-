import SignUpForm from "../../app/sign-up/sign-up-form";

export default function Signup() {
  return (
    <div className="flex min-h-svh h-[100vh]  items-center justify-center p-6 md:p-10  ">
      <div className=" flex items-center justify-center max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
