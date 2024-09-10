import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

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
          data-aos="fade-right"
        />
        <nav className="header-nav">
          <ul className="nav-menu">
            <li className="nav-menu-item" data-aos="fade-right">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('product')}
              >
                Product <GoChevronDown />
              </button>
              {dropdownOpen === 'product' && (
                <ul className="nav-dropdown-menu" data-aos="fade-right">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/product1')}
                  >
                    Product 1
                  </li>
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/product2')}
                  >
                    Product 2
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-menu-item" data-aos="fade-right">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('pricing')}
              >
                Pricing <GoChevronDown />
              </button>
              {dropdownOpen === 'pricing' && (
                <ul className="nav-dropdown-menu" data-aos="fade-right">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/pricing')}
                  >
                    Pricing Plan 1
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-menu-item" data-aos="fade-right">
              <button
                className="nav-dropdown-toggle"
                onClick={() => toggleDropdown('resources')}
              >
                Resources <GoChevronDown />
              </button>
              {dropdownOpen === 'resources' && (
                <ul className="nav-dropdown-menu" data-aos="fade-right">
                  <li
                    className="nav-dropdown-item"
                    onClick={() => navigate('/resources')}
                  >
                    Blog
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-menu-item" data-aos="fade-right">
              <button
                className="nav-link"
                onClick={() => navigate('/donation')}
              >
                Donation
              </button>
            </li>
          </ul>
        </nav>
        <div className="header-auth">
          <button
            onClick={() => navigate('/login')}
            className="auth-button auth-login"
            data-aos="fade-right"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="auth-button auth-signup"
            data-aos="fade-right"
          >
            Signup
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
