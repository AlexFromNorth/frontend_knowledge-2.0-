import React, { useState } from "react";
import { auth, database } from "../../request/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");

  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();
    if (password != copyPassword) {
      setError("Passwords didn`t match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user, "created user");
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form action="" onSubmit={(e) => register(e)}>
        <h2>Create an account</h2>
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
        <input
          type="password"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button>Create</button>
      </form>
    </div>
  );
};

export default SignIn;
