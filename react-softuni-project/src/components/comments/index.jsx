import React from "react";
import {Box} from "@chakra-ui/react";
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
    <Box align="center" pt="50">
      <Post post={post} />
      <NewComment post={post} />
      <CommentList post={post} />
    </Box>
  );
}