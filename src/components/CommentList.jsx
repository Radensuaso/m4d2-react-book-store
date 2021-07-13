import Button from "react-bootstrap/Button"
import { FaTrash } from "react-icons/fa"

const CommentList = (props) => (
  <div className="border rounded p-3 mb-4">
    <p>
      <strong>Comment: </strong>
      {props.comment.comment}
    </p>
    <p>
      <strong>Rate: </strong>
      {props.comment.rate}
    </p>
    <Button
      onClick={() => props.deleteComment(props.comment._id)}
      variant="danger"
    >
      <FaTrash />
    </Button>
  </div>
)
export default CommentList
