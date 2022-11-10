import { RiMenu4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const func = () => {
    navigate("/");
    toast.success("Log-Out ");
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
    
    </>
  );
};

export default Navbar;
