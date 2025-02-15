import {useState, useEffect} from 'react'
// import { testimonials } from "./data";
import Profile from '../assets/profile.png'

import './Test.css'


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing experience!",
    stars: 5,
    img: Profile,
  },
  {
    id: 2,
    name: "Sarah Mason",
    review: "Great course, highly recommend!",
    stars: 4,
    img: Profile,
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
    img: Profile,
  },
  {
    id: 5,
    name: "Nathan Baker",
    review: "Good value for money.",
    stars: 4,
    img: Profile,
  },
  {
    id: 6,
    name: "Liam Scott",
    review: "Highly recommended for beginners.",
    stars: 5,
    img: Profile,
  },
  {
    id: 7,
    name: "Olivia Harris",
    review: "Practical and insightful.",
    stars: 4,
    img: Profile,
  },
  {
    id: 8,
    name: "Noah Moore",
    review: "Fantastic support throughout!",
    stars: 5,
    img: Profile,
  },
  {
    id: 9,
    name: "Sophia Lee",
    review: "Loved the hands-on approach.",
    stars: 5,
    img: Profile,
  },
  {
    id: 10,
    name: "James Brown",
    review: "Could use more advanced content.",
    stars: 3,
    img: Profile,
  },
  {
    id: 11,
    name: "Sophia Lee",
    review: "Loved the hands-on approach.",
    stars: 5,
    img: Profile,
  },
  {
    id: 12,
    name: "James Brown",
    review: "Could use more advanced content.",
    stars: 3,
    img: Profile,
  },
  {
    id: 13,
    name: "Caroline White",
    review: "Life-changing course!",
    stars: 5,
    img: Profile,
  },
  {
    id: 14,
    name: "Caroline White",
    review: "Life-changing course!",
    stars: 4,
    img: Profile,
  },
];



const Testreview = () => {
  const [people] = useState(testimonials);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prev = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const next = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(next, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity:
                personIndex >= currentPerson && personIndex < currentPerson + 2
                  ? 1
                  : 0,
              visibility:
                personIndex >= currentPerson && personIndex < currentPerson + 2
                  ? "visible"
                  : "hidden",
            }}
            key={person.id}
          >
            <h5 className="name">{person.name}</h5>
            <img src={person.img} alt={person.name} className="person-img" />
            <p>{"⭐".repeat(person.stars)}</p>
            <p className="title-review">{person.review}</p>
          </article>
        );
      })}
      <button className="prev" onClick={prev}>
        &lt;
      </button>
      <button className="next" onClick={next}>
        &gt;
      </button>
    </section>
  );
};

export default Testreview;
