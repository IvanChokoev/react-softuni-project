import {useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PostsLists from "../post/PostsLists";
import { usePosts } from "../../hooks/posts";
import  UserAvatar from "../profile/Avatar";
import { useUser } from "../../hooks/users";
import {FormatDate} from "../../utils/dateAndTime"
import EditProfile from "./EditProfile";
import { useAuth } from "../../hooks/auth";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if(userLoading) return "Loading user..."

  return (
    <div className="profile-container">
      <div className="profile-header">
        <UserAvatar user={user} size="2xl" />

        {!authLoading && authUser.id === user.id && (
          <button
            className="change-avatar-btn"
            onClick={onOpen}
          >
            Change avatar
          </button>
        )}
        <div className="user-info">
          <p>{user.username}</p>
          <div className="stats">
            <p>Posts: {posts.length}</p>
            <p>Likes: todo!</p>
            <p>Joined: {FormatDate({ timestamp: user.date })}</p>
          </div>
        </div>
        <EditProfile isOpen={isOpen} onClose={onClose} />
      </div>
      {postLoading ? (
        <p>Posts are loading...</p>
      ) : (
        <PostsLists posts={posts} />
      )}
    </div>
  );
}