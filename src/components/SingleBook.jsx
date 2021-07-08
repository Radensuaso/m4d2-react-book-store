import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import React, { Component } from "react"

class SingleBook extends Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
            <strong>Category: </strong> {this.props.book.category}
          </Card.Text>
          <Button variant="success">€ {this.props.book.price}</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
