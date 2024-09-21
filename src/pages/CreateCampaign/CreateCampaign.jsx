import React, { useEffect, useState } from "react"; 
import "./CreateCampaign.css";
import useLocalStorage from "use-local-storage";
import Content from "../../components/Content/Content";
import Goal from "../../components/Goal/Goal";
import Share from "../../components/Share/Share";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const CreateCampaign = () => {
  const Nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [amount, setAmount] = useState("");
  const [endDate, setEndDate] = useState("");
  const token = useSelector((state) => state.kindraise.token);

  const Create = () => {
    if (!title || !story || !amount || !endDate) {
      toast.error("All details are required to create a campaign");
      return;
    }

    setLoading(true);
    const url = `https://kindraise.onrender.com/api/v1/create-campaign`;

    const campaignData = {
      title,
      description: story,
      goalAmount: Number(amount),
      endDate,
    };

    console.log("Campaign Data:", campaignData);

    axios
      .post(url, campaignData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res?.data?.message);
        Nav(`/campaign/${res.data.data.campaignId}`);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "An error occurred");
        setLoading(false);
      });
  };

  const [activeComponent, setActiveComponent] = useLocalStorage('A');  
  const [activeHead, setActiveHead] = useLocalStorage('A');  

  useEffect(() => {  
    setActiveComponent("A");  
  }, []);  

  const content = () => { setActiveHead('A'); setActiveComponent('A'); };  
  const goal = () => { setActiveHead('B'); setActiveComponent('B'); };  
  const sharing = () => { setActiveHead('C'); setActiveComponent('C'); }; 

  const renderComponent = () => {  
    switch (activeComponent) {  
      case 'A':  
        return <Content setTitle={setTitle} setStory={setStory} />;  
      case 'B':  
        return <Goal setAmount={setAmount} setEndDate={setEndDate} />;  
      case 'C':  
        return <Share loading={loading} Create={Create} />;  
      default:  
        return <Content />;  
    }  
  }; 

  return (
    <>
      <div className="createBody">
        <h2 className="createName">Create a New Campaign</h2>
        <div className="createContent">
          <div className="createHead">
            <div className="createSmallHeader">
              <div onClick={content} className={activeComponent === "A" ? "active" : "notActive"}>
                Content
              </div>
              <div onClick={goal} className={activeComponent === "B" ? "active" : "notActive"}>
                Goal
              </div>
              <div onClick={sharing} className={activeComponent === "C" ? "active" : "notActive"}>
                Sharing
              </div>
            </div>
          </div>

          <div className="create">{renderComponent()}</div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CreateCampaign;
