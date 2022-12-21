/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table} from "react-bootstrap";

const Booking = () => {
  const [data, setData] = useState([]);



  return (
    <>
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's (Total : {data?.details?.length})
          </span>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>User</th>
                <th>Astrologer</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
                <tr >
                  
                  <td>User</td>
                  <td>Astrologer</td>
                  <td>20:45 PM</td>
                  <td>12/10/2022</td>
                 
                </tr>
             
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};


export default HOC(Booking);