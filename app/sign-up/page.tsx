import React from "react";
import Login from "@/src/login/login";
import ModeToggle from "../../app/test/page";
import Signup from "./sign-up";
const pageLogin = () => {
  return (
    <div className=" overflow-clip">
      <Signup />
      {/* <SignUpForm /> */}
      <ModeToggle />
    </div>
  );
};

export default pageLogin;
