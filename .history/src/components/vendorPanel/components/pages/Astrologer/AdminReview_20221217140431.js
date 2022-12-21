/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table} from "react-bootstrap";

const AdminReview = () => {
  const [data, setData] = useState([]);

  // Admin Token
  const token = localStorage.getItem("AdminToken");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/kundli",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(" Fetch All Kundli's err => ", err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
    <>
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Reviews (Total : {data?.details?.length})
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
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.details?.map((i, index) => (
                <tr key={index}>
                  
                  <td>User</td>
                  <td>Astrologer</td>
                  <td>Good</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AdminReview);
