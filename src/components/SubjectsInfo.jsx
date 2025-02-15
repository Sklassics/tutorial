import React from "react";
import { useInView } from "react-intersection-observer";
// import "./MainBox.css";

const MainBox = () => {
  const { ref: subRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this threshold if necessary
  });

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "4rem", fontSize: "2.5rem" }}
      >
        Subjects
      </h1>
      <div
        ref={subRef1}
        className={`main-box ${inView1 ? "visible" : ""}`} // Fixed class assignment
        data-direction="bottom"
      >
        <div className="sub-row">
          <div className="box-row">
            <h3>Tutors By Category</h3>
            <hr />
            <ul>
              <li>Nursery/Preschool</li>
              <li>School</li>
              <li>Science</li>
              <li>Social</li>
              <li>M.P.C</li>
              <li>B.P.C</li>
              <li>Accounting & Commerce</li>
            </ul>
          </div>

          <div className="box-row">
            <h3>Tutors By Subject</h3>
            <hr />
            <ul>
              <li>Maths</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>English</li>
              <li>Biology</li>
              <li>Accounting</li>
              <li>Economics</li>
            </ul>
          </div>

          <div className="box-row">
            <h3>Other Tutors</h3>
            <hr />
            <ul>
              <li>Spoken English</li>
              <li>EAMCET</li>
              <li>JEE Main</li>
              <li>JEE Advanced</li>
              <li>NEET</li>
              <li>TSRJC</li>
              <li>APRJC</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBox;
