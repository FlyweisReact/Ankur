/** @format */

import React, { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";

const Kundli = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

  // Admin Token
  const token = localStorage.getItem("AdminToken");

  // fetch All Kundli's
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/kundli",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(" Fetch All Kundli's err => ", err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Delete Kundli by ID
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

  // Modal ---
  function MyVerticallyCenteredModal(props) {
    // -----------------------------------------
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [time, setTime] = useState("");

    // Add Astrologer
    const addAstro = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro",
          {
          name , gender , 
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

    // Edit Astrologer
    const editAstro = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro/${id}`,
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
        fetchData();
        setModalShow(false);
        toast.success("Astrologer Edited Successfully");
      } catch (err) {
        console.log("Edit Astrologer Err =>", err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {editA ? "Edit Astrolger" : " Add Astrologer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editA ? editAstro : addAstro}>
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
            Kundli
          </span>
          <button
            onClick={() => {
              setP(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Kundli
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
                <th>Gender</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.details?.map((i, index) => (
                <tr key={index}>
                  <td>{i.name}</td>
                  <td>{i.gender}</td>
                  <td>{i.time}</td>
                  <td>
                    <span style={{ display: "flex", gap: "20px" }}>
                      {" "}
                      <AiFillEdit
                        cursor="pointer"
                        color="blue"
                        onClick={() => {
                          setID(i._id);
                          setP(true);
                          setModalShow(true);
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

export default HOC(Kundli);
