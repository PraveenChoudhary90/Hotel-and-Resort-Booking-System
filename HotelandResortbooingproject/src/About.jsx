import image from "./assets/pic6.jpg";
import image1 from "./assets/pic8.jpg";

const About = () => {
  return (
    <>
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
    </>
  );
};
export default About;
