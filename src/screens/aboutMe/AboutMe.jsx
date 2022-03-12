import React from 'react'
import './aboutMe.css'
import Avatar from '../../images/Avatar.jpg'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
            <div>
                <img src={Avatar} alt="AvatarShahab Avatar" />

            </div>
            <div>
                <h1>ABOUT ME</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a eleifend diam, in lobortis arcu. Nulla congue lobortis lectus id pharetra. Fusce fringilla mauris quam, in mattis dui pharetra ac. Aliquam arcu nisi, gravida eu ex nec, rutrum suscipit dui. Suspendisse potenti. Nulla nibh libero, pretium in varius id, semper et arcu. Etiam ut euismod dolor. Nullam volutpat porta nisi, id laoreet nisi euismod viverra. Fusce ullamcorper egestas risus non egestas. Etiam elementum est vel tortor faucibus vulputate.</p>
            </div>


        </div>
    )
}

export default AboutMe