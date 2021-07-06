import { Col, Container, Jumbotron, Row } from "react-bootstrap"

const MyJumbotron = () => (
  <Jumbotron fluid>
    <Container>
      <Row>
        <Col xs={10} sm={8} md={6}>
          <h1>Welcome</h1>
          <h2>Best Book Store Out there</h2>
          <p>
            Come in and see for yourself, you'll find the book you're looking
            for
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default MyJumbotron
