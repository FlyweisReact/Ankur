/** @format */

import React, { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal , Form } from "react-bootstrap";

const Astrologers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [desc, setDesc] = useState("");
  const [language, setLanguage] = useState([]);
  const [rashi, setRashi] = useState("");
  const [skills, setSkills] = useState([]);

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
      const data = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro",
        {
          firstName,
          lastName,
          address,
          password,
          confirmpassword,
          email,
          mobile,
          country,
          state,
          district,
          pincode,
          desc,
          language,
          rashi,
          skills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      toast.success("Astrologer Added SuccessFully");
      setModalShow(false);
      fetchData();
    } catch (err) {
      console.log("add Astrologer err => ", err);
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

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Astrologer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Firs Name</Form.Label>
            <Form.Control type='text' 
          </Form.Group>
        </Form>
          <form
            className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
            onSubmit={addAstro}
          >
            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                First Name
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2"
                onChange={(e) => setFirstName(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Last Name
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setLastName(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Address
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setAddress(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Password
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Confirm Password
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Email
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Mobile Number
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setMobile(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Country
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setCountry(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                State
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setState(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                District
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setDistrict(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Pincode
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setPincode(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Description
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setDesc(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Language
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setLanguage(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Rashi
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setRashi(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Skills
              </label>
              <input
                required
                type="text"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 "
                onChange={(e) => setSkills(e.target.value)}
                style={{ border: "1px solid rgb(241,146,46)", outline: "none" }}
              />
            </div>

            <button
              type="submit"
              className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
            >
              {editA ? "Edit" : "Add"}
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Astrologers
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Astrologers
          </button>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
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
