/** @format */

import React, { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const Astrologers = () => {
  const [popup, setPopup] = useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [address , setAddress] = useState('')
  const [password , setPassword ] = useState('')
  const [confirmpassword ,setConfirmPassword] = useState('')
  const [email , setEmail] = useState('')
  const [mobile , setMobile] = useState('')
  const [country , setCountry] = useState('')
  const [state , setState] = useState('')
  const [district , setDistrict] = useState('')
  const [pincode] = useState('')
  const [desc] = useState('')
  const [language] = useState([])
  const [rashi] = useState('')
  const [skills] = useState([])

  // Admin Token
  const token = localStorage.getItem("AdminToken");

  // fetch All Astrologers
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log("Fetch All Astrologers err => ", err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addAstro = async (e) => {
    e.preventDefault();
    try {
      const data  = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro",
        {  },
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
            Astrologers
          </span>
          <button
            onClick={() => {
              setP(false);
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Astrologers
          </button>
        </div>
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] ">
                {editA ? "Edit Astrologer" : "Add Astrologer"}
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>

            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={editA ? editAstro : addAstro}
            >
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Email
                </label>
                <input
                  required
                  type="email"
                 
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Phone No.
                </label>
                <input
                  required
                 
                  type="tel"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Password
                </label>
                <input
                  required
                  type="password"
                
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>

              <button
                type="submit"
                className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                {editA ? "Edit" : "Add"}
              </button>
            </form>
          </div>
        </section>

        <Container className="wcomp overflow-x-auto">
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Description </th>
                <th>Email</th>
                <th>Language</th>
                <th>Mobile Number</th>
                <th>Pin Code</th>
                <th>Rashi</th>
                <th>Skills</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.details?.map((i, index) => (
                <tr key={index}>
                  <td>{i.firstName + " " + i.lastName}</td>
                  <td>{i.address}</td>
                  <td>{i.country}</td>
                  <td>{i.desc}</td>
                  <td>{i.email}</td>
                  <td>
                    {i.language?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>
                  <td>{i.mobile}</td>
                  <td>{i.pincode}</td>
                  <td>{i.rashi}</td>
                  <td>
                    {i.skills?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>

                  <td>
                    <span style={{ display: "flex", gap: "20px" }}>
                      {" "}
                      <AiFillEdit
                        cursor="pointer"
                        color="blue"
                        onClick={() => {
                          setID(i._id);
                          setP(true);
                          setPopup(!popup);
                        }}
                      />{" "}
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
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(Astrologers);
