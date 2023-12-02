import { useDeleteComment } from "../../hooks/comments";
import UserAvatar from "../profile/Avatar";
import { useUser } from "../../hooks/users";
import {CalculateRelativeTime} from "../../utils/dateAndTime";
import "./index.css"

import { FaTrash } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import UsernameButton from "../profile/UsernameButton";

export default function Comment({ comment }) {
    const { text, uid, date, id} = comment;
    const { user, isLoading: userLoading } = useUser(uid);
    const { user: authUser, isLoading: authLoading } = useAuth();
    const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

    if (userLoading) return "Loading...";

  return (
      <div className="comment-container">
          <div className="comment-header">
              <UserAvatar user={user} size="sm" />
              <div className="user-info">
                <UsernameButton user={user} />
                  <span className="timestamp">
                      {CalculateRelativeTime({ timestamp: date })}
                  </span>
                  {!authLoading && authUser.id === uid && (
                      <button
                          className="delete-button-own-comment"
                          onClick={deleteComment}
                          disabled={deleteLoading}
                      >
                          <FaTrash />
                      </button>
                    //   Fix a bit of css for the button
                  )}
              </div>
          </div>
          <div className="comment-content">
              <p>{text}</p>
          </div>
      </div>
  )
}