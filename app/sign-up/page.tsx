import React from "react";

import ModeToggle from "../../app/test/page";
import Signup from "./sign-up";
const pageLogin = () => {
  return (
    <div className=" overflow-clip">
      <Signup />

      <ModeToggle />
    </div>
  );
};

export default pageLogin;
