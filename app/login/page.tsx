import React from "react";
import Login from "@/src/login/login";
import ModeToggle from "../../app/test/page";

const pageLogin = () => {
  return (
    <div className=" overflow-clip">
      <Login />
      {/* <SignUpForm /> */}
      <ModeToggle />
    </div>
  );
};

export default pageLogin;
