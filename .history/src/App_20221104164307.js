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
        <Route path="/    const navigate = useNavigate()

const resetPass = async () => {
    navigate('/resetPass')
}

return (
<>
  <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
    <form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl">
      <p className="text-3xl"> Forgot Password </p>
      <section className="py-7 space-y-6">
        {/* Email */}
        <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
          <input
            type="email"
            placeholder="admin@gmail.com"
            required
            className="outline-none px-0.5  bg-transparent tracking-wider w-full"
          />
          <AiOutlineMail className="text-xl " />
        </div>
        <button
          type="submit"
          className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium   "
        >
          <div className="flex items-center">
            <span className="flex items-center justify-center">
              {" "}
              Reset Password{" "}
            </span>
          </div>
        </button>
      </section>
    </form>
  </div>
</>
);"
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
