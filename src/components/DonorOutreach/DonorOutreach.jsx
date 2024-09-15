import React, { useEffect } from 'react';
import Outreach from "../../assets/donor-outreach.png";
import './DonorOutreach.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorOutreach = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="donor-outreach">
      <div className="donor-outreach-wrapper">
        <div className="donor-outreach-image" data-aos="fade-right">
          <img src={Outreach} alt="Donor Outreach" className="donor-outreach-img" />
        </div>

        <div className="donor-outreach-text" data-aos="fade-left">
          <h1>Donor <span>Outreach</span></h1>
          <p>
            Stay engaged. Share your message. Our Outreach Tools can help you build relationships and keep donors connected to your cause.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonorOutreach;
