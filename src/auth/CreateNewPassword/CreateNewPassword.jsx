import React, { useState } from "react";
import "./CreateNewPassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="form-container">
        <div className="form-card">
          <div className="form-content">
            <div className="form-header">
              <h2>Reset Your Password</h2>
              <p>Choose a new password below. For security reasons, you will be logged out of all devices.</p>
            </div>
            <div className="input-group">
              <label htmlFor="new-password">New Password</label>
              <div className="input-wrapper">
                <input 
                  type={showPassword ? "password" : "text"} 
                  id="new-password" 
                  className="input-field" 
                />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                </span>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <input 
                  type={showConfirmPassword ? "password" : "text"} 
                  id="confirm-password" 
                  className="input-field" 
                />
                <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                </span>
              </div>
            </div>
            <div className="password-requirements">
              <p>Your password must have:</p>
              <ul>
                <li>At least 12 characters</li>
                <li>1 uppercase letter</li>
                <li>1 lowercase letter</li>
                <li>1 number</li>
              </ul>
            </div>
            <button className="reset-button" onClick={() => navigate('/resetpassword')}>Reset Password</button>
          </div>
        </div>
        <footer className="footer">
          ©2024 KindRaise, Inc. All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default CreateNewPassword;
