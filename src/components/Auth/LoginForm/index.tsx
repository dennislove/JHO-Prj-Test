import React, { useState } from "react";
import "./LoginForm.scss";
import LoginForm from "./LoginForm";
import Signup from "./SignUp";
import { ToastContainer } from "react-toastify";
const AuthForm: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="loginWrapper">
      <ToastContainer />

      <div className="authContainer">
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <div className="front">
            <LoginForm onFlip={() => setFlipped(true)} />
          </div>
          <div className="back">
            <Signup onFlip={() => setFlipped(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
