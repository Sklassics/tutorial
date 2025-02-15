import React from "react";
  import { useInView } from "react-intersection-observer";

import Learncenter1 from "../assets/Learncenters.png";
import Learncenter2 from "../assets/Learncenter.png";

const CustomResponsiveLayoutX = () => {
 
       const { ref: centersRef1, inView: inView1 } = useInView({
         triggerOnce: true,
         threshold: 0.1, // Adjust this threshold if necessary
       });


  return (
    <>
      <div
        ref={centersRef1}
        className={`scroll-for ${inView1 ? "visible" : ""}`} // Fixed class assignment
        data-direction="bottom"
      >
        <h1
          // Ref to ensure this element is scrolled into view
          id="centers"
        >
          Our Learning Centers
        </h1>
        <div className="containerxy">
          <div className="cardxy">
            <div className="card-imagexy">
              <img src={Learncenter1} alt="Card 1" />
            </div>
            <div className="card-contentxy">
              <h3 style={{ fontSize: "2rem" }}>Sklassics</h3>
              <p>
                Location:This is the content of the second card. It can have
                more descriptive text.
              </p>
            </div>
            <span style={{ margin: "0 auto", marginBottom: "0.4rem" }}>
              <a href="https://sklassics.com/" target="_blank">
                <button className="animated-button">View More</button>
              </a>
            </span>
          </div>
          <div className="cardxy">
            <div className="card-imagexy">
              <img src={Learncenter2} alt="Card 2" />
            </div>
            <div className="card-contentxy">
              <h3 style={{ fontSize: "2rem" }}>Sklassics</h3>
              <p>
                Location: is the content of the second card. It can have more
                descriptive text.
              </p>
            </div>
            <span style={{ margin: "0 auto", marginBottom: "0.4rem" }}>
              <a href="https://sklassicstech.com/" target="_blank">
                <button className="animated-button">View More</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomResponsiveLayoutX;
