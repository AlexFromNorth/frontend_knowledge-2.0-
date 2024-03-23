import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../request/firebase-config.js";

import FormAuth from "../../components/auth/FormAuth.tsx";
import { currentUser, updateProfile } from "../../components/auth/methods.ts";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    updateProfile(auth, false, "Name123", "photoUrl", "about");
    currentUser(auth, setAuthUser);
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
