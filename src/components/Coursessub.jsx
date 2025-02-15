import React, { useState } from "react";
import { BsArrowUpLeft } from "react-icons/bs";
import "./courses.css";
import { useInView } from "react-intersection-observer";

const Courses = () => {
    const [activeBox, setActiveBox] = useState(null);
    const [hoveredBox, setHoveredBox] = useState(null); // Track which box is hovered

    const boxData = [
      {
        id: 1,
        title: "SSC",
        courses: "Class I-X",
        color: "#3ECD5E",
        content:
          "Grades 1-10: Tailored support for foundational subjects and skills to ensure a strong academic base. Our tutoring covers essential areas including Mathematics, Science, Social Studies, and English, tailored to the SSC curriculum to foster a deep understanding and academic success.",
      },
      {
        id: 2,
        title: "CBSE",
        courses: "Class I-X",
        color: "#E44002",
        content:
          "Grades 1-10: Comprehensive tutoring that aligns with the CBSE curriculum, providing students with a strong grasp of essential subjects and skills.1st and 2nd Year: Focused preparation for the senior secondary exams, with expert support in subjects such as Mathematics, Science, and English, along with tailored strategies for board exam success.",
      },
      {
        id: 3,
        title: "ISC",
        courses: "Class I-X",
        color: "#952AFF",
        content:
          "Grades 1-10: Solid foundation in ISC-approved subjects, fostering strong academic skills and knowledge.1st and 2nd Year: Advanced tutoring for ISC intermediate students, focusing on thorough subject comprehension and exam readiness.",
      },
      {
        id: 4,
        title: "ICSE",
        courses: "Class I-X",
        color: "#CD3E94",
        content:
          "Grades 1-10: Support across core subjects following the ICSE curriculum, ensuring a well-rounded education and preparedness for future academic challenges.1st and 2nd Year: Detailed coaching for the ICSE intermediate exams, emphasizing critical subject areas and effective exam preparation techniques.",
      },
      {
        id: 5,
        title: "IGCSE",
        courses: "Class I-X",
        color: "#4C49EA",
        content:
          "Grades 1-10: Global curriculum support to build a strong academic base across various subjects.1st and 2nd Year: Specialized tutoring for IGCSE senior students, preparing them for international exams with expert guidance in their chosen subjects.",
      },
      {
        id: 6,
        title: "Class XI-XII",
        courses: "Class XI-XII",
        color: "#F9B234",
        content:
          "1st Year: Specialized guidance in core subjects such as Mathematics, Physics, Chemistry, and Biology, alongside skill-building in critical thinking and problem-solving, to prepare students for their second year.2nd Year: Advanced tutoring in preparation for board exams, focusing on in-depth subject knowledge, exam strategies, and revision techniques to maximize performance and ensure a successful completion of intermediate studies.",
      },
      {
        id: 7,
        title: "EAMCET",
        courses: "Intermediate",
        color: "#00FFFF",
        content: "Content for Box 7",
      },
      {
        id: 8,
        title: "JEE MAINS",
        courses: "Intermediate",
        color: "#000",
        content: "Content for Box 8",
      },
    ];

    const handleClick = (id) => {
        setActiveBox(id);
    };

    const closeSubBox = () => {
        setActiveBox(null);
    };
    
       const { ref: coursesRef1, inView: inView1 } = useInView({
         triggerOnce: true,
         threshold: 0.1, // Adjust this threshold if necessary
       });

    return (
      <div className="container6" id="courses">
        <div
         
          ref={coursesRef1}
          className={`box-container6 ${inView1 ? "visible" : ""}`} // Fixed class assignment
          data-direction="bottom"
        >
          {boxData.map((box) => (
            <div
              key={box.id}
              className="box6"
              onClick={() => handleClick(box.id)}
              onMouseEnter={() => setHoveredBox(box.id)} // Set hover state
              onMouseLeave={() => setHoveredBox(null)} // Reset hover state
              style={{
                background: hoveredBox === box.id ? box.color : "",
                color: hoveredBox === box.id ? "#fff" : "", // Apply box's color on hover
                cursor: "pointer",
              }}
            >
              <span style={{ backgroundColor: box.color }}>
                <p style={{ fontSize: "1.3em", paddingTop: "25px" }}>
                  <BsArrowUpLeft />
                </p>
              </span>
              <h2>{box.title}</h2>
            </div>
          ))}
        </div>

        {activeBox && (
          <>
            <div className="overlay" onClick={closeSubBox}></div>
            <div className="subbox">
              <div className="subbox-content">
                <span className="close" onClick={closeSubBox}>
                  &times;
                </span>

                <main className="app-1">
                  <section className="app__section white">
                    <h1 className="app__title">Join our community</h1>
                    {/* <h2 className="app__subtitle text-bright-yellow">
                      30-day, hassle-free money back guarantee
                    </h2> */}
                    <p>{boxData.find((box) => box.id === activeBox).content}</p>
                  </section>
                  <section className="app__section cyan">
                    <h2 className="app__subtitle">
                      {boxData.find((box) => box.id === activeBox).courses}
                    </h2>
                    {/* <p className="app__price">
                      <span className="app__price__value">&dollar;29</span> per
                      month
                    </p> */}
                    <p>Full access for less than &dollar;1 a day</p>
                    <button className="app__button">Connect</button>
                  </section>
                  <section className="app__section cyan-light">
                    <h2 className="app__subtitle">Why Us</h2>
                    <ul>
                      <li>Tutorials by industry experts</li>
                      <li>Peer &amp; expert test review</li>
                      <li>Intensive Learning</li>
                      <li>Access to our GitHub repos</li>
                    </ul>
                  </section>
                </main>
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default Courses;
