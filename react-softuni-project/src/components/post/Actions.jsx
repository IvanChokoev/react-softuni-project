import{Flex, IconButton} from "@chakra-ui/react";
import {
    FaRegHeart, 
    FaHeart, 
    FaComment, 
    FaRegComment, 
    FaTrash
} from "react-icons/fa";
import{useAuth} from "../../hooks/auth";
import { useToggleLike, useDeletePost } from "../../hooks/posts"
import { Link } from "react-router-dom";
import { PROTECTED } from "../../lib/routes";
import "./index.css";

export default function Actions({post}) {
    const{id, likes} = post;
    const{user, isLoading: userLoading} = useAuth();

    const isLiked = likes.includes(user?.id);
    const { toggleLike, isLoading: likeLoading} = useToggleLike({
        id, 
        isLiked, 
        uid: user?.id
    });
    const {deletePost, isLoading: deleteLoading} = useDeletePost(id);


  return (
        <div className="actions-container">
            <div className="action-item">
                <button
                    onClick={toggleLike}
                    disabled={likeLoading || userLoading}
                    className="action-button"
                >
                    {isLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                    <p>{likes.length}</p>
                </button>
            </div>

            <div className="action-item comment-action">
                <Link
                    to={`${PROTECTED}/comments/${id}`}
                    className="action-button comment-button"
                >
                    <FaRegComment />
                    <p>5</p>
                </Link>
            </div>

          <div className="delete-container action-item">
              <button
                  onClick={deletePost}
                  disabled={deleteLoading}
                  className="action-button delete-button"
              >
                  <FaTrash />
              </button>
          </div>
        </div>
    );
}