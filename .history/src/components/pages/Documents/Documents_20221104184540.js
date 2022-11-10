/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Documents = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Astrologers
          </span>
        </div>

        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upload Documnet</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(Documents);
