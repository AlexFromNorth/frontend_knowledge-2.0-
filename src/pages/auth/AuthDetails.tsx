import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../request/firebase-config.js";

import FormAuth from "../../components/auth/FormAuth.tsx";
import { currentUser, updateProfile } from "../../components/auth/methods.ts";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../redux/authSlice.ts";
import { RootState } from "../../redux/store.ts";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state.auth);
  // console.log(count);

  useEffect(() => {
    updateProfile(auth, true, "Name123", "photoUrl", "about");
    currentUser(auth, setAuthUser);

    // console.log(count);
  });
  useEffect(() => {
    dispatch(getAuth(authUser));
    // console.log(authUser);
    // console.log(count);
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
