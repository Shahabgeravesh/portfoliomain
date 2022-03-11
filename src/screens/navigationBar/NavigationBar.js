import React from 'react'
import './navigation.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}> {e.name}</Nav.Link>

    ))

}


function NavigationBar() {
    return (
        <div id="home">

            <Navbar className="navigation-container"
                style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%' }} collapseOnSelect
                expand="md">
                <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">Shahab Geravesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifycontent: 'flex-end', marginRight: '1rem', bordercolor: 'none' }}>
                    <Nav className="links" style={{ margin: '0 1rem' }}>
                        {createLinks()}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </div >
    )
}

export default NavigationBar