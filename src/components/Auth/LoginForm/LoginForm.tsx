import React, { useState } from "react";
import "./LoginForm.scss";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Auth, AuthProvider, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../../App";
interface LoginFormProps {
  onFlip: () => void;
  auth: Auth;
  provider: AuthProvider;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFlip }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const correctAuth = {
    email: "dennistran@gmail.com",
    password: "Abc@777999",
  };
  const [, setUser] = useState<User | null>(null);
  const [, setIsAdmin] = useState<boolean>(false);

  const handleLoginGoogle = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;

      setUser(user);

      // List of admin emails
      const adminEmails: string[] = [
        "tranvantinh0923coze@gmail.com",
        "recruitment@jhotech.co",
      ];

      if (user.email && adminEmails.includes(user.email)) {
        setIsAdmin(true);
        navigate("/contacts");
      } else {
        setIsAdmin(false);
        navigate("/");
      }
    } catch (error: unknown) {
      console.error("Login failed:", error);
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and pasword cannot be left blank");
      return;
    }
    if (email === correctAuth.email && password === correctAuth.password) {
      localStorage.setItem("token", "loggedin");
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/contacts");
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
        <h2>Connexion</h2>
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

        {error && <p className="sub_desc warrningText">{error}</p>}
      </div>

      <div className="forgot">
        <a href="#">Mot de passe oublié?</a>
      </div>

      <button className="button_solid button_text" onClick={handleLogin}>
        Connexion
      </button>

      <div className="orLine">
        <div className="lineInOr"></div>
        <span className="button_text">Or</span>
        <div className="lineInOr"></div>
      </div>

      <div className="wrapBtn">
        <button className="googleBtn" onClick={handleLoginGoogle}>
          <span>
            <FaGoogle />
          </span>
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
        Not a member?{" "}
        <a onClick={onFlip} className="">
          Inscription
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
