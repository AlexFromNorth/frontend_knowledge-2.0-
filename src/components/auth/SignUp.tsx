import { signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import { auth, database } from "../../request/firebase-config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        //   console.log(user)
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // console.log(error)
        setError("Sorry, couldn`t find your account");
      });
  }

  return (
    <div>
      <form action="" onSubmit={(e) => logIn(e)}>
        <h2>Login to an account</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignUp;
