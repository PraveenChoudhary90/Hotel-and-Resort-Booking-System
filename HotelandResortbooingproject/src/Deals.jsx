import { Link } from "react-router-dom";
import pic1 from "./assets/blog01.jpg";
import pic2 from "./assets/blog02.jpg";
import pic3 from "./assets/blog03.jpg";
import Singup from "./Singup";
const Deals = () => {
  return (
    <>
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
    </>
  );
};
export default Deals;
