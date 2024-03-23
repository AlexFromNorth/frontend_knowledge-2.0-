import React, { useState } from "react";
import SignUp from "./SignUp.tsx";
import SignIn from "./SignIn.tsx";

const FormAuth = () => {
  const [btnReg, setBtnRef] = useState(true);

  return (
    <div className="formAuth">
      {btnReg ? <SignIn /> : <SignUp />}
      <button
        onClick={() => {
          setBtnRef(!btnReg);
        }}
      >
        {btnReg ? "Авторизоваться" : "Зарегистрироваться"}
      </button>
    </div>
  );
};

export default FormAuth;
