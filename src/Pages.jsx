import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Testreview from "./components/Testmonials";
// import FlatCard from "./components/Flatecard";

const Carousel = React.lazy(() => import("./components/Carousel"));
const Aboutus = React.lazy(() => import("./components/Aboutus"));
const MainBox = React.lazy(() => import("./components/SubjectsInfo"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const Nav = React.lazy(() => import("./components/Nav"));
const Socialmedia = React.lazy(() => import("./components/Socialmedia"));
const Testimonials = React.lazy(() => import("./components/Reviews"));
const Courses = React.lazy(() => import("./components/Coursessub"));
const Footer = React.lazy(() => import("./components/Footer"));
const CardSection = React.lazy(() => import("./components/Cards"));
const Findtutor = React.lazy(() => import("./components/Findtutor"));
const Aiprepare = React.lazy(() => import("./components/Aiprepare"));
const CustomResponsiveLayoutX = React.lazy(() =>
  import("./components/Learningcenters")
);

function FullLayout() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const learningRef = useRef(null);
  const coursesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    courses: coursesRef,
    learning: learningRef,
    blog: blogRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    if (sections[section]?.current) {
      const navbar = document.querySelector("nav"); // Adjust the selector to match your navbar
      const headerHeight = navbar ? navbar.offsetHeight : 0; // Get the height of the navbar
      const yOffset = -headerHeight; // Calculate the offset to prevent content overlap
      const element = sections[section].current;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  // Scroll to home section on page reload or mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure component is mounted

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Loader timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
        <p style={{ textAlign: "right", color: "#5e0791" }}>Tutorial Point</p>
        {/* You can add a spinner or any other loading animation here */}
      </div>
    );
  }

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Nav scrollToSection={scrollToSection} />

        <section ref={homeRef} className="section home">
          <Carousel />
        </section>
        <section>
          <Findtutor />
        </section>

        <section ref={aboutRef} className="section about">
          <Aboutus />
        </section>

        <section ref={coursesRef} className="section courses">
          <Courses />
        </section>

        <section>
          <CardSection />
        </section>

        <section ref={learningRef} className="section centers">
          <CustomResponsiveLayoutX />
        </section>

        <section>
          <Testimonials />
          <Testreview />
        </section>

        <section ref={contactRef} className="section contact">
          <Socialmedia />
        </section>

        <section>
          <ContactPage />
        </section>

        <section>
          <Footer />
        </section>
      </Suspense>
    </div>
  );
}

export default FullLayout;
