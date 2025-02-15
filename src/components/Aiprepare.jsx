import React from 'react';
import Aibg from "../assets/aboutcheck.jpg";
import { useInView } from "react-intersection-observer";

const Aiprepare = () => {
      const { ref: aiRef1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust this threshold if necessary
      });
  return (
    <div>
      {/* Ai image */}
      <div
        
        ref={aiRef1}
        className={`responsive-container ${inView1 ? "visible" : ""}`} // Fixed class assignment
        data-direction="bottom"
      >
        <img
          src={Aibg} // Replace with your image URL
          alt="Responsive"
          className="responsive-image"
        />
      </div>
    </div>
  );
}

export default Aiprepare
