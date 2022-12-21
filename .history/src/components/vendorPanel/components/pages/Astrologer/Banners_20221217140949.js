import React from 'react'
import HOC from '../../layout/HOC'

const Banners = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const [edit, setEdit] = useState(false);
  
    function MyVerticallyCenteredModal(props) {
      const submitHandler = async (e) => {
        e.preventDefault();
        toast.success("Banner Added Successfully");
        setModalShow(false);
      };
      const editBan = async (e) => {
        e.preventDefault();
        toast.success("Banner Edit Successfully");
        setModalShow(false);
      };
  
      return (
        <Modal
          {...props}
          size="lg-down"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {edit ? "Edit Banner" : "Add Banner"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              style={{
                color: "black",
                margin: "auto",
              }}
              onSubmit={edit ? editBan : submitHandler}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="New" required />
              </Form.Group>
  
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  
    const deleteData = async (name) => {
      toast.info("Banner Deleted SuccessFully");
    };
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Banner
            </span>
            <Button
              variant="outline-success"
              onClick={() => {
                setEdit(false);
                setModalShow(!modalShow);
              }}
            >
              Add-Banner
            </Button>
          </div>
        </section>
  
        <section
          className="main-card--container"
          style={{ color: "black", marginBottom: "10%" }}
        >
          {BannerImage.map((i) => {
            return (
              <>
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={i.image}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <div className="card-title">{i.name}</div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="outline-info"
                          onClick={() => {
                            setEdit(true);
                            setModalShow(!modalShow);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => deleteData(i.name)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </>
    );
  };

export default HOC(Banners)