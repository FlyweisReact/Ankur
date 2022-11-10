/** @format */

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
const Booking = () => {
  const [popup, setPopup] = useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [mobile_Number, setM] = useState("");
  const [email_ID, setE] = useState("");
  const [password, setPassWord] = useState("");
  const [id, setID] = useState("");

  const token = localStorage.getItem("AdminToken");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://astrologer-panel.herokuapp.com/adminpanel/admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axios, token, toast]);

  const addAstro = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://astrologer-panel.herokuapp.com/adminpanel/admin-signup",
        { mobile_Number, email_ID, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Astrologer Added SuccessFully");
      setPopup(false);
      fetchData();
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  const editAstro = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://astrologer-panel.herokuapp.com/adminpanel/admin-update/${id}`,
        { mobile_Number, email_ID, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Astrologer Edited SuccessFully");
      setPopup(false);
      fetchData();
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      setPopup(false);
      fetchData();
    }
  };

  const deleteAstro = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://astrologer-panel.herokuapp.com/adminpanel/admin-delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Astrologer Deleted SuccessFully");
      fetchData();
    } catch (err) {
      fetchData();
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bookings
          </span>
        </div>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Astrologer
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
               User
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
             Time Slot
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.data?.map((i, index) => (
                <tr className="tracking-wider text-gray-900" key={index}>
                  <td className=" py-3 w-36 md:text-base text-sm ">
                    <img
                      src={
                        i.profile
                          ? i.profile
                          : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                      }
                      alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                      width="100"
                    />
                  </td>
                  <td className=" py-3 w-36 md:text-base text-sm ">
                    {" "}
                    {i.mobile_Number}{" "}
                  </td>
                  <td className=" py-3 w-36 md:text-base text-sm ">
                    {" "}
                    {i.email_ID}{" "}
                  </td>
                  <td className="py-3 w-36 md:text-base text-sm ">
                    <span style={{ display: "flex", gap: "20px" }}>
                      <AiFillDelete
                        cursor="pointer"
                        color="red"
                        onClick={() => deleteAstro(i._id)}
                      />{" "}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Booking);
