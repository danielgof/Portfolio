import React, { Component } from 'react'
import { Navbar, Nav,  Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './DG.png';
import Home from '../Pages/Home';
import Projects from '../Pages/About';
import Contact from '../Pages/Contact';


export default class Header extends Component {
  render() {
    return (
        <>
        <Navbar collapseOnSelect expand="md" bg="secondary" variant='dark' >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="45"
                width="45" 
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href="/">About me</Nav.Link> 
                <Nav.Link href="/projects">My Projects</Nav.Link>  
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/projects' element={<Projects />}/>
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
        </>
    )
  }
}
