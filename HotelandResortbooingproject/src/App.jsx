import './App.css'
import Room from "./Room.jsx";
import Reservation from "./RoomReservation.jsx";
import About from "./About.jsx";
import Deals from "./Deals.jsx";
import Contact from "./Contact.jsx";
import Singup from "./Singup.jsx";
import Login from "./Login.jsx";
import { Routes,Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import Crud from "./Crud.jsx";
// import { Header } from "./Layout.jsx";
import {Navbar , Footer} from "./Navbar.jsx"

function App() {

  let local = useLocation()

  let auth = local.pathname ==='/singup' || local.pathname === '/login'


  return (
    <>
    {!auth && <Navbar/>}
    <Routes>
      {/* <Route path="/" element={<Navbar/>} > */}
      <Route index element={<Home/>} />
      <Route path="room" element={<Room/>} />
      <Route path="Reservation" element={<Reservation/>} />
      <Route path="about" element={<About/>} />
      <Route path="deals" element={<Deals/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="singup" element={<Singup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="crud" element={<Crud/>} />
      <Route path="footer" element={<Footer/>}/>

      
      {/* </Route> */}

    </Routes>
    {!auth && <Footer/>}

    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Room/>
    <Reservation/>
    <About/>
    <Deals/>
    <Contact/>
    <Footer/> */}
    {/* <Singup/>
    <Login/>
    <Crud/> */}

    </>
  )
}

export default App
