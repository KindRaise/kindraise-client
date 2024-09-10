import React, { useEffect } from 'react';
import SecurityAssuredImg from '../../assets/security.png';
import './SecurityAssured.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecurityAssured = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="security-assured-container">
      <div className="security-message" data-aos="fade-up">
        <p>Your security is our priority. We go above and<br />beyond to stay compliant with regulatory standards.</p>
      </div>
      <div className="security-image-wrapper" data-aos="fade-left">
        <img src={SecurityAssuredImg} alt="Security Assured" />
      </div>
    </div>
  );
};

export default SecurityAssured;
