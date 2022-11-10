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
        <Container>
          <Form>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(Notify);
