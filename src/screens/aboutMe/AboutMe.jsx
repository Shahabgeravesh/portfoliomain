import React from 'react'
import './aboutMe.css'
import Avatar from '../../images/Avatar.jpg'

function AboutMe() {
    return (
        <div id="about-me">
            <div>
                <h1 className="about-me">ABOUT ME</h1>

            </div>
            <div className="about__container">
                <img src={Avatar} alt="Shahab Avatar" />
                <h5 ClassName="about-text">I'm a Data Scientist and a Fullstack Web Developer. My Interests are building new Web Technologies and Products, Data Analytics, Machine Learning, and Deep Learning. I apply my passion for developing products with MERN Stack.</h5>

            </div>



        </div>
    )
}

export default AboutMe