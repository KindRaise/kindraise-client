import React, { useEffect } from 'react';
import ScanToDonate from "../../assets/scan-to-donate.png";
import './DonorEngagement.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorEngagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    }); 
  }, []);

  return (
    <section className="donor-engagement">
      <div className="donor-engagement-wrapper">
        <div className="donor-engagement-text" data-aos="fade-up">
          <h1>Donor <span>Engagement</span></h1>
          <p>
            Increase donor interaction with <br /> custom QR codes for every <br /> KindRaise campaign.
          </p>
        </div>

        <div className="donor-engagement-image" data-aos="fade-left">
          <img src={ScanToDonate} alt="Scan to Donate" className="donor-engagement-img" />
        </div>
      </div>
    </section>
  );
};

export default DonorEngagement;
