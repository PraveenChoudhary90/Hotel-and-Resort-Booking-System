import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Table from "react-bootstrap/Table";

const Crud = () => {
  let [apidata, setApidata] = useState([]);
  let [frminp, SetInput] = useState({
    name: "",
    email: "",
    phone: "",
    room: "",
    arrival: "",
    departure: "",
    adult: "",
    children: "",
  });

  const [addshow, setAddShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeinput = (e) => {
    let { name, value } = e.target;
    SetInput({ ...frminp, [name]: value });
  };

  const submitfrom = () => {
    axios
      .post("http://localhost:3000/Members", frminp)
      .then((res) => alert("Inserted"));
  };
  useEffect(() => {
    axios.get("http://localhost:3000/Members").then((res) => {
      console.log(res.data);
      setApidata(res.data);
    });
  }, [mydel]);

  function mydel(id) {
    axios.delete(`http://localhost:3000/Members/${id}`).then((res) => {
      deleted;
    });
  }

  let [editdata, setEditdata] = useState([]);
  let [frmupdate, setFrmupdate] = useState(false);
  function hinput(e) {
    let { name, value } = e.target;
    setEditdata({
      ...editdata,
      [name]: value,
    });
  }

  function finalsubmit() {
    axios
      .put(`http://localhost:3000/Members/${editdata.id}`, editdata)
      .then((res) => alert("your data is update"));
    handleClose();
    setEditdata([]);
  }

  return (
    <>
      <Button variant="primary" onClick={handleAddShow}>
        Add Users
      </Button>
      <Table striped bordered hover>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Rooms</th>
          <th>Arrival </th>
          <th>Departure</th>
          <th>Adults</th>
          <th>Children</th>
          <th>Delete</th>
          <th>Update</th>
        </thead>
        <tbody>
          {apidata.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.room}</td>
                <td>{e.arrival}</td>
                <td>{e.departure}</td>
                <td>{e.adult}</td>
                <td>{e.children}</td>
                <td>
                  {/* <button
                    onClick={() => mydel(e.id)}
                    style={{ border: "none" }}
                  >
                    Delete
                  </button> */}
                  <Button variant="primary" onClick={()=> mydel(e.id)}>
                 Delete
                </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow(), setEditdata(e);
                    }}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

   
{/* add form */}
      <Modal show={addshow} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add data from</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="from">
            <form action="">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                value={frminp.name}
                onChange={changeinput}
              />
              <br />

              <label htmlFor="">Email Address</label>
              <input
                type="text"
                name="email"
                value={frminp.email}
                onChange={changeinput}
              />
                            <br />

              <label htmlFor="">Phone no</label>
              <input
                type="text"
                name="phone"
                value={frminp.phone}
                onChange={changeinput}
              />
              <br />

              <label htmlFor="room">Room</label>
              <select name="room" value={frmupdate.room} onChange={changeinput}>
                <option value="Expensiveroom">Expensive room</option>
                <option value="standardroom">Standard Room</option>
                <option value="deluxeroom">Deluxe Apartment</option>
                <option value="singleroom">Single Room</option>
              </select>
                            <br />


              <label htmlFor="">Arrival Date</label>
              <input
                type="date"
                name="arrival"
                value={frminp.arrival}
                onChange={changeinput}
              />
              <br />

              <label htmlFor="">Departure Date</label>
              <input
                type="date"
                name="departure"
                value={frminp.departure}
                onChange={changeinput}
              />
                            <br />


              <label htmlFor="adults">Adults</label>
              <select name="adult" value={frminp.adult} onChange={changeinput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <br />

              <label htmlFor="children">Children</label>
              <select
                name="children"
                value={frminp.children}
                onChange={changeinput}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitfrom(), handleAddClose();
            }}
          >
            Submit Form
          </Button>
        </Modal.Footer>
      </Modal>

{/* update form */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="from">
            <form action="" >
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                value={editdata.name}
                onChange={hinput}
              />
              <br />
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                name="email"
                value={editdata.email}
                onChange={hinput}
              />
              <br/>
              <label htmlFor="">Phone no</label>
              <input
                type="text"
                name="phone"
                value={editdata.phone}
                onChange={hinput}
              />
              <br />

              <label htmlFor="room">Room</label>
              <select name="room" value={editdata.room} onChange={hinput}>
                <option value="Expensiveroom">Expensive room</option>
                <option value="standardroom">Standard Room</option>
                <option value="deluxeroom">Deluxe Apartment</option>
                <option value="singleroom">Single Room</option>
              </select>
              <br/>

              <label htmlFor="">Arrival Date</label>
              <input
                type="date"
                name="arrival"
                value={editdata.arrival}
                onChange={hinput}
              />
              <br />

              <label htmlFor="">Departure Date</label>
              <input
                type="date"
                name="departure"
                value={editdata.departure}
                onChange={hinput}
              />
              <br/>

              <label htmlFor="adults">Adults</label>
              <select name="adult" value={editdata.adult} onChange={hinput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <br />

              <label htmlFor="children">Children</label>
              <select
                name="children"
                value={editdata.children}
                onChange={hinput}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{finalsubmit(),handleClose()}}>
            Update Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Crud;
