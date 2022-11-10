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
            <textarea style={{color : 'black'}} />
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(Notify);
