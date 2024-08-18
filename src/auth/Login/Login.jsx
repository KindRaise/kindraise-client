import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import Loading from '../../components/Loading/Loading';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setIsLoading(true);

    const url = "https://kindraise.onrender.com/api/v1/login";
    const data = { email, password };

    axios.post(url, data)
      .then((res) => {
        console.log(res);
        toast.success("Login successful");
        navigate('/dashboard'); // Navigate to dashboard
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="loginBody">
      <Toaster /> {/* To display toast notifications */}
      <div className="logoSec">
        <img src={logo} alt="KindRaise Logo" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Welcome Back, Change-Maker!</h2>
              <p>Log in to continue your journey of making a difference</p>
            </div>
            <div className="inputHolder">
              Email Address
              <input
                type="text"
                className="loginUpInput inp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                <input
                  type={show ? "password" : "text"}
                  className="pass inp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() => setShow(!show)}>
                  {show ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                </span>
              </div>
            </div>
            <div className="forgetPassword" onClick={() => navigate("/resetpassword")}>
              Forget Password?
            </div>
            <button className="loginBtn" onClick={handleClick} disabled={isLoading}>
              {isLoading ? <Loading /> : "Sign in"}
            </button>
            <div className="sighUpCreateAcc">
              Don't have a KindRaise account? <span onClick={() => navigate("/signup")}>Create one</span>
            </div>
          </div>
        </div>
        <div className="rights">©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  );
};

export default Login;
