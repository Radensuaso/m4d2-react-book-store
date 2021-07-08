import { Container, Row, Col } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import React, { Component } from "react"
import SingleBook from "./SingleBook"

class LatestReleases extends Component {
  render() {
    return (
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
              <SingleBook book={fantasyBook} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default LatestReleases
