/** @format */

import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const MSG = () => {
  const sendMsg = async (e) => {
    e.preventDefault();
    toast.success("Message Send SuccessFully");
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Send Notification
          </span>
        </div>
        <Container style={{ marginTop: "5%", width: "800px", color: "black" ,boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}}>
          <Form onSubmit={sendMsg}>
            <Form.Label> Write Message Here </Form.Label>
            <textarea
              style={{
                border: "1px solid black",
                outline: "none",
                width: "100%",
                padding: "10px",
              }}
            />

            <Button
              style={{ width: "30%", marginTop: "2%" }}
              variant="outline-success"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(MSG);
