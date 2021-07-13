import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import LoadingSpinner from "./LoadingSpinner"
import Alert from "react-bootstrap/Alert"
import { FaTrash } from "react-icons/fa"

const CommentArea = (props) => {
  const [postComment, setPostComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  })

  const [initialCommentState, setInitialCommentState] = useState(false)
  const [allComments, setAllComments] = useState([])

  const [getIsLoading, setGetIsLoading] = useState(false)
  const [getError, setGetError] = useState(false)
  const [submitIsLoading, setSubmitIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState({ success: false, fail: false })

  /*fetch comments */
  const fetchComments = async () => {
    try {
      setGetIsLoading(true)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",
          },
        }
      )
      const fetchedComments = await response.json()
      if (response.ok) {
        setAllComments(fetchedComments)
        setGetIsLoading(false)
      } else {
        setGetIsLoading(false)
        setGetError(true)
      }
    } catch (error) {
      setGetIsLoading(false)
      setGetError(true)
    }
  }

  /* Function to handle the submit */

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setSubmitIsLoading(true)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(postComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",

            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        setPostComment({ comment: "", rate: "", elementId: "" })
        setSubmitted({ ...submitted, success: true })
        setGetIsLoading(false)
        setInitialCommentState(!initialCommentState)
        setSubmitIsLoading(false)
      } else {
        setSubmitted({ ...submitted, fail: true })
        setSubmitIsLoading(false)
      }
    } catch (error) {
      setSubmitted({ ...submitted, fail: true })
      setSubmitIsLoading(false)
    }
  }

  /*Function to delete comment from the api */
  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",
          },
        }
      )
      if (response.ok) {
        setInitialCommentState(!initialCommentState)
      } else {
        alert("Some error ocurred in deleting your comment.")
      }
    } catch (error) {
      alert("Some error ocurred in deleting your comment.")
    }
  }

  /* function to handle the state */
  const handleStateComment = (commentRate, value, id) => {
    setPostComment({ ...postComment, [commentRate]: value, elementId: id })
  }

  /* component did mount */
  useEffect(() => fetchComments(), [])

  /* component did update */
  useEffect(() => {
    fetchComments()
  }, [initialCommentState])

  return (
    <div className="comment-area d-flex flex-column align-items-center p-4 position-absolute">
      <Row className="flex-sm-row-reverse">
        <h4 className="my-4">{props.book.title}</h4>
        <Col xs={12} lg={6}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control
              onChange={(e) =>
                handleStateComment(
                  "comment",
                  e.currentTarget.value,
                  props.book.asin
                )
              }
              as="textarea"
              rows={3}
              placeholder="Add a comment!"
              value={postComment.comment}
            />
            <Form.Control
              onChange={(e) =>
                handleStateComment(
                  "rate",
                  e.currentTarget.value,
                  props.book.asin
                )
              }
              className="my-2"
              type="number"
              placeholder="1 to 5 rate the book!"
              value={postComment.rate}
            />
            <div className="d-flex align-items-center">
              <Button className="my-2 mr-2" variant="success" type="submit">
                Submit
              </Button>
              {submitIsLoading && <LoadingSpinner />}
            </div>
          </form>
          {submitted.success && (
            <Alert variant="success">
              Your comment was submitted with success!
            </Alert>
          )}
          {submitted.fail && (
            <Alert variant="danger">
              Something went wrong with your submission.
            </Alert>
          )}
        </Col>

        <Col xs={12} lg={6} className="w-100">
          {getError && (
            <Alert variant="danger">
              Something went wrong on loading the book comments.
            </Alert>
          )}
          {getIsLoading ? (
            <LoadingSpinner className="mt-4" />
          ) : (
            allComments
              .filter((comment) => comment.elementId === props.book.asin)
              .map((comment) => (
                <div className="border rounded p-3 mb-4" key={comment._id}>
                  <p>
                    <strong>Comment: </strong>
                    {comment.comment}
                  </p>
                  <p>
                    <strong>Rate: </strong>
                    {comment.rate}
                  </p>
                  <Button
                    onClick={() => deleteComment(comment._id)}
                    variant="danger"
                  >
                    <FaTrash />
                  </Button>
                </div>
              ))
          )}
        </Col>
      </Row>
    </div>
  )
}

export default CommentArea
