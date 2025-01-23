import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
  const changeinput = (e) => {
    let { name, value } = e.target;
    SetInput({ ...frminp, [name]: value });
  };

  const submitfrom = (e) => {
    e.preventDefault();
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

  function finalsubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/Members/${editdata.id}`,editdata).then(res=>alert("your data is update"))
  }

  return (
    <>
      <table
        border="1px"
        style={{
          marginLeft: "0px",
          marginTop: "100px",
          border: "1px solid black",
        }}
      >
        <thead>
          <th style={{ paddingLeft: "40px" }}>ID</th>
          <th style={{ paddingLeft: "30px"}}>Name</th>
          <th style={{ paddingLeft: "70px" }}>Email</th>
          <th style={{ paddingLeft: "40px" }}>Contact</th>
          <th style={{ paddingLeft: "30px" }}>Rooms</th>
          <th style={{ paddingLeft: "20px"}}>Arrival </th>
          <th style={{ paddingLeft: "30px" }}>Departure</th>
          <th style={{ paddingLeft: "40px" }}>Adults</th>
          <th style={{ paddingLeft: "40px" }}>Children</th>
          <th style={{ paddingLeft: "40px" }}>Delete</th>
          <th style={{ paddingLeft: "20px" }}>Update</th>
        </thead>
        <tbody>
          {apidata.map((e) => {
            return (
              <tr>
                <td style={{ padding: "30px" }}>{e.id}</td>
                <td style={{ padding: "20px"}}>{e.name}</td>
                <td style={{ padding: "30px" }}>{e.email}</td>
                <td style={{ padding: "30px" }}>{e.phone}</td>
                <td style={{ padding: "30px" }}>{e.room}</td>
                <td style={{ padding: "30px", paddingLeft: "30px"}}>
                  {e.arrival}
                </td>
                <td style={{ padding: "30px", paddingLeft: "40px" }}>
                  {e.departure}
                </td>
                <td style={{ padding: "30px", paddingLeft: "60px" }}>
                  {e.adult}
                </td>
                <td style={{ padding: "30px", paddingLeft: "60px" }}>
                  {e.children}
                </td>
                <td style={{ padding: "30px", paddingLeft: "40px" }}>
                  <button
                    onClick={() => mydel(e.id)}
                    style={{ border: "none" }}
                  >
                    Delete
                  </button>
                </td>
                <td style={{ padding: "30px", paddingLeft: "25px" }}>
                  <button
                    onClick={() => {
                      setFrmupdate(true), setEditdata(e);
                    }}
                    style={{ border: "none" }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

  {frmupdate && (
    <div id="from">
        <form action="" onSubmit={finalsubmit}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="name"
            value={frmupdate.name}
            onChange={hinput}
          />
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name="email"
            value={frmupdate.email}
            onChange={hinput}
          />
          <br></br>
          <label htmlFor="">Phone no</label>
          <input
            type="text"
            name="phone"
            value={frmupdate.phone}
            onChange={hinput}
          />
          <label htmlFor="room">Room</label>
          <select name="room" value={frmupdate.room} onChange={hinput}>
            <option value="Expensiveroom">Expensive room</option>
            <option value="standardroom">Standard Room</option>
            <option value="deluxeroom">Deluxe Apartment</option>
            <option value="singleroom">Single Room</option>
          </select>
          <br></br>

          <label htmlFor="">Arrival Date</label>
          <input
            type="date"
            name="arrival"
            value={frmupdate.arrival}
            onChange={hinput}
          />
          <label htmlFor="">Departure Date</label>
          <input
            type="date"
            name="departure"
            value={frmupdate.departure}
            onChange={hinput}
          />
          <br></br>

          <label htmlFor="adults">Adults</label>
          <select name="adult" value={frmupdate.adult} onChange={hinput}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="children">Children</label>
          <select
            name="children"
            value={frmupdate.children}
            onChange={hinput}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <br></br>
          <button>submit</button>
        </form>
      </div>
  )}


      <div id="from">
        <form action="" onSubmit={submitfrom}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="name"
            value={frminp.name}
            onChange={changeinput}
          />
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name="email"
            value={frminp.email}
            onChange={changeinput}
          />
          <br></br>
          <label htmlFor="">Phone no</label>
          <input
            type="text"
            name="phone"
            value={frminp.phone}
            onChange={changeinput}
          />
          <label htmlFor="room">Room</label>
          <select name="room" value={frmupdate.room} onChange={changeinput}>
            <option value="Expensiveroom">Expensive room</option>
            <option value="standardroom">Standard Room</option>
            <option value="deluxeroom">Deluxe Apartment</option>
            <option value="singleroom">Single Room</option>
          </select>
          <br></br>

          <label htmlFor="">Arrival Date</label>
          <input
            type="date"
            name="arrival"
            value={frminp.arrival}
            onChange={changeinput}
          />
          <label htmlFor="">Departure Date</label>
          <input
            type="date"
            name="departure"
            value={frminp.departure}
            onChange={changeinput}
          />
          <br></br>

          <label htmlFor="adults">Adults</label>
          <select name="adult" value={frminp.adult} onChange={changeinput}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

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
          <br></br>
          <button>submit</button>
        </form>
      </div>
    </>
  );
};
export default Crud;
