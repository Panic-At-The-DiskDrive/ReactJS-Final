import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Beru Gaming
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            
            <NavDropdown title="Categorías">
              <NavDropdown.Item as={NavLink} to="/category/Aventura">
                Aventura
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Shooter">
                Shooter
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/RPG">
                RPG
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Simulation">
                Simulation
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/about">
              Acerca de Nosotros
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar



