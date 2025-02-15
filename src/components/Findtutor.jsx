import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Findtutor = () => {
  
       const { ref: findRef1, inView: inView1 } = useInView({
         triggerOnce: true,
         threshold: 0.1, // Adjust this threshold if necessary
       });
  return (
    <div>
      {/* <div className="tutoring-container"> */}
      {/* <h1>Find a Home Tutor Near You</h1>
        <p>
          If you are a student/parent looking for a home tutor near you, please
          click the button below to post your requirements and get a free demo
          class from the best home tutors near you.
        </p>
        <button className="tutor-button">I NEED A HOME/ONLINE TUTOR</button>

        <h2>For Tutors</h2>
        <p>
          If you are a tutor/teacher interested in teaching part-time and
          looking for students who need home tuition, please click the button
          below to register as a home tutor for free.
        </p>
        <button className="tutor-button">Register as a tutor/teacher</button> */}
      {/* </div> */}
      <div
        
        ref={findRef1}
        className={`tutoring-container1 ${inView1 ? "visible" : ""}`} // Fixed class assignment
        data-direction="bottom"
      >
        <div className="find-row">
          <h1>Find a Home Tutor Near You</h1>
          <p>
            If you are a student/parent looking for a home tutor near you,
            please click the button below to post your requirements and get a
            free demo class from the best home tutors near you.
          </p>

          <button className="tutor-button">
            <a
              href="https://wa.me/916305490580?text=Online%20Tutor%20for%20visiting%20Sklassics%20Tutorial%20Point"
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              I Need A Home/Online Tutor
            </a>{" "}
            <span>
              {" "}
              <BsArrowRightShort />
            </span>
          </button>
        </div>
        <div className="find-row">
          <h2>For Tutors</h2>
          <p>
            If you are a tutor/teacher interested in teaching part-time and
            looking for students who need home tuition, please click the button
            below to register as a home tutor for free.
          </p>
          <button className="tutor-button">
            <a
              href="https://wa.me/916305490580?text=tutor%20for%20visiting%20Sklassics%20Tutorial%20Point"
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Register as a tutor/teacher
            </a>{" "}
            <span>
              {" "}
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Findtutor
