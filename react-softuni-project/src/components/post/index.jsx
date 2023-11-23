import React from 'react'
import "./index.css"

export default function Post({post}) {
    const {text} = post;
  return (
      <div className="your-component">
          <div className="box-container">
              <div className="inner-box">
                  <p className="text-content">
                      {text}
                  </p>
              </div>
          </div>
      </div>
  )
}
