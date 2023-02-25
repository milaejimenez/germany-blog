import React from 'react'
import picture from '../assets/images/berlin-youth.jpg';

const PostWidget = ({posts }) => {
  return (
    <div className='posts-container'>
    { posts.map( post => (
      <div className='post-item' key={post.id}>
        <img src={picture} alt={post.title} />
        <div className='post-info'>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button>Read more...</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default PostWidget