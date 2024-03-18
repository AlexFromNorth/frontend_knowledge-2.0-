import React from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";
import AuthDetails from "./AuthDetails.tsx";
import { auth } from "../../request/firebase-config.js";

const Authwrapper = () => {
  console.log(auth);
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
};

export default Authwrapper;
