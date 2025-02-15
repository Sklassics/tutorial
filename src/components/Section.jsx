// App.js
import React from 'react';
// import './App.css';
// import Safe from '../assets/parents.png'
import Tutor from '../assets/tutors.png'
import Pace from '../assets/studying.png'


const Section = () => {
    return (
        <div className="container" id='Blog'>
           

            <h1 style={{ textAlign: 'center' }}>A personalized tutoring solution to fit your needs</h1>
            <div className="section">
                <div className="content-left">
                    <h2>Students</h2>
                    <p>
                        Sign up for free

                        Learn with professional tutors

                        Study at your own pace with advanced digital technology

                        Improve your grades
                    </p>
                </div>
                <div className="image">
                    <img src={Pace} alt="Placeholder" />
                </div>
            </div>

            {/* Section 2: Image left, Content right */}
            <div className="section reverse">
                <div className="image">
                    <img src={Pace} alt="Placeholder" />
                </div>
                <div className="content-right">
                    <h2>Parents</h2>
                    <p>
                        Choose a safe and secure tutoring option

                        Reduce stress from homework while staying involved in your child's learning

                        Save time

                        Try Skooli risk-free with our Satisfaction Guarantee       </p>
                </div>
            </div>
            <div className="section">
                <div className="content-left">
                    <h2>Tutors</h2>
                    <p>
                        Earn additional income from home

                        Inspire students to achieve their best

                        Make a difference for your students
                    </p>
                </div>
                <div className="image">
                    <img src={Tutor} alt="Placeholder" />
                </div>
            </div>
        </div>
    );
};

export default Section;
