
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { Container, Table } from "react-bootstrap";

const Users = () => {



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
         
                <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                
                  </td>
          

                  <td>
                    <span style={{ display: "flex", gap: "20px" }}>
                      <AiFillDelete
                        cursor="pointer"
                        color="red"
                       
                      />
                    </span>
                  </td>
                </tr>
        
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(Users);
