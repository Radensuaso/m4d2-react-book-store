import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap"
import { BsBookHalf } from "react-icons/bs"
import { withRouter, Link } from "react-router-dom"

const MyNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <BsBookHalf /> StriveBooks
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className={
                props.location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                props.location.pathname === "/registration"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/registration"
            >
              Register
            </Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              value={props.query}
              onChange={props.setQuery}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default withRouter(MyNav)
