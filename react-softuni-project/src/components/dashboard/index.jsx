import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from "../../hooks/auth";
import { usePosts } from '../../hooks/posts';
import { useState } from 'react';
import "../dashboard/index.css"
import { useAddPost } from '../../hooks/posts';
import PostsLists from '../post/PostsLists';


function NewPost(){
  const { register, handleSubmit, reset} = useForm();
  const {addPost, isLoading: addingPost} = useAddPost();
  const {user, isLoading: authLoading} = useAuth();
  const [loading, setLoading] = useState(false);
  
  async function handleAddPost(data) {
    try {
      setLoading(true); // Set loading to true before the async operation
      await addPost({
        uid: user.id,
        text: data.text,
      });
      reset();
    } finally {
      setLoading(false); // Set loading to false after the async operation completes
    }
  }

  return (
    <div className="new-post">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <div className="form-div">
          <h2 className='h2'>New Post</h2>
          <button
            className="custom-button"
            type="submit"
            disabled={loading || authLoading || addingPost}
            >
            {loading ? 'Loading' : 'Post'}
          </button>
        </div>
        <textarea
          name="post-area"
          id="post-area"
          cols="30"
          rows="3"
          placeholder='Create a new post...'
          {...register("text", { required: true })}>
        </textarea>
      </form>
    </div>
  )
}


export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if(isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsLists posts={posts}/>
    </>
  )
}
