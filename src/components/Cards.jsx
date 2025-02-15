import React from 'react';
import { useInView } from 'react-intersection-observer';
// import './CardSection.css';
import Intractive from '../assets/1.png';
import Flexible from "../assets/2.png";
import Personalized from "../assets/3.png";
import InPerson from "../assets/4.png";

const cardsData = [
    {
        title: 'Interactive Learning:',
        description: 'Our tutoring approach goes beyond traditional teaching methods. We incorporate hands-on learning and interactive tools that engage students in the learning process. Through interactive quizzes, real-time problem-solving sessions, and educational games,',
        imgUrl: Intractive,
    },
    {
        title: 'Flexible Scheduling:',
        description: 'We understand that every student has a different schedule, which is why we offer flexible tutoring hours that fit seamlessly into their lives. Whether youre a morning person or prefer studying in the evening, our tutors are available across a range of times.',
        imgUrl: Flexible,
    },
    {
        title: 'Personalized Attention:',
        description: 'No two students learn the same way, and that’s why we focus on providing personalized attention tailored to each individuals learning style and pace.Our one- on - one tutoring sessions allow us to identify each students strengths and areas that need improvement.',
        imgUrl: Personalized,
    },
    {
        title: 'Online and In-Person Options:',
        description: 'Whether you prefer learning from the comfort of your home or face-to-face with a tutor, we offer both online and in-person tutoring options to suit your needs. Our virtual classes are equipped with interactive whiteboards, video calls, and digital tools to replicate the classroom experience.',
        imgUrl: InPerson,
    },
];

const CardSection = () => {
    const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: cardRef4, inView: inView4 } = useInView({ triggerOnce: true });

    return (
        <section style={{marginTop:"9rem"}}>  
        <div className="card-container">
            <div
                ref={cardRef1}
                className={`card ${inView1 ? 'visible' : ''}`}
                data-direction="left"
            >
                <img src={cardsData[0].imgUrl} alt={cardsData[0].title} />
                <h3 className="card-title">{cardsData[0].title}</h3>
                <p className="card-description">{cardsData[0].description}</p>
            </div>

            <div
                ref={cardRef2}
                className={`card ${inView2 ? 'visible' : ''}`}
                data-direction="right"
            >
                <img src={cardsData[1].imgUrl} alt={cardsData[1].title} />
                <h3 className="card-title">{cardsData[1].title}</h3>
                <p className="card-description">{cardsData[1].description}</p>
            </div>

            <div
                ref={cardRef3}
                className={`card ${inView3 ? 'visible' : ''}`}
                data-direction="left"
            >
                <img src={cardsData[2].imgUrl} alt={cardsData[2].title} />
                <h3 className="card-title">{cardsData[2].title}</h3>
                <p className="card-description">{cardsData[2].description}</p>
            </div>

            <div
                ref={cardRef4}
                className={`card ${inView4 ? 'visible' : ''}`}
                data-direction="right"
            >
                <img src={cardsData[3].imgUrl} alt={cardsData[3].title} />
                <h3 className="card-title">{cardsData[3].title}</h3>
                <p className="card-description">{cardsData[3].description}</p>
            </div>
        </div>
        </section>
    );
};

export default CardSection;
