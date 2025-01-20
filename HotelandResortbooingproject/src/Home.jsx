import image from "./assets/pic6.jpg";
import image1 from "./assets/pic8.jpg";
import img1 from "./assets/pic1.jpg"
import img2 from "./assets/pic2.jpg"
import img3 from "./assets/pic3.jpg"
import img4 from "./assets/pic4.jpg"
import img5 from "./assets/pic5.jpg"
import img6 from "./assets/pic8.jpg"
import img7 from "./assets/pict10.jpg"
import img8 from "./assets/pict19.jpg"
import img9 from "./assets/pict12.jpg"
import img10 from "./assets/pict14.jpg"
import pic1 from "./assets/blog01.jpg";
import pic2 from "./assets/blog02.jpg";
import pic3 from "./assets/blog03.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="back">
        <h1 id="header">Clifton Hotel & Resort</h1>
        <h3 id="header1" style={{padding:"40px",width:"650px"}}>
          Experience nature in its purest form, while enjoying attention to
          detail, indulgent pampering and exceptional cuisine.
        </h3>
       
      </div>
      
         <div id="room">
              <h1 id="header">Our Rooms</h1>
              <h3 id="header1">
                Comfort and elegance come together to offer our guests a stay, that is
                highlighted by disconnecting in a wonderful environment with attention
                to detail.
              </h3>
              </div>
              <div id="room1" >
                <a href="">  <img src={img1} alt="" /><h1>Sunset</h1></a>
                <a href=""><img src={img2} alt="" /><h1>Beach</h1></a>
                <a href=""><img src={img3} alt="" /><h1>Nature vibes</h1></a>
                <a href=""><img src={img4} alt="" /><h1>Nature vibes</h1></a>
                <a href=""><img src={img5} alt="" /><h1>Beach</h1></a>
                <a href=""><img src={img6} alt="" /><h1>Goldan room vibes</h1></a>
                <a href=""><img src={img7} alt="" /><h1>Standard Room</h1></a>
                <a href=""><img src={img8} alt="" /><h1>Deluxe Apartment</h1></a>
                <a href=""><img src={img9} alt="" /><h1>Standard Room</h1></a>       
                <a href=""><img src={img10} alt="" /><h1>Deluxe Apartment</h1></a>       
              </div>
        <div id="footer" style={{marginTop:"2200px"}}></div>

         <div id="from">
        <h1>ROOM RESERVATION</h1>
        <form action="">
            <label htmlFor="">Full Name</label>
            <input type="text"   name="name"  />
            <label htmlFor="">Email Address</label>
            <input type="text"  name="email"  /><br></br>
            <label htmlFor="">Phone no</label>
            <input type="text" name="phone"   />
            <label htmlFor="">Room</label>
  <select>
    <option value="">Standard Room</option>
    <option value="">Deluxe Apartment</option>
    <option value="">single room </option>
    <option value="">Deluxe Apartment</option>
  </select><br></br>
  
            <label htmlFor="">Arrival Date</label>
            <input type="date"   name="arrival"   />
            <label htmlFor="">Departure Date</label>
            <input type="date"  name="departure"  /><br></br>
              <label htmlFor="">Adults</label>
  <select >
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
  </select>

              <label htmlFor="">Children</label>
  <select>
    <option value="">0</option>
    <option value="">1</option>
    <option value="">2</option>
  </select><br></br>
            <button>submit</button>
        </form>
        </div>


        <div id="about">
                <h1>The Grand Hotel</h1>
                <h3>
                  We have been a family business since 1982, striving relentlessly for
                  unparalled customer satisfaction.
                </h3>
              </div>
        
              
                <div id="pic">
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                  <a href="">
                    <img src={image1} alt="" />
                  </a>
                </div>
                <div id="about1">
                <div id="pic1">
                  <h1>24/7 Concierge Service</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    culpa distinctio, praesentium aliquam neque optio rerum est veniam
                    fugiat. Ut et dolores quaerat reiciendis accusantium vitae quis quod
                    iure tempore!
                  </p>
                  </div>
                <div id="pic2">
                  <h1>Safes in All Rooms</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                    repudiandae? Qui, illo id est odio veritatis enim iusto assumenda
                    quae aliquid omnis maxime alias voluptatem, error repudiandae
                    explicabo. Reiciendis, itaque.
                  </p>
                </div>
                </div>


                 <div id="deal">
        <h1>Our Deals</h1>
        <h3>
          Get your favorite deals and save big on your next dream vacation.
        </h3>
      </div>

      <div id="data">
        <div id="book1">
          <img src={pic2} alt="" />
          <h1>Snorkling for Two</h1>
          <h2>$229</h2>
            <button>
              <Link style={{textDecoration:"none"}} to="/singup">Book Now</Link>
            </button>
        </div>
        <div id="book2">
          <img src={pic1} alt="" />
          <h1>Romantic Getaway</h1>
          <h2>$489</h2>
          <h4>
            Free Champagne Roses & Candles Grand Luxury Suite with Beach View
            Exlusive Boat Trip
          </h4>
          
            <button>
              <Link style={{textDecoration:"none"}} to="/singup">Book Now</Link>
            </button>
         
        </div>
        <div id="book3">
          <img src={pic3} alt="" />
          <h1>Ulitmate Package</h1>
          <h2>$1.149</h2>
          <h4>
            Everything You Need Buffet Included All Drinks and Alcoholic
            Beverages Fishing Trips
          </h4>
         
         
            <button ><Link style={{textDecoration:"none"}} to="/singup">Book Now</Link></button>
         
        </div>
      </div>


      <div id="contact">
        <h1>Contact Us</h1>
        <h3>
          If you have any questions, feedback or would like to book a trip,
          please contact us. We'll get back to you asap!
        </h3>
      </div>

      <div id="contact1">
        <div id="address">
          <h1>Address</h1>
          <h2>Oceanview Dr 103 Malé 20292 Maldives</h2>
        </div>
         <div id="phone"> <h1>Phone/Fax</h1>
         <h1>(845) 123-456 0</h1>
         <h1>(845) 123-456 78</h1>
         </div>
        <div id="email">
           <h1>Email</h1>
           <h1>info@cliftonhotel.com</h1>
        </div>
       
        <div id="social">
            <h1>Social</h1>
            <h1>Connect with Us:</h1>
            <div id="social1">
            <h2><i className="fa-brands fa-facebook"></i></h2>
            <h2><i className="fa-brands fa-instagram"></i></h2>
            <h2><i className="fa-brands fa-linkedin"></i></h2>
            <h2><i className="fa-brands fa-twitter"></i></h2>
            </div>
        </div>
      </div>
      <div id="brand">
        <h1>Clifton Hotel And Resort</h1>
      </div>

    </>
  );
};
export default Home;
