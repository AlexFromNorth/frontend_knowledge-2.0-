import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../request/firebase-config.js";
import SignIn from "./authPages/SignIn.tsx";
import SignUp from "./authPages/SignUp.tsx";
import FormAuth from "./authPages/FormAuth.tsx";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user, "auth");
      } else {
        setAuthUser(null);
        console.log("dont auth");
      }
    });

    // console.log(database);
  });
  useEffect(() => {
    // console.log(authUser);
  }, [authUser]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("success");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>{authUser.email}</p>
          <button
            onClick={() => {
              userSignOut();
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <FormAuth />
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
