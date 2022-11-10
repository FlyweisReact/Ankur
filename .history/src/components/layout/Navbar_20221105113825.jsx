import { RiMenu4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Navbar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();


  return (
    <>
      
      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-green-200 space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-green-200 space-x-4"
        }
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-gray-900 hover:scale-90 cursor-pointer"
        />

        {/* Profile */}
        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <span className="cursor-pointer text-2xl">
            {/* <IoMdNotifications /> */}
          </span>
          <figcaption className="tracking-wider pl-1 font-semibold">
            {" "}
            <div className="lg:text-base text-sm text-gray-900  uppercase">
              Welcome
            </div>
          </figcaption>
        </section>

  
      </div>
    </>
  );
};

export default Navbar;
