import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
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

function App() {
  return (
    <>
      <ToastContainer />

      <Link to="/login" style={{ position: "absolute" }}>
        Login
      </Link>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userkundli" element={<UserKundli />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/specification" element={<Specification />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="feedback" element={<Fedd />} />

        {/* Admin Panel */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/otp" element={<Forgot />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/astro" element={<Astrologers />} />
        <Route path="/users" element={<Users />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/horo" element={<AdminHoro />} />
      </Routes>
    </>
  );
}

export default App;