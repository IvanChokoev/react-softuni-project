import React from 'react'
import "./index.css"
import Header from './Header';
import Actions from './Actions';

export default function Post({post}) {
    const { text } = post;

  return (
      <div className="your-component">
          <div className="box-container">
          <Header post={post}/>
              <div className="inner-box">
                  <p className="text-content">
                      {text}
                  </p>
              </div>
              <Actions post={post}/>
          </div>
      </div>
  )
}
