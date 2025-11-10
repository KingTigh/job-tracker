"use client";
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} href="/">Job Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} href="/board">board</Nav.Link>
            <Nav.Link as={Link} href="/login">Login</Nav.Link>
            <Nav.Link as={Link} href="/register">Register</Nav.Link>
            <Nav.Link as={Link} href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
