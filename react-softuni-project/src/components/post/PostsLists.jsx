import React from 'react';
import Post from './index';
import "./index.css"

export default function PostsLists({posts}) {
  const reversedPosts = posts?.slice().reverse(); // Create a copy of the array and reverse it

  return (
    <div className="post-list">
      {reversedPosts?.length === 0
        ? <p className="no-posts-message">No posts yet... feeling a little lonely.</p>
        : reversedPosts?.map((post) => <Post key={post.id} post={post} />)
      }
    </div>);
}
