import React, { useState, useEffect } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.png";
import img3 from "../img/img6.png";
import img4 from "../img/img3.png";

const Carousel = () => {
  const images = [img3,img2,img4,img1];
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slideshow-container" style={{paddingTop:"90px"}}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
        />
        <div className="company-details">
          {/* <h2>{currentCompany?.name}</h2> */}
          {/* <p>{currentCompany?.description}</p> */}
        </div>
      </div>
    </>
  );
};

export default Carousel;
