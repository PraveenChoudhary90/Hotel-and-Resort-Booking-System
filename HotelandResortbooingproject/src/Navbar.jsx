
import { Link, Outlet } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div id="Navbar" >
      <input type="checkbox" id="click" />


            <div id="nav1" >
       <h3 style={{marginBottom:"20px"}}>CLIFTON HOTEL & RESORT</h3>
        </div>
        <div id="nav2">

        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link  to="room">ROOMS</Link></li>
        <li><Link to="Reservation">ROOM-RESERVATION</Link></li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="deals" >DEALS</Link></li>
        <li><Link to="contact" >CONTACT</Link></li>
        <li><Link to="singup">SING-UP</Link></li>
        {/* <li><Link to="crude">CRUDE</Link></li> */}
        <li><Link to="login" >LOGIN</Link></li>
          <label for="click"><Link class="fa-solid fa-bars"></Link></label>

        </ul>

        </div>  
        </div>
        <main><Outlet/></main>


         
        
        
        </>
    )
}
import React from 'react'

function Footer() {
  return (
     <div id="footer">
         <h5>&copy; 2025, Clifton Hotel. All Rights Reserved</h5>
         <h5>Made with &hearts;  by Praveen Choudhary</h5>
        </div>
  )
}
export {Navbar,Footer}