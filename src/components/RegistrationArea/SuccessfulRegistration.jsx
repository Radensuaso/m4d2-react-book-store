import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SuccessfulRegistration = (props) => {
  return (
    <Container id="register-container">
      <h1 className="text-center text-success">Registration Successful!</h1>
      <Row className="justify-content-center mt-4">
        <Col
          xm={12}
          sm={10}
          md={8}
          lg={6}
          className="d-flex flex-column align-items-center"
        >
          <h5>Name</h5>
          <p>{props.inputs.name}</p>

          <h5>Surname</h5>
          <p>{props.inputs.surname}</p>

          <h5>Email</h5>
          <p>{props.inputs.email}</p>

          <h5>Password</h5>
          <p>{props.inputs.password}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default SuccessfulRegistration
