/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

const BannerImage = [
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    name: "Image Of Banner",
  },
  {
    image: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp",
    name: "Image Of Banner",
  },
  {
    image: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-A0sC9efi8q1WcBOSxiL54JeverkoprDEEw&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlG4Urst44E0RNXFWEHFZsLucIj1DzOE7CA&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy9iUuq9tuI8od0d9Ekpzmcpdy3U2uS8JZjHfGy9L7w_SRqB4iwhQI3FhMeLU1r_3h_c&usqp=CAU",
    name: "Image Of Banner",
  },
];

const Banners = () => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
      const submitHandler = async (e) => {
        e.preventDefault();
        toast.success("Banner Added Successfully");
        setModalShow(false);
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
              Add Banner
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              style={{
                color: "black",
                margin: "auto",
              }}
              onSubmit={ submitHandler}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="New" required />
              </Form.Group>
  
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    const deleteData = async (name) => {
      toast.success("Banner Deleted SuccessFully");
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
            <Button
              variant="outline-success"
              onClick={() => {
                setModalShow(!modalShow);
              }}
            >
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
                        alt=''
                      />
                      <div className="card-title" style={{textAlign : 'center' , marginTop : '2%'}}>{i.name}</div>
                      <div
                    
                      >
                        
                        <Button
                          variant="outline-danger"
                          onClick={() => deleteData(i.name)}
                          style={{width : '100%'}}
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

export default HOC(Banners)