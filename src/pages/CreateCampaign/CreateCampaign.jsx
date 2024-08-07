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
  const [subtitle, setSubTitle] = useState("");
  const [story, setStory] = useState("");
  const [photo, setPhoto] = useState(null); // Changed to accept a file
  const [amount, setAmount] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ev, setEv] = useState("");
  const [file, setFile] = useState("");
  console.log(ev, "this id the ev");

  const campaignData = {
    title,
    subtitle,
    story,
    file,
    Goal: amount,
    endDate,
    ev,
  };
  // console.log(campaignData)
  // console.log(ev,"ev")
  const token = useSelector((state) => state.kindraise.token);

  const Create = () => {
    if (!title || !subtitle || !story || !amount || !endDate || !file) {
      // Include file in validation
      toast.error(
        "All details, including the file, are required to create a campaign"
      );
      return;
    }

    setLoading(true);
    const url = `https://kindraise.onrender.com/api/v1/create-campaign`;

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("story", story);
    formData.append("campaignPic", file); // Append the file
    formData.append("Goal", amount);
    formData.append("endDate", endDate);
    formData.append("ev", ev); // If ev is needed
    console.log(formData);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer: ${token}`, // Add your actual token here
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.info);
        // Handle successful response here, e.g., navigating or setting state
        Nav("/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.info || "An error occurred");
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
              return <Content setFile={setFile} goal={goal} setTitle={setTitle} setSubTitle={setSubTitle} setStory={setStory} setPhoto={setPhoto} />;  
          case 'B':  
              return <Goal sharing={sharing} setAmount={setAmount} setEndDate={setEndDate} />;  
          case 'C':  
              return <Share loading={loading} Create={Create} campaignData={campaignData} ev={ev} setEv={setEv} setActiveComponent={setActiveComponent} />;  
          default:  
              return <Content />;  
      }  
  }; 

  // const content = () => {
  //   setActiveHead("A");
  //   setActiveComponent("A");
  // };
  // const goal = () => {
  //   setActiveHead("B");
  //   setActiveComponent("B");
  // };
  // const sharing = () => {
  //   setActiveHead("C");
  //   setActiveComponent("C");
  // };

  return (
    <>
    <div className="createBody">
      <h2 className="createName">Create a New Campaigns</h2>
      <div className="createContent">
        <div className="createHead">
          <div className="createSmallHeader">
            <div
              onClick={content}
              className={activeComponent === "A" ? "active" : "notActive"}
            >
              Content
            </div>
            <div
              
              className={activeComponent === "B" ? "active" : "notActive"}
            >
              Goal
            </div>
            <div
              
              className={activeComponent === "C" ? "active" : "notActive"}
            >
              Sharing
            </div>
          </div>
          <div>hello</div>
        </div>

        <div className="create">{renderComponent()}</div>
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default CreateCampaign;
