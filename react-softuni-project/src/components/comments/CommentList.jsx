import { useComments } from "../../hooks/comments"
import Comment from "./Comment";

export default function CommentList({post}) {
    const{id} = post;
    const {comments, isLoading} = useComments(id);

    if (isLoading) return "Loading comments...";
  console.log("Comments Array:", comments);

  return (
    <div>
      {comments.map((comment) => {
        console.log("Comment Object:", comment);
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}