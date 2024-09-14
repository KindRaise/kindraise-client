import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import Loading from '../../components/Loading/Loading';

const Login = () => {
  const Nav = useNavigate();

  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      Nav('/dashboard'); 
      setIsLoading(false);
    }, 1000); 
  };
  
  return (
    <div className="loginBody">
      <div className="logoSec">
        <img src={logo} alt="" />
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
              <input type="text" className="loginUpInput inp" />
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                <input type={show ? 'password' : 'text'} className="pass inp" />
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="forgetPassword" onClick={() => Nav("/resetpassword")}>Forget Password?</div>
            <button className="loginBtn" onClick={handleClick} disabled={isLoading}>
            {isLoading ? <Loading /> : 'Sign in'}
          </button>
            <div className="sighUpCreateAcc">
              Don't have a kindRaise account? <span onClick={()=>Nav(-1)}>Create one</span>
            </div>
          </div>
        </div>
        <div className="rights">©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  );
};

export default Login;
