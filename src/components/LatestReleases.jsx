import { Button, Card, Container, Row, Col } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"

const LatestReleases = () => (
  <Container>
    <h3 className="my-4">Latest Releases</h3>
    <Row>
      {fantasyBooks.map((fantasyBook) => (
        <Col
          className="mb-4"
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={fantasyBook.asin}
        >
          <Card>
            <Card.Img
              variant="top"
              src={fantasyBook.img}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title>{fantasyBook.title}</Card.Title>
              <Card.Text>
                <strong>Category: </strong> {fantasyBook.category}
              </Card.Text>
              <Button variant="success">€ {fantasyBook.price}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)

export default LatestReleases
