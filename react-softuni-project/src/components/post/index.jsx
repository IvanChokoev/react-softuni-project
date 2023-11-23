import React from 'react'
import "./index.css"
import Header from './Header';

export default function Post({post}) {
    const { uid, text, date } = post;
  return (
      <div className="your-component">
          <div className="box-container">
          <Header uid={uid} date={date}/>
              <div className="inner-box">
                  <p className="text-content">
                      {text}
                  </p>
              </div>
          </div>
      </div>
  )
}
