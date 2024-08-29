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

const Mcampaigns = [
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
    },
    {
        id: 4,
        image: 'https://www.gavi.org/sites/default/files/news/2023/RS40523_Gavi_COVID-19_Vaccination__Ghana_Nipah-Dennis_59_h2.jpg',
        title: 'Provide Life-Saving Health Care to Rural Communities',
        description: 'Hi, I’m Ahmed, and I’m partnering with Health4All to deliver essential medical services to underserved areas...',
        donors: 85,
        raised: 130000,
        funded: 70
    },
    {
        id: 5,
        image: 'https://th.bing.com/th/id/OIP.Qh5Nl2QsVTMtW1cJTrKR9wHaDk?rs=1&pid=ImgDetMain',
        title: 'Empower Youth Through Skill Development Workshops',
        description: 'We are organizing workshops to equip young Nigerians with essential skills for the job market. Help us provide training and resources...',
        donors: 102,
        raised: 140000,
        funded: 85
    },
    {
        id: 6,
        image: 'https://th.bing.com/th/id/OIP.iIK1Tg9-TioXv_Zl2HwZLwHaD8?rs=1&pid=ImgDetMain',
        title: 'Emergency Food Relief for Displaced Families',
        description: 'Greetings from CharityFirst! We’re raising funds to deliver emergency food packages to families affected by recent crises...',
        donors: 150,
        raised: 250000,
        funded: 85
    }
];

const MoreCampaigns = () => {
    const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 campaigns
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        AOS.init({
            duration: 2000,
        });
    }, []);

    const handleClick = () => {
        setVisibleCount(prevCount => {
            // Show 3 more campaigns, but limit it to the length of Mcampaigns
            const newCount = prevCount + 3;
            return newCount > Mcampaigns.length ? Mcampaigns.length : newCount;
        });
    };

    const handleSignup = () => {
        navigate('/signup'); 
    };

    return (
        <section className='more-campaigns'>
            <div className='more-campaigns-header'>
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
            <div className='Mcampaigns-container'>
                {Mcampaigns.slice(0, visibleCount).map((Mcampaign) => (
                    <div className='Mcampaigns-card' key={Mcampaign.id} data-aos="fade-up"> 
                        <img src={Mcampaign.image} alt={Mcampaign.title} className='campaign-image' />        
                        <div className='Mcampaigns-info'>
                            <h2 className='Mcampaigns-title'>{Mcampaign.title}</h2>
                            <p className='Mcampaigns-description'>{Mcampaign.description}</p>
                            <p className='Mcampaigns-donors'>{Mcampaign.donors} Donors</p>
                            <progress className='Mcampaigns-progress' value={Mcampaign.funded} max="100"></progress>
                            <div className='Mcampaigns-stats'>
                                <p className='Mcampaigns-raised'>₦{Mcampaign.raised.toLocaleString()} raised</p>
                                <p className='Mcampaigns-funded'>{Mcampaign.funded}% funded</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < Mcampaigns.length && (
                <div className="explore-button-wrapper">
                    <button onClick={handleClick} className="explore-campaigns-button">
                        <span>Show more</span> <SlArrowDown />
                    </button>
                </div>
            )}

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