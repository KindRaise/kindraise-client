import React, { useState, useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="header-wrapper">
      <header className="header-content">
        <img
          src={logo}
          alt="Logo"
          className="header-logo"
          onClick={() => navigate('/')}
        />
        <nav className="header-nav">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('product')}
              >
                Campaigns
              </button>
              {dropdownOpen === 'product' && (
                <ul className="nav-dropdown-menu">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/product')}
                  >
                    Product Item 1
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-menu-item">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('about')}
              >
                About <GoChevronDown />
              </button>
              {dropdownOpen === 'pricing' && (
                <ul className="nav-dropdown-menu">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/pricing')}
                  >
                    Pricing Plan 1
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-menu-item">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('resources')}
              >
                Resources <GoChevronDown />
              </button>
              {dropdownOpen === 'resources' && (
                <ul className="nav-dropdown-menu">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/resources')}
                  >
                    Resources
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-auth">
          <button
            onClick={() => navigate('/login')}
            className="auth-button auth-login"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="auth-button auth-signup"
          >
            Signup
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
