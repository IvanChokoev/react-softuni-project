import { useAuth } from "../../hooks/auth";
import  UserAvatar  from "../../components/profile/Avatar";
import { useForm } from "react-hook-form";
import { useAddComment } from "../../hooks/comments";


export default function NewComment({post}) {
    const { id: postID } = post;
    const { user, isLoading: authLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { addComment, isLoading: commentLoading } = useAddComment({
        postID,
        uid: user?.id,
    });

    function handleAddComment(data) {
        addComment(data.text);
        reset();
    }

    if (authLoading) return "Loading..."

  return (
      <div className="comment-form-container">
          <div className="comment-form">
              <UserAvatar user={user} size="md"/>
              <div className="comment-form-content">
                  <form onSubmit={handleSubmit(handleAddComment)}>
                      <div className="comment-input">
                          <input
                              type="text"
                              size="sm"
                              placeholder="Write comment..."
                              autoComplete="off"
                              {...register("text", { required: true })}
                          />
                      </div>
                      <div className="comment-button">
                          <button
                              type="submit"
                              className={`button-style ${commentLoading || authLoading ? "loading" : ""}`}
                          >
                              Add Comment
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}