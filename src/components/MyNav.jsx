import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap"
import { BsBookHalf } from "react-icons/bs"

const MyNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <BsBookHalf /> ReactBookStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" value={props.query} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
