import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

const LatestReleases = (props) => (
  <Container>
    <h3 className="my-4">Latest Releases</h3>
    <Row>
      {props.books
        .filter((book) =>
          book.title.toLowerCase().includes(props.query.toLowerCase())
        )
        .map((book) => (
          <Col className="mb-4" xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
    </Row>
  </Container>
)

export default LatestReleases
