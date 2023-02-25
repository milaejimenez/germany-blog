import React from 'react'
import picture from '../assets/images/berlin-youth.jpg'

const Sidebar = ({posts }) => {
    return (
        <div className='recent-sidebar'>
            { posts.map( post => (
                <div className='post-item' key={post.id}>
                <img src={picture} alt={post.title} />
                <div className='post-info'>
                    <p>{post.date} - #{post.category}</p>
                    <h3>{post.title}</h3>
                </div>
                </div>
            ))}
            <button className='btn'>View All</button>
        </div>
    )
}

export default Sidebar
