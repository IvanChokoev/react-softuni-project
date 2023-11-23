import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import Post from './index';

export default function PostsLists({posts}) {
  return <Box px="4">
    {posts?.length === 0 
    ? <Text textAlign="center" fontSize="xl">No posts yet ... felling a little lonely.</Text>
    : posts?.map((post) => <Post key={post.id} post={post} />)}
  </Box>
}
