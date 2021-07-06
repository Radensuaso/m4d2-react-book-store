import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">
        <i className="bi bi-book"></i> ReactBookStore
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default MyNav
