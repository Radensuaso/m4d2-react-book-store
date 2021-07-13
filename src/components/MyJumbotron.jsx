import { Col, Container, Jumbotron, Row } from "react-bootstrap"

const MyJumbotron = () => (
  <Jumbotron fluid>
    <Container>
      <Row>
        <Col xs={10} sm={8} md={6}>
          <h1>StriveBooks</h1>
          <h2>Best Book Store Out there</h2>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default MyJumbotron
