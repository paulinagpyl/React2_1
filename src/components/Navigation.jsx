import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="text-white text-decoration-none ms-3"> 🏠Home  </Link>
          <Link to="/contact" className="text-white text-decoration-none ms-3">📒Contacto</Link>
        </Nav>
        <Navbar.Brand href="/">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
