import React, { useEffect, useState } from "react";
import "./FundraisingPage.css";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { BsArrowDownShort } from "react-icons/bs";
import Icon from '../../assets/Icon.svg'
import Amount from "../../pages/Amount/Amount";
// import Modal from "../../pages/Modal/Modal";
import Tree from '../../assets/Tree.svg'
import Header from "../../components/Header/Header";
import Modal from '../../pages/Modal/Modal'
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allCampaigns } from '../../global/slice';

const FundraisingPage = () => {
  const [pay, setPay] = useState(false)
  const {id} = useParams()

  console.log(id)

  const [data, setData] = useState(null)
  const [oneData, setOneData] = useState(null)
  const dispatch = useDispatch()
  // console.log(id)

  const main = useSelector((state)=>state.kindraise.allCampaigns)
  // console.log(main, "main")
  const get = ()=>{

    const url = 'https://kindraise.onrender.com/api/v1/getallcampaigns';  
  
    axios.get(url)  
    .then((res) => {  
      // console.log(res?.data?.campaign,"all campaigns") 
      dispatch(allCampaigns(res?.data?.Campaigns));
      setData(res?.data?.Campaigns);
      // console.log(data,"data");
      // console.log(oneData, "campaignManager")
    })  
    .catch((err) => {  
      console.log(err); // Set the error message  
    });  
  }
  
  useEffect(() => {  
    get()
    // setOneData(us)
  }, []);
  // useEffect(()=>{

  //   const data = (main.filter((e)=>e.id == id))
  //    setOneData(data[0])
  //   console.log(oneData.story)
  // },[main])

  // useEffect(()=>{
  //   setOneData(data.filter((e)=>e.id == id))
  //   console.log(oneData, "oneData")
  // },[data, id])
  
  // setOneData(data.filter((e)=>e.id == id))
  const [amount, setAmount] = useState("")
  const [amntBtn, setAmntBtn] = useState(false)
  const [bank, setBank] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  // useEffect(()=>{
  //   if (amount.length > 2) {
  //     console.log("hello")
  //   } else {
  //     console.log("not empty message")
  //   }
  // },[amount])

  const paymentData = {
    amount,
    bank,
    name,
    email,
    message
  }
  // console.log(paymentData)


  const donor = [
    {
      name: "Anonymous",
      date: "02/01/2024",
      amount: "10,000"
    },
    {
      name: "Chidi Benson",
      date: "02/01/2024",
      amount: "20,000"
    },
    {
      name: "Jack Samuel",
      date: "02/01/2024",
      amount: "2,000"
    },
    {
      name: "Lucy Eze",
      date: "02/01/2024",
      amount: "15,000"
    },
  ]

  const num =()=>{
    console.log(Date.now());
  }

  const max = 2000;  
  const current = 1000;  
  const percentage = (current / max) * 100;  
  // console.log(pay)




//   function payKorapay() {
//     window.Korapay.initialize({
//         key: "pk_juigfweofyfewby732gwo8923e",
//         reference: "your-unique-reference",
//         amount: 3000, 
//         currency: "NGN",
//         customer: {
//           name: "John Doe",
//           email: "john@doe.com"
//         },
//         onClose: function () {
//           // Handle when modal is closed
//         },
//         onSuccess: function (data) {
//           // Handle when payment is successful
//         },
//         onFailed: function (data) {
//           // Handle when payment fails
//         }
//         ...
//     });
// }

  return (
    <>
    
    <div className="fundRaiseBody">
      {pay ? (
        <Modal
          setMessage={setMessage}
          setEmail={setEmail}
          setName={setName}
          setBank={setBank}
          setAmount={setAmount}
          setPay={setPay}
        />
      ) : null}
      <div className="fund-head">
        <Header />
      </div>
      <div className="fundRaiseTitleBox">
        <h2>tree</h2>
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
              <div className="fundRaiseNoDonor">23 Donors</div>
            </div>

            <div className="fundRaiseOrgName">
              <div className="fundRaiseOrgCard">
                <div className="orgImg">N</div>
                <div>
                  <div className="fundRaiseOgBy">Organized by</div>
                  <div className="fundOrgName">Nobis Foundation</div>
                </div>
              </div>
              <div className="fundRaiseOrgVerified">verified</div>
            </div>

            {/* <div className="donateBoxMedia">
              <div className="bonateInBox">
                <button
                  className="fundRaiseDonateBtn"
                  onClick={() => setPay(true)}
                >
                  Donate
                </button>
                <button className="fundRaiseShareBtn">
                  Share with friends
                </button>
              </div>
            </div> */}

            <div className="fundRaiseStoryBox">
              <h2>Story</h2>
              <div className="fundRaiseStory">
                🌳Trees are the lungs of our planet, but they're disappering at
                alarming rate.
                <br />
                <br />
                <br />
                The Problem:
                <br />• We lose 18.7million acres of forest annually-equivalent
                to 27 soccer fields every minute.
                <p>
                  • Deforestation contributes to 15% of all greenhouse gas
                  emmissions
                </p>
                <p>• counteless species loss their home as forest vanishes</p>
              </div>
              <div className="showMoreStories">
                show more <BsArrowDownShort />
              </div>
            </div>

            <div className="fundRaiseDonorBox">
              <h2>Donors</h2>
              <div className="fundDonorWrapper">
                {donor.map((e) => (
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
                    <div className="fundRaiseAmountBox">₦{e.amount}</div>
                  </div>
                ))}
              </div>
              <div className="fundRaiseSeeAll" onClick={()=>Nav('/donor')}><span>See All</span></div>
            </div>
            <div className="fundRaiseUpdateBox">
              <h2>Update</h2>
              <div>No updates for this Campaigns just yet</div>
            </div>
          </div>
          <div className="donateBox">
            <div className="bonateInBox">
              <button
                className="fundRaiseDonateBtn"
                onClick={() => setPay(true)}
              >
                Donate
              </button>
              <button className="fundRaiseShareBtn" onClick={()=>setShareModal(true)}>Share with friends</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default FundraisingPage;
