import React, { useEffect, useState } from "react";
import Rightmark from "../assets/checkmark.png";
import BoxComponent from "./About";
import { useInView } from "react-intersection-observer";
import Aboutimg from '../assets/Aboutimg.png'

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

      const { ref: subRef1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust this threshold if necessary
      });


  return (
    <section
      id="About"
      ref={subRef1}
      className={`about-section ${inView1 ? "visible" : ""}`} // Fixed class assignment
      data-direction="bottom"
    >
      <div className={`about-box ${isVisible ? "slide-up" : ""}`}>
        <div className="row-size">
          <div className="left-side-image">
            <img
              src={Aboutimg}
              alt="About Sklassics"
            />
          </div>
          <div className="right-side-content">
            <div className="content-about">
              <h1>About Sklassics</h1>
              <h3>
                India's best online & offline tuition website for quality
                education!
              </h3>
              <p className="sub-line">
                We are committed to provide personalised online classes that
                cater to the unique learning needs of each student.
              </p>
              <ul>
                <li>
                  <p>
                    <img
                      src={Rightmark}
                      alt="right mark"
                      width="40px"
                      height="40px"
                    />
                    Expert Trainers
                  </p>
                </li>
                <li>
                  <p>
                    <img
                      src={Rightmark}
                      alt="right mark"
                      width="40px"
                      height="40px"
                    />
                    AI Exam Preparation
                  </p>
                </li>
                <li>
                  <p>
                    <img
                      src={Rightmark}
                      alt="right mark"
                      width="40px"
                      height="40px"
                    />
                    Interactive Learning Experience
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BoxComponent />
    </section>
  );
};

export default Aboutus;
