import React, { useEffect, useState } from "react";
import "./FundraisingPage.css";
import Header from "../../components/Header/Header";
import { BsArrowDownShort } from "react-icons/bs";
import Icon from '../../assets/Icon.svg'
import Amount from "../../pages/Amount/Amount";
import Modal from "../../pages/Modal/Modal";
import Tree from '../../assets/Tree.svg'
import Nobis from '../../assets/nobis.JPG'

const FundraisingPage = () => {
  const [pay, setPay] = useState(false)

  const [amount, setAmount] = useState("")
  const [amntBtn, setAmntBtn] = useState(false)
  const [bank, setBank] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  useEffect(()=>{
    if (amount.length > 2) {
      console.log("hello")
    } else {
      console.log("not empty message")
    }
  },[amount])

  const paymentData = {
    amount,
    bank,
    name,
    email,
    message
  }
  console.log(paymentData)


  const donor = [
    {
        name: "Anonymous",
        date: "01/15/2024",
        amount: "10,000"
    },
    {
        name: "Chidi Benson",
        date: "01/16/2024",
        amount: "20,000"
    },
    {
        name: "Jack Samuel",
        date: "01/17/2024",
        amount: "2,000"
    },
    {
        name: "Lucy Eze",
        date: "01/18/2024",
        amount: "15,000"
    },
    {
        name: "Ayo Olawale",
        date: "01/19/2024",
        amount: "12,500"
    },
    {
        name: "Ngozi Okeke",
        date: "01/20/2024",
        amount: "8,000"
    },
    {
        name: "Emeka Uche",
        date: "01/21/2024",
        amount: "25,000"
    },
    {
        name: "Tolu Adebayo",
        date: "01/22/2024",
        amount: "5,500"
    },
    {
        name: "Chinonso Nwankwo",
        date: "01/23/2024",
        amount: "30,000"
    },
    {
        name: "Zainab Mohammed",
        date: "01/24/2024",
        amount: "18,000"
    },
    {
        name: "Ifeoma Nwachukwu",
        date: "01/25/2024",
        amount: "11,000"
    },
    {
        name: "Kehinde Ogunleye",
        date: "01/26/2024",
        amount: "14,000"
    },
    {
        name: "Femi Adetola",
        date: "01/27/2024",
        amount: "9,000"
    },
    {
        name: "Olamide Balogun",
        date: "01/28/2024",
        amount: "22,500"
    },
    {
        name: "Sade Akinwunmi",
        date: "01/29/2024",
        amount: "7,800"
    },
    {
        name: "Tunde Ilesanmi",
        date: "01/30/2024",
        amount: "16,300"
    }
]

  const num =()=>{
    console.log(Date.now());
  }

  const max = 2000;  
  const current = 1000;  
  const percentage = (current / max) * 100;  

  return (
    <div className="fundRaiseBody">
      {
        pay ? 
        <Modal setMessage={setMessage} setEmail={setEmail} setName={setName} setBank={setBank} setAmount={setAmount} setPay={setPay}/>:
        null
      }
      <div className="fund-head">
        <Header />
      </div>
      <div className="fundRaiseTitleBox">
        <h2>Roots of Hope</h2>
        <div>Nuturing our Future, One Tree at a Time</div>
      </div>
      <div className="fundMainContentBox">
        <div className="fundMainContentWrapper">
          <div className="fundContentBox">
            <div className="fundContentInBox">
              <img src={Tree} alt="pic" />
            </div>

            <div className="fundRaiseTrackBox">
              <div className="fundRaiseTrackMoney">
                <h2>₦100,450</h2>
                <div>raised of ₦150,000 goal</div>
              </div>
              <div className="trackBox">
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="fundRaiseNoDonor">
                23 Donors
              </div>
            </div>

            <div className="fundRaiseOrgCard">
    <div className="orgImg">
        <img src={Nobis} alt="" />
    </div>
    <div>
        <div className="fundRaiseOgBy">Organized by</div>
        <div className="fundOrgName">Nobis Foundation</div>
    </div>
</div>

            <div className="fundRaiseStoryBox">
              <h2>Story</h2>
              <div className="fundRaiseStory">
                🌳Trees are the lungs of our planet, but they're disappering at alarming rate.
                <br />
                <br />
                <br />
                The Problem:
                <br />
                • We lose 18.7million acres of forest annually-equivalent to 27 soccer fields every minute.
                <p>
                  • Deforestation contributes to 15% of all greenhouse gas emmissions
                </p>
                <p>
                  • counteless species loss their home as forest vanishes
                </p>
              </div>
              <div className="showMoreStories">
                show more <BsArrowDownShort/>
              </div>
            </div>

            <div className="fundRaiseDonorBox">
              <h2>Donors</h2>
              <div className="fundDonorWrapper">
                {
                  donor.map((e)=>(
                  <div className="fundDonor">
                    <div className="fundRaiseNameBox">
                      <div className="fundRaiseIconBox">
                        <img src={Icon} alt="" />
                      </div>
                      <div className="fundRaiseName">
                        <div className="fundRaiseUserName">{e.name}</div>
                        <div className="fundRaiseUserdate">{e.date}</div>
                      </div>
                    </div>
                    <div className="fundRaiseAmountBox">
                      ₦{e.amount}
                    </div>
                  </div>
                  ))
                }
              </div>
              <div className="fundRaiseSeeAll">
                See All
              </div>
            </div>
            <div className="fundRaiseUpdateBox">
              <h2>Update</h2>
              <div>
                No updates for this campaign just yet
              </div>
            </div>
          </div>
          <div className="donateBox">
            <div className="bonateInBox">
              <button className="fundRaiseDonateBtn" onClick={()=>setPay(true)}>Donate</button>
              <button className="fundRaiseShareBtn">Share with friends</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisingPage;
