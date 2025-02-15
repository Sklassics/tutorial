import React, { useState } from "react";
import Swal from "sweetalert2";
// import Socialmedia from "./Socialmedia";
import { useInView } from "react-intersection-observer";

const ContactPage = () => {
  const [role, setRole] = useState(""); // State to track whether student or tutor is selected

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Adding the Web3Forms access key
    formData.append("access_key", "1953910b-0a50-495f-afa6-2529010c9bb5");

    const object = Object.fromEntries(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      }).then((res) => res.json());

      // Show SweetAlert notification based on the response
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We have received your message and will get back to you shortly.",
        });
        event.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error submitting the form.",
      });
    }
  };
     const { ref: contactRef1, inView: inView1 } = useInView({
       triggerOnce: true,
       threshold: 0.1, // Adjust this threshold if necessary
     });

  return (
    <section>
      <div
        
        ref={contactRef1}
        className={`cnt-layout ${inView1 ? "visible" : ""}`} // Fixed class assignment
        data-direction="bottom"
      >
        <div className="contact-us">
          <div className="container3">
            <div className="title" style={{ fontSize: "2rem" }}>
              Contact Us
            </div>
            <p>Please write to us for any queries below</p>
            <form className="form" onSubmit={onSubmit}>
              <input
                required
                className="input"
                type="text"
                name="fullName"
                placeholder="Full Name"
              />
              <input
                required
                className="input"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <input
                required
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                required
                className="input"
                type="text"
                name="location"
                placeholder="Location"
              />

              {/* New dropdown for role selection */}
              <select
                required
                className="input"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
              </select>

              {/* Conditionally show Class field if Student is selected */}
              {role === "Student" && (
                <input
                  required
                  className="input"
                  type="text"
                  name="class"
                  placeholder="Class"
                />
              )}

              {/* Conditionally show Subjects field if Tutor is selected */}
              {role === "Tutor" && (
                <input
                  required
                  className="input"
                  type="text"
                  name="subjects"
                  placeholder="Subjects"
                />
              )}

              <textarea
                className="input"
                name="message"
                placeholder="Description"
                style={{ height: "80px" }}
              />
              <button className="login-button" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="cnt-vertical-line"></div>
          <div className="contact-us-content">
            <div className="cnt-info">
              <div className="cnt-add-info">
                <div className="cnt-row">
                  <div className="cnt-col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/14025/14025691.png"
                      alt="location"
                      width="40px"
                    />
                    <h3>Address</h3>
                    <p>1-3-20/6p, Gopal Reddy Nagar 500012</p>
                  </div>
                  <div className="cnt-col">
                    <a
                      href="tel:+917731801847"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/16617/16617786.png"
                        alt="Phone number"
                        width="40px"
                      />

                      <h3>Contact Number</h3>
                      <p>+91 6304889220</p>
                    </a>
                  </div>
                  <div className="cnt-col">
                    <a
                      href="mailto:asiklucky5@gmail.com"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png"
                        alt="email"
                        width="40px"
                      />
                      <h3>E-mail</h3>
                      <p>Sklassicstutoring@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
