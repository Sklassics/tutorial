/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import React from 'react';
// import './Testimonials.css';
import { BsSourceforge } from "react-icons/bs";

// Array of 10 reviews with messages, star ratings, and image sizes
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing experience!",
    stars: 5,
    img: "https://static.vecteezy.com/system/resources/previews/043/473/489/non_2x/smiling-teenage-boy-with-laptop-standing-isolated-on-transparent-png.png",
  },
  {
    id: 2,
    name: "Sarah Mason",
    review: "Great course, highly recommend!",
    stars: 4,
    img: "https://t4.ftcdn.net/jpg/06/32/00/19/360_F_632001968_LFfifyXrdtcThDxQK5l8XdFvfIowakfr.jpg",
  },
  {
    id: 3,
    name: "Maria Silva",
    review: "Learned a lot!",
    stars: 4,
    img: "https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?size=626&ext=jpg&ga=GA1.1.1890765304.1711517804&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Caroline White",
    review: "Life-changing course!",
    stars: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabBatO27hMnloMAftt0RUGZ6rEOXhTCQ3DA&s",
  },
  {
    id: 5,
    name: "Nathan Baker",
    review: "Good value for money.",
    stars: 4,
    img: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCjNdv_uIFvWVuNMBAm2bhb28JlbMQT5CPA&usqp=CAU",
  },
  {
    id: 6,
    name: "Liam Scott",
    review: "Highly recommended for beginners.",
    stars: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDV4QZBEZvzzuqZY5kv3O0kiFNNflf6IRIXg&s",
  },
  {
    id: 7,
    name: "Olivia Harris",
    review: "Practical and insightful.",
    stars: 4,
    img: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsohi6DFgIyjFDflK2qRB8o6R1wOcj17B54Q&s",
  },
  {
    id: 8,
    name: "Noah Moore",
    review: "Fantastic support throughout!",
    stars: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7l8ysvoK0kSdPJ9JZZ3swfU9kJNkGnUpdQ&s",
  },
  {
    id: 9,
    name: "Sophia Lee",
    review: "Loved the hands-on approach.",
    stars: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtxSvqIKGN_mACTeaA7BvO_Zgh2HQdJFIQg&s",
  },
  {
    id: 10,
    name: "James Brown",
    review: "Could use more advanced content.",
    stars: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeQFcn1Etgv_3aa1i7EKq5l864b6lGqYtbw&s",
  },
  {
    id: 11,
    name: "Sophia Lee",
    review: "Loved the hands-on approach.",
    stars: 5,
    img: "https://t4.ftcdn.net/jpg/06/72/38/35/240_F_672383555_nkEfqbb5IgtMPPkWyC68iwZfsQojXGAl.jpg",
  },
  {
    id: 12,
    name: "James Brown",
    review: "Could use more advanced content.",
    stars: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLCXZFhB_CssMICMwiLpau5wE6UmNTLAhxA&s",
  },
  {
    id: 13,
    name: "Caroline White",
    review: "Life-changing course!",
    stars: 5,
    img: "https://t4.ftcdn.net/jpg/09/30/17/77/240_F_930177747_PB7lY8Ttam7qy7rCMCiqoxJaspJyATLa.jpg",
  },
  {
    id: 14,
    name: "Sophia Lee",
    review: "Loved the hands-on approach.",
    stars: 5,
    img: "https://t4.ftcdn.net/jpg/08/51/05/05/240_F_851050538_i1xBuMxBmVOKusGqlXdrwWaPF0k8XA0Q.jpg",
  },
];

// Manually assign random positions for the 10 testimonials
const positions = [
  { left: "-10%", top: "5%" },
  { left: "50%", top: "10%" },
  { left: "5%", top: "80%" },
  { left: "70%", top: "50%" },
  { left: "20%", top: "60%" },
  { left: "100%", top: "-10%" },
  { left: "40%", top: "80%" },
  { left: "80%", top: "25%" },
  { left: "15%", top: "-10%" },
  { left: "65%", top: "75%" },
  { left: "25%", top: "20%" },
  { left: "85%", top: "85%" },
  { left: "0%", top: "45%" },
  { left: "75%", top: "-10%" },
];

const sizes = [
  { width: "120px", height: "120px" },
  { width: "100px", height: "100px" },
  { width: "110px", height: "110px" },
  { width: "75px", height: "75px" },
  { width: "90px", height: "90px" },
  { width: "115px", height: "115px" },
  { width: "95px", height: "95px" },
  { width: "125px", height: "125px" },
  { width: "105px", height: "105px" },
  { width: "130px", height: "130px" },
  { width: "90px", height: "90px" },
  { width: "115px", height: "115px" },
  { width: "70px", height: "70px" },
  { width: "105px", height: "105px" },
];


const reviews = [
  {
    id: 1,
    name: "Hannah Morales",
    title: "Business Owner",
    rating: 5,
    image:
      "https://static.vecteezy.com/system/resources/previews/043/473/489/non_2x/smiling-teenage-boy-with-laptop-standing-isolated-on-transparent-png.png",
    review:
      "The experience of working with Salford & Co was truly satisfying. They were very responsive to our needs and always tried hard to provide the best results. Thank you for your cooperation!",
  },
  {
    id: 2,
    name: "Hannah Morales",
    title: "Business Owner",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?size=626&ext=jpg&ga=GA1.1.1890765304.1711517804&semt=ais_hybrid",
    review:
      "experience of working with Salford & Co was truly satisfying. They were very responsive to our needs and always tried hard to provide the best results. Thank you for your cooperation!",
  },
  {
    id: 3,
    name: "Hannah Morales",
    title: "Business Owner",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?size=626&ext=jpg&ga=GA1.1.1890765304.1711517804&semt=ais_hybrid",
    review:
      "The experience of with Salford & Co was truly satisfying. They were very responsive to our needs and always tried hard to provide the best results. Thank you for your cooperation!",
  },
  // Add more reviews here...
];


    

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [reviews.length]);
    
    // const { name, title, rating, image, review } = reviews[currentIndex];
    return (
      <>
        <div className="help-you">
          <p>JOIN AS A TUTOR</p>
          <h2>
            <span style={{paddingRight:"0.8em"}}>
              <BsSourceforge />
            </span>
            We help students and tutors find each other{" "}
            <span>
              <BsSourceforge />
            </span>
          </h2>
        </div>
        <div className="testimonials-container">
          <h2 className="heading">Join us to begin your journey</h2>

          <div className="testimonials-circle">
            {testimonials.map((testimonial, index) => {
              const randomPosition = positions[index];
              const randomSize = sizes[index];
              return (
                <div
                  className="testimonial-item"
                  key={testimonial.id}
                  style={{ ...randomPosition, ...randomSize }}
                >
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="testimonial-img"
                    style={randomSize}
                  />
                  <div className="testimonial-review">
                    <p>{"⭐".repeat(testimonial.stars)}</p>
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="review-box">
            <h1>Hello</h1>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span className="half-star">★</span> {/* Half Star */}
            </div>
            <p>
              This is an amazing course! I highly recommend it to anyone looking
              to improve their skills.
            </p>
          </div>
        </div>
      </>
    );
};

export default Testimonials;
