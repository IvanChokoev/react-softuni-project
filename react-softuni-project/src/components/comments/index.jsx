import React from "react";
import { usePost } from "../../hooks/posts";
import Post from "../post";
import {useParams} from "react-router-dom";
import  NewComment  from "./NewComment";
import CommentList from "./CommentList";

export default function Comments() {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading comments...";

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <Post post={post} />
      <NewComment post={post} />
      <CommentList post={post} />
    </div>
  );
}