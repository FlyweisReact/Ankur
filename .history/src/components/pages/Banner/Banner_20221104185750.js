/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button"

const BannerImage = [
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' ,
        name : 'Image Of Banner'
    },
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp' ,
        name : 'Image Of Banner'
    },
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp' ,
        name : 'Image Of Banner'
    },
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' ,
        name : 'Image Of Banner'
    },
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' ,
        name : 'Image Of Banner'
    },
    {
        image : 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' ,
        name : 'Image Of Banner'
    },
]

const Banner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nikhil-backend.herokuapp.com/api/v1/banner",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setData, token, axios]);

  function MyVerticallyCenteredModal(props) {

    const submitHandler = async (e) => {
      e.preventDefault();
     
    };

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={submitHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setI(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="New"
                required
                onClick={() => postDetails()}
                onChange={(e) => setN(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const deleteData = async (name) => {
   
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banner
          </span>
          <Button variant="outline-success" onClick={() => navigate("/addCat")}>
            Add-Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {BannerImage.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.image}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <div className="card-title">{i.name}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          setModalShow(!modalShow);
                          setId(i._id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteData(i.name)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Banner);
