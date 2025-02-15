
/* eslint-disable no-unused-vars */
import React from "react";
import "./BoxComponent.css";
import Ai3 from "../assets/Ai4.jpg";
import Ai2 from "../assets/childrens1.jpg";
import Ai1 from "../assets/parent2.jpg";
import { useInView } from "react-intersection-observer";
const BoxComponent = () => {
    const { ref: subRef1, inView: inView1 } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Adjust this threshold if necessary
    });
  return (
    <div
      ref={subRef1}
      className={`box-2 ${inView1 ? "visible" : ""}`} // Fixed class assignment
      data-direction="bottom"
    >
      <div className="layout-container">
        <div className="left-section">
          <h2 className="title">01</h2>
          <div className="vertical-line"></div>
          <p className="section-content" style={{ textAlign: "left" }}>
            Sklassics is a premier tutoring company offering both online and
            offline education, delivering a personalized learning experience
            that caters to the diverse needs of today’s students. With a team of
            expert trainers, Sklassics ensures high-quality instruction across
            various subjects, empowering students to excel, whether they're
            attending interactive online sessions or offline sessions.
          </p>
        </div>

        <div className="image-wrapper">
          <img src={Ai3} alt="Placeholder" className="display-image" />
        </div>

        <div className="right-section">
          <h2 className="title">02</h2>
          <div className="vertical-line"></div>
          <p className="section-content" style={{ textAlign: "left" }}>
            What makes Sklassics truly stand out is its innovative AI-driven
            exam preparation application. This cutting-edge tool revolutionizes
            the way students prepare for their exams, providing customized
            learning paths, intelligent feedback, and adaptive tests based on
            individual performance. By integrating AI, Sklassics enhances the
            educational journey, ensuring that students are fully equipped to
            tackle competitive exams with confidence and precision.
          </p>
        </div>
      </div>
      <div className="layout-container">
        <div className="image-wrapper">
          <img src={Ai2} alt="Placeholder" className="display-image" />
        </div>
        <div className="right-section">
          <p className="section-content" style={{ textAlign: "left", paddingTop:"4rem" }}>
            Whether learning from the comfort of home or in an immersive
            classroom environment, students benefit from tailored guidance by
            industry experts, up-to-date knowledge, and flexible learning
            options. With a mission to make education more accessible and
            effective, Sklassics is committed to helping students reach their
            full potential in the most efficient way possible.
          </p>
          <h2 className="title">03</h2>
          <div className="vertical-line"></div>

          
          
          <p className="section-content" style={{ textAlign: "left" }}>
            In combining traditional teaching excellence with advanced AI
            technology, Sklassics ensures that every learner receives the best
            tools and support needed for academic and professional
            success—anytime, anywhere.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={Ai1} alt="Placeholder" className="display-image" />
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
