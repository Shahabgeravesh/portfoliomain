import Typed from 'react-typed';
import React from 'react'
import './header.css';

function Header() {
    return (
        <div className="main-info">
            <h1>
                Who am I?
            </h1>
            <Typed
                strings={['Front-End Developer', 'Data Science Engineer', " "]}
                typeSpeed={40}
                backSpeed={50}
                loop />
        </div>
    )
}

export default Header