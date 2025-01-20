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
const Room = () => {
  return (
    <>
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
        <div id="footer" style={{marginTop:"2200px"}}>
         {/* <h5>&copy; 2025, Clifton Hotel. All Rights Reserved</h5>
         <h5>Made with &hearts;  by Praveen Choudhary</h5> */}
        </div>
        
      
    </>
  );
};
export default Room;
