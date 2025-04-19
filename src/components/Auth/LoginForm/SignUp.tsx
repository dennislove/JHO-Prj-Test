import React, { useState } from "react";
import "./LoginForm.scss";
import { toast } from "react-toastify";

import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";

interface LoginFormProps {
  onFlip: () => void;
}
const SignUp: React.FC<LoginFormProps> = ({ onFlip }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const notify = () => toast.success("Sign up successful");

  const correctAuth = {
    email: "dennistran@gmail.com",
    password: "Abc@777999",
    confirmPassword: "Abc@777999",
  };
  const handleLogin = () => {
    if (!email || !password || !confirmPassword) {
      setError("Email and pasword cannot be left blank");
      return;
    }
    if (confirmPassword !== password) {
      setError("Passwords do not match");
      return;
    }
    if (
      email === correctAuth.email &&
      password === correctAuth.password &&
      confirmPassword === correctAuth.confirmPassword
    ) {
      notify();

      setError("");
      // Redirect or further logic here
    } else {
      setError("Your email or password do not match");
    }
  };
  return (
    <div className="loginBox">
      <img src="/images/ogma.png" alt="ogma" className="logoImage" />
      <div className="wrapTitle">
        <h2>Inscription</h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="wrapInput">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="button_text input"
        />
        <div className="passwordWrapper">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="button_text input"
          />
          <span
            className="eyeIcon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="passwordWrapper confirmPassword">
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="button_text input"
          />
          <span
            className="eyeIcon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="sub_desc warrningText">{error}</p>}
      </div>

      <button className="button_solid button_text" onClick={handleLogin}>
        Inscription
      </button>

      <div className="orLine">
        <div className="lineInOr"></div>
        <span className="button_text">Or</span>
        <div className="lineInOr"></div>
      </div>

      <div className="wrapBtn">
        <button className="googleBtn">
          <span>
            <FaGoogle />
          </span>{" "}
          Continue with Google
        </button>
        <button className="facebookBtn">
          <span>
            <FaFacebook />
          </span>{" "}
          Continue with Facebook
        </button>
      </div>
      <div className="signup desc">
        Have an account? <a onClick={onFlip}>Connexion</a>
      </div>
    </div>
  );
};

export default SignUp;
