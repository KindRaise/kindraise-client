import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Period from '../../assets/period.png';
import Ads from '../../assets/ads.png';
import WaterSupply from '../../assets/water-supply.png';
import BackToSchool from '../../assets/back-to-school.png';
import './MoreCampaigns.css';  
import { SlArrowDown } from 'react-icons/sl';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const campaigns = [
    {
        id: 1,
        image: BackToSchool,
        title: 'Sponsor 5 Children in Nigeria Get Back to School',
        description: 'Hi, I’m Noor, and I started SchoolFund to provide education to children who...',
        donors: 71,
        raised: 100450,
        funded: 65
    },
    {
        id: 2,
        image: WaterSupply,
        title: 'Bring Clean Water to Rural Communities in Lagos',
        description: 'Greetings! I’m Lola Badmus, working with WaterNow to provide clean water in...',
        donors: 44,
        raised: 75400,
        funded: 80
    },
    {
        id: 3,
        image: Period,
        title: 'Menstrual Hygiene Support for Orphanages & Girls',
        description: 'PeriodPals is sponsoring menstrual kits for girls to keep them comfortable..',
        donors: 120,
        raised: 200000,
        funded: 90
    }
];

const MoreCampaigns = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/explore-campaigns'); 
    };

    const handleSignup = () => {
        navigate('/signup'); 
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <section className='more-campaigns'>
            <div className='more-campaigns-header' data-aos="fade-up">
                <h1>Discover Fundraising Campaigns</h1>
            </div>
            <div className='container'>
            <label htmlFor="fundraiser-type" className="bold-label">Fundraiser Type</label>
            <input type="text" id="fundraiser-type" className="search-box" placeholder="Search..." />
        </div>

        <div className='checkbox-group'>
            <label>
                <input type="checkbox" name="fundraiser-type" value="non-profit" />
                Non profit organization
            </label>
            <label>
                <input type="checkbox" name="fundraiser-type" value="individual" />
                Individual
            </label>
        </div>
            <div className='campaigns-container'>
                {campaigns.map((campaign) => (
                    <div className='campaign-card' key={campaign.id} data-aos="fade-up"> 
                        <img src={campaign.image} alt={campaign.title} className='campaign-image' />        
                        <div className='campaign-info'>
                            <h2 className='campaign-title'>{campaign.title}</h2>
                            <p className='campaign-description'>{campaign.description}</p>
                            <p className='campaign-donors'>{campaign.donors} Donors</p>
                            <progress className='campaign-progress' value={campaign.funded} max="100"></progress>
                            <div className='campaign-stats'>
                                <p className='campaign-raised'>₦{campaign.raised.toLocaleString()} raised</p>
                                <p className='campaign-funded'>{campaign.funded}% funded</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="explore-button-wrapper">
                <button onClick={handleClick} className="explore-campaigns-button">
                    <span>Show more</span> <SlArrowDown />
                </button>
            </div>
            <div className='ads-img'>
                <img src={Ads} alt="" />
                <div className='explore-text'>
                    <h1>Create your campaign</h1>
                    <p>
                    KindRaise is the best place to fundraise, whether
                    you are an individual, group, or organization.
                    </p>
                    <div className="more-button-container" data-aos="zoom-in">
                    <button onClick={handleSignup} className="more-button">
                        Start fundraising
                    </button>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default MoreCampaigns;
