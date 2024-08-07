import React, { useState, useEffect } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.svg";
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const mobileView = window.innerWidth <= 768;
    setIsMobile(mobileView);
    if (!mobileView) {
      setIsOpen(false); // Close the menu on desktop view
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? (
        <div className="header-mobile">
          <CiSearch />
          <img src={logo} alt="logo" className="header-logo" onClick={() => navigate('/')} />
          <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          aria-label="Toggle navigation"
        />
          {isOpen && (
            <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <a onClick={() => navigate('/explore-campaigns')}>Campaigns</a>
              <a onClick={() => navigate('/about-us')}>About</a>
              <a onClick={() => navigate('/login')}>Login</a>
              <a className="signup-button" onClick={() => navigate('/signup')}>Sign Up</a>
            </nav>
          )}
        </div>
      ) : (
        <div className="header header-desktop">
          <div className="header-left">
            <a onClick={() => navigate('/explore-campaigns')}>Campaigns</a>
            <a onClick={() => navigate('/search')} className='search-header-mobile'>
            <CiSearch />
            <span>Search</span>
          </a>
          </div>
          <div className="header-center">
            <img src={logo} alt="logo" className="header-logo" onClick={() => navigate('/')} />
          </div>
          <div className="header-right">
            <a onClick={() => navigate('/about-us')}>About</a>
            <a onClick={() => navigate('/login')}>Login</a>
            <a className="signup-button" onClick={() => navigate('/signup')}>Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
