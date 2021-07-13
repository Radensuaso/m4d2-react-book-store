import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import LoadingSpinner from "./LoadingSpinner"

const AddComment = (props) => (
  <form onSubmit={(e) => props.handleSubmit(e)}>
    <Form.Control
      onChange={(e) =>
        props.handleStateComment(
          "comment",
          e.currentTarget.value,
          props.book.asin
        )
      }
      as="textarea"
      rows={3}
      placeholder="Add a comment!"
      value={props.postComment.comment}
    />
    <Form.Control
      onChange={(e) =>
        props.handleStateComment("rate", e.currentTarget.value, props.book.asin)
      }
      className="my-2"
      type="number"
      placeholder="1 to 5 rate the book!"
      value={props.postComment.rate}
    />
    <div className="d-flex align-items-center">
      <Button className="my-2 mr-2" variant="success" type="submit">
        Submit
      </Button>
      {props.submitIsLoading && <LoadingSpinner />}
    </div>
  </form>
)

export default AddComment
