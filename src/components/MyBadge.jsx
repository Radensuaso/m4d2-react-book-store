import Badge from "react-bootstrap/Badge"

const MyBadge = (props) => (
  <Badge className="pt-2 px-2" variant="warning">
    <h5>{props.text}</h5>
  </Badge>
)

export default MyBadge
