/** @format */

import React, { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";

const AdminDiscount = () => {
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
  const deleteKundli = async (id) => {
    try {
      const data = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/kundli/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      toast.success("Kundli Deleted SuccessFully");
      fetchData();
    } catch (err) {
      fetchData();
      console.log("Delete Kudli err => ", err);
    }
  };

  // Modal ---
  function MyVerticallyCenteredModal(props) {
    // -----------------------------------------
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");
    const [DOB, setDOB] = useState("");

    // Add Kundli
    const addKundli = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/kundli",
          {
            name,
            gender,
            time,
            place,
            DOB,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        toast.success("Kundli Added SuccessFully");
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log("add Kundli err => ", err);
      }
    };

    // Edit Astrologer
    const editAstro = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/kundli/${id}`,
          {
            name,
            gender,
            time,
            place,
            DOB,
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
        toast.success("kundli Edited Successfully");
      } catch (err) {
        console.log("Edit Kundli Err =>", err);
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
          <Form onSubmit={editA ? editAstro : addKundli}>
            <Form.Group>
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="text"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control
                type="text"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setPlace(e.target.value)}
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
            All Discounts (Total : 5)
          </span>
          <button
            onClick={() => {
              setP(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Discounts
          </button>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Discount</th>
                <th>Coupon Code</th>
                <th>Min. Order</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              <tr>
                <td>Product</td>
                <td> 55% </td>
                <td>KSHd34</td>
                <td> 452 </td>
                <td> 12/10/2022 </td>
                <td>  </td>
                <td>
                  <span style={{ display: "flex", gap: "20px" }}>
                    {" "}
                    <AiFillEdit
                      cursor="pointer"
                      color="blue"
                      onClick={() => {
                        // setID(i._id);
                        setP(true);
                        setModalShow(true);
                      }}
                    />{" "}
                    <AiFillDelete
                      cursor="pointer"
                      color="red"
                      onClick={() =>
                        //   deleteKundli(i._id)
                        toast.success("Delted")
                      }
                    />{" "}
                  </span>
                </td>
              </tr>
              
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AdminDiscount);