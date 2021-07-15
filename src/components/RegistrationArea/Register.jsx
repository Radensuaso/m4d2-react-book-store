import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Register = (props) => {
  return (
    <Container id="register-container">
      <h1 className="text-center">Register</h1>
      <Row className="justify-content-center">
        <Col xm={12} sm={10} md={8} lg={6}>
          <Form onSubmit={(e) => props.handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  props.handleInputChange("name", e.target.value)
                }
                value={props.inputs.name}
                title="Please insert at least 2 chars."
                pattern="{2}"
                type="text"
                placeholder="Enter Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                onChange={(e) =>
                  props.handleInputChange("surname", e.target.value)
                }
                value={props.inputs.surname}
                title="Please insert at least 3 chars."
                pattern="{3}"
                type="text"
                placeholder="Enter Surname"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  props.handleInputChange("email", e.target.value)
                }
                value={props.inputs.email}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  props.handleInputChange("password", e.target.value)
                }
                value={props.inputs.password}
                title="Please insert minimum of 8 chars, at least 1 digit and 1 letter."
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                title="It has to be the same as password you typed above."
                pattern={props.inputs.password}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
