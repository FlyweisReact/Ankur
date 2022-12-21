/** @format */

import React, { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";

const Astrologers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

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

  const deleteAstro = async (id) => {
    try {
      const data = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      toast.success("Astrologer Deleted SuccessFully");
      fetchData();
    } catch (err) {
      fetchData();
      console.log("Delete Astro err => ", err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    // -----------------------------------------
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

    // Add Astrologer
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

    const editAstro = async (e) => {
      e.preventDefault()
      try{
        const data = await axios.put(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro/${id}`)
        console.log(data)
        fetch
      }catch(err){
        console.log(err)
      }
    }

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
          <Form onSubmit={addAstro}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Address</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                required
                min={0}
                pattern="[0-9]{10}"
                placeholder="4512369870"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setDistrict(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="tel"
                placeholder="110070"
                pattern="[0-9]{6}"
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rashi</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setRashi(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Skils</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setSkills(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
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
