/** @format */

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import MSG from "./components/vendorPanel/components/pages/Message/Message";
import "react-toastify/dist/ReactToastify.css";
import UserKundli from "./components/pages/UserKundli/UserKundli";
import Discount from "./components/pages/discount/Discount";
import Chat from "./components/pages/reactChat/Chat";
import Horoscope from "./components/pages/horoScope/Horoscope";
import Specification from "./components/pages/SpecificationPage/Specification";
import VendorLogin from "./components/vendorPanel/components/forms/VendorLogin";
import VendorDashboard from "./components/vendorPanel/components/pages/VendorDashboard";
import Fedd from "./components/pages/FeedBack/Fedd";
import Astrologers from "./components/vendorPanel/components/pages/Astrologer/Astrologers";
import Users from "./components/vendorPanel/components/pages/Users/Users";
import Kundli from "./components/vendorPanel/components/pages/Kundli/Kundli";
import AdminHoro from "./components/vendorPanel/components/pages/Horoscope/Horoscope";
import Forgot from "./components/vendorPanel/components/forms/Forgot";
import ResetPassword from "./components/vendorPanel/components/forms/ResetPassword";
import Changepassword from "./components/vendorPanel/components/forms/Changepassword";
import TimeSlots from "./components/pages/TimeSlots/TimeSlots";
import Documents from "./components/pages/Documents/Documents";
import Banner from "./components/pages/Banner/Banner";
import Notify from "./components/pages/Notifications/Notify";
import Booking from "./components/vendorPanel/components/pages/Booking/Booking";
import AdminReview from "./components/vendorPanel/components/pages/Astrologer/AdminReview";
import UploadDocs from "./components/vendorPanel/components/pages/Astrologer/UploadDocs";
import Banners from "./components/vendorPanel/components/pages/Astrologer/Banners";
import AdminDiscount from "./components/vendorPanel/components/pages/Astrologer/AdminDiscount";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/astro" element={<Astrologers />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/horo" element={<AdminHoro />} />
        <Route path="/adminReviews" element={<AdminReview />} />
        <Route path="/uploadDocs" element={<UploadDocs />} />
        <Route path="/Banners" element={<Banners />} />
        <Route path="/AdminDiscount" element={<AdminDiscount />} />
        <Route path="/msg" element={<MSG />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/users" element={<Users />} />





      </Routes>
    </>
  );
}

export default App;
