import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import PasswordChange from "./auth/PasswordChange/PasswordChange";
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import Campaign from "./pages/Campaign/Campaign";
import ExploreCampaigns from "./pages/ExploreCampaigns/ExploreCampaigns";
import Track from "./pages/Track/Track";
import Payout from "./pages/Payout/Payout";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CreateCampaign from "./pages/CreateCampaign/CreateCampaign";
import FundraisingPage from "./pages/FundraisingPage/FundraisingPage";
import HomepageLayout from "./layouts/HomepageLayout/HomepageLayout";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"; 
import AboutUs from "./pages/AboutUs/AboutUs"; 
import Search from './pages/Search/Search'
import Pricing from "./pages/Pricing/Pricing"; 
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomepageLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/createpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/fundraising-page" element={<FundraisingPage />} />
        <Route path="/explore-campaigns" element={<ExploreCampaigns />} />
        <Route
          // path="/dashboard"  
          element={<DashboardLayout />}
          children={[
            <Route path="/dashboard" element={<Dashboard/>}/>,
            <Route path="/campaign" element={<Campaign/>}/>,
            <Route path="/donor" element={<Track/>}/>,
            <Route path="/payout" element={<Payout/>}/>,
            <Route path="/account" element={<Account/>}/>,
            <Route path="/campaign/create.campaign" element={<CreateCampaign/>}/>,
            // [['l;ljh.i6yyyyyyyii']]
          ]}
        />
        <Route element={<AdminLayout/>} 
        children={[
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        ]}
        />
        <Route
          // path="/dashboard"  
          element={<DashboardLayout />}
          children={[
            <Route path="/dashboard" element={<Dashboard/>}/>,
            <Route path="/campaign" element={<Campaign/>}/>,
            <Route path="/donor" element={<Track/>}/>,
            <Route path="/payout" element={<Payout/>}/>,
            <Route path="/account" element={<Account/>}/>,
            <Route path="/campaign/create.campaign" element={<CreateCampaign/>}/>,
            // [['l;ljh.i6yyyyyyyii']]
          ]}
        />
         <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;

