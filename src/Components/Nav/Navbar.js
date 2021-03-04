import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
//css
import './Navbar.css'

const NavBar = () => {
    const urllogo='https://www.thecocktaildb.com/images/logo.png'
    return (
        <div >
             <Navbar bg="primary" variant="dark">
    <Navbar.Brand><img src={urllogo} alt="logococktail"/>
      
    </Navbar.Brand>
    
    <Nav className=" mr-auto ">
      <NavLink className="navl d-flex p-2 bd-highlight "  to='/' >Home</NavLink>
      <NavLink className="navl d-flex p-2 bd-highlight"  to='/About'>About</NavLink>
      
    </Nav>
    
  </Navbar>

            
        </div>
    )
}

export default NavBar
