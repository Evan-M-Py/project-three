import React from 'react';
// import 'bootstrap/dist/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNav = (props) => {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Brand href="#home">Crusine</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#settings">Settings</Nav.Link>
                    <NavDropdown title="Change Trucks" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Pho-k Me, The Pho Truck</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Andrew's Pasta Shpot</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">DelishDish</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        Logout
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default TopNav;
