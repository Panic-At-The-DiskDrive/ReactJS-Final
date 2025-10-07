import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Beru Gaming - Inicio">
          Beru Gaming
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>

            <NavDropdown title="Productos" id="nav-dropdown-products">
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

