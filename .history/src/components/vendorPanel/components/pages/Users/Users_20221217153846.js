import React, { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";


const Users = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editA, setP] = useState(false);
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

  // Admin Token
  const token = localStorage.getItem("AdminToken");

  // fetch All Astrologers
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/astro",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log("Fetch All Astrologers err => ", err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Delete User by ID
  const deleteAstro = async (id) => {
    try {

      toast.success("User Deleted SuccessFully");
      fetchData();
    } catch (err) {
      fetchData();
      console.log("Delete Astro err => ", err);
    }
  };


  return (
    <>
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Description </th>
                <th>Email</th>
                <th>Language</th>
                <th>Mobile Number</th>
                <th>Pin Code</th>
                <th>Rashi</th>
                <th>Skills</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.details?.map((i, index) => (
                <tr key={index}>
                  <td>{i.firstName + " " + i.lastName}</td>
                  <td>{i.address}</td>
                  <td>{i.country}</td>
                  <td>{i.desc}</td>
                  <td>{i.email}</td>
                  <td>
                    {i.language?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>
                  <td>{i.mobile}</td>
                  <td>{i.pincode}</td>
                  <td>{i.rashi}</td>
                  <td>
                    {i.skills?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>

                  <td>
                    <span style={{ display: "flex", gap: "20px" }}>
                    
                      <AiFillDelete
                        cursor="pointer"
                        color="red"
                        onClick={() => deleteAstro(i._id)}
                      />{" "}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};


export default HOC(Users)