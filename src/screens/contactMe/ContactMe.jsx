import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Bay Area, California</p>
          <p>Shahabgeravesh@gmail.com </p>

          <a href="https://www.linkedin.com/in/shahabgeravesh/">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" height="30" width="30" target="_blank" />
          </a>
          <p id="break">break</p>



        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}> All rights reserved</div>
    </div>
  )
}

export default ContactMe
