/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";

const Kundli = () => {
  const [popup, setPopup] = useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);

  // Admin Token
  const token = localStorage.getItem("AdminToken");



  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Kundli
          </span>
      
        </div>
 

       </section>
    </>
  );
};

export default HOC(Kundli);
