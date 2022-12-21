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

  // Add Kundli
  const [Image, setI] = useState("");
  const [userName, setU] = useState("");
  const [action, setA] = useState("");
  const addAstro = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://astrologer-panel.herokuapp.com/adminpanel/kundli",
        {
          Image,
          userName,
          action,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Kundli Added SuccessFully");
      fetchData();
      setPopup(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Kundli
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://astrologer-panel.herokuapp.com/adminpanel/kundli",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
      toast.err(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [axios, token, toast]);

  const editAstro = async (e) => {
    e.preventDefault();
    try {
      toast.success("Kundli Edited SuccessFully");
      setPopup(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Edit Kundli
  const [id, setID] = useState("");
  const editKundli = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://astrologer-panel.herokuapp.com/adminpanel/kundli/${id}`,
        {
          Image,
          userName,
          action,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Kundli Edited SuccessFully");
      setPopup(false);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Kundli
  const deleteAstro = async (id) => {
    try {
      const data = await axios.delete(
        `https://astrologer-panel.herokuapp.com/adminpanel/kundli/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Kundli Deleted SuccessFully");
      fetchData();
    } catch (err) {
      console.log(err);
    }
    toast.success("Kundli Deleted SuccessFully");
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Kundli
          </span>
      
        </div>
 

       
    </>
  );
};

export default HOC(Kundli);
