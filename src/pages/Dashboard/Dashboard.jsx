import React, { useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BiMoney } from "react-icons/bi";
import { BsMegaphone, BsPeople } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import School from '../../assets/School.svg'
import { useNavigate } from "react-router-dom";
// import { Bar } from 'rechart';
// import { BarChart, ResponsiveContainer,Bar, XAxis, YAxis, Tooltip } from 'recharts';

const DashBoard = () => {
  const products = [
    {
      name: "Jan",
      donor: 1500,
      receiver: 3000,
      hidden: 900,
    },
    {
      name: "Feb",
      donor: 3000,
      receiver: 3500,
      hidden: 1000,
    },
    {
      name: "Mar",
      donor: 4000,
      receiver: 2000,
      hidden: 400,
    },
    {
      name: "Apr",
      donor: 4500,
      receiver: 2500,
      hidden: 700,
    },
    {
      name: "May",
      donor: 3000,
      receiver: 2000,
      hidden: 1200,
    },
    {
      name: "Jun",
      donor: 500,
      receiver: 2800,
      hidden: 1200,
    },
    {
      name: "Jul",
      donor: 2000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "Aug",
      donor: 3000,
      receiver: 2500,
      hidden: 1200,
    },
    {
      name: "Sep",
      donor: 0,
      receiver: 3000,
      hidden: 1200,
    },
    {
      name: "Oct",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
    {
      name: "Nov",
      donor: 3000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "Dec",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
  ];

  const [data, setdata] =useState([
    {
      amount: 110000,
      name: "Total Amount",
      icon: "total",
      message:''
    },
    {
      amount: 11000,
      name: "Total Donation",
      icon: "total",
      message:''
    },
    {
      amount: 40,
      name: "Total Donors",
      icon: "total",
      message:''
    },
    {
      amount: 12,
      name: "Active Campaigns",
      icon: "total",
      message:''
    },
  ])

  const Nav = useNavigate()

  return (
    <div className="dashboardBody">
      <div>
        <div className="dashNameBtnHolder">

          <h2 className="pageName">Home</h2>
          <button className="campaignBtn dash" onClick={()=>Nav('/campaign/create.campaign') }>New Campaign</button>
        </div>
        <div className="dashboardContent">
          <div className="dashBoardUpperCard">
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText one">₦110,000</h2>
                <div className="upperCardSubText">Total Raised</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText"></div>
                <div className="iconCircle"><BiMoney color="rgb(78, 78, 239)" size={20}/></div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText two">₦11,000</h2>
                <div className="upperCardSubText">Total Donation</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">+2.5% from yesterday</div>
                <div className="iconCircle"><BiMoney color="rgb(78, 78, 239)" size={20}/></div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText three">40</h2>
                <div className="upperCardSubText">Total Donors</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">+5 this month</div>
                <div className="iconCircleHolder">
                  <div className="iconCircle"><BsPeople color="rgb(78, 78, 239)" size={20}/></div>
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText four">12</h2>
                <div className="upperCardSubText">Active Campaigns</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">2 ending this week</div>
                <div className="iconCircle"><BsMegaphone color="rgb(78, 78, 239)" size={20}/></div>
              </div>
            </div>
            {/* <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div> */}
          </div>

          <div className="dashBoardLowerCard">
            <div className="barChart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={400} data={products}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend/> */}
                  <Bar
                    type="monotone"
                    stroke="#0042d1"
                    fill="#4d77e1"
                    dataKey="donor"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="fundraisingDashboardBox">
              <div className="fundraiseDashHead">
                <h3>Your Fundraising</h3>
                <div><AiOutlineExport size={20} cursor="pointer" /></div>
              </div>
              <div className="fundraiseDashBody">
                <div className="fundRaiseDashCard">
                  <div className="fundraiseFrameBox">
                    <div className="fundRaiseFrameImgBox">
                      <img src={School} alt="" />
                    </div>
                    <div className="fundRaiseFrameText">
                      Sponsor 5 Children in Nigeria Get Back to School
                    </div>
                  </div>
                  <div className="fundRaiseTrackBox">
                    <div className="trackBar"></div>
                    <div className="fundraiseAmountTrack">
                      <div>₦100,450/<span>150,000</span></div>
                      <div>69% funded</div>
                    </div>
                  </div>
                </div>
                <div className="fundRaiseDashCard">
                  <div className="fundraiseFrameBox">
                    <div className="fundRaiseFrameImgBox">
                      <img src={School} alt="" />
                    </div>
                    <div className="fundRaiseFrameText">
                      Sponsor 5 Children in Nigeria Get Back to School
                    </div>
                  </div>
                  <div className="fundRaiseTrackBox">
                    <div className="trackBar"></div>
                    <div className="fundraiseAmountTrack">
                      <div>₦100,450/<span>150,000</span></div>
                      <div>69% funded</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="recentDonorsHistory">
            <div className="donationHistoryPersonBox">
              <div className="donorHistoryHead">Donation history</div>
              <div className="donorHistoryPeople">
                <div className="donorPeople">
                  hello
                </div>
                <div className="donorPeople">
                  hello
                </div>
              </div>
            </div>
            <div className="donationHistoryPersonShow">
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
