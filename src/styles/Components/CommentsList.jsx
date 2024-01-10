import { Badge, ListGroup } from "react-bootstrap"

const CommentsList = ({ comments }) =>
  comments.map((comment) => (
    <ListGroup key={comment._id}>
      <ListGroup.Item>
        <Badge pill variant="info" className="me-3">
          {comment.rate}
        </Badge>
        {comment.comment}
      </ListGroup.Item>
    </ListGroup>
  ))

export default CommentsList
