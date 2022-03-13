import React from 'react'
import './aboutMe.css'
import Avatar from '../../images/Avatar.jpg'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
            <div>
                <img src={Avatar} alt="Shahab Avatar" />

            </div>
            <div>
                <h1 className="about__text">ABOUT ME</h1>
                <h5>I'm a Data Scientist and a Fullstack Web Developer. My Interests are building new Web Technologies and Products, Data Analytics, Machine Learning, and Deep Learning. I apply my passion for developing products with MERN Stack.</h5>
            </div>


        </div>
    )
}

export default AboutMe