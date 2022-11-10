/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Notify = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Send Notification
          </span>
        </div>
        <Container style={{ marginTop: "5%", width: "800px" }}>
          <Form>
          <Form.Label> Write Message Here </Form.Label>
            <textarea style={{ border : '1px solid black' , outline : 'none' , width : '100%' , padding : '10px'}} />
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(Notify);
