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





  // Modal ---
  function MyVerticallyCenteredModal(props) {
  

    // Add Kundli
    const addKundli = async (e) => {
      e.preventDefault();
      try {
       
        toast.success("Discount Added SuccessFully");
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log("add Discount err => ", err);
      }
    };

    // Edit Astrologer
    const editAstro = async (e) => {
      e.preventDefault();
      try {
   
        setModalShow(false);
        toast.success("Discount Edited Successfully");
      } catch (err) {
        console.log("Edit Discount Err =>", err);
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
              <Form.Label>Activation Date</Form.Label>
              <Form.Control
                type="date"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="date"
                required
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
                <td> 10/12/2033  </td>
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
