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
        <Container style={{ marginTop: "5%", width: "800px", color: "black" ,boxShadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;}}>
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
