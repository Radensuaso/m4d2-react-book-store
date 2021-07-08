import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CommentArea from "./CommentArea"

import React, { Component } from "react"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <Card
        className={"position-relative"}
        onClick={() => this.setState({ selected: true })}
      >
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
        {this.state.selected && <CommentArea book={this.props.book} />}
      </Card>
    )
  }
}

export default SingleBook
