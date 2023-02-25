import React from 'react';
import picture from '../assets/images/berlin-youth.jpg';

const Guides = ({ posts }) => {
  return (
    <div className='guides'>
        <div className='section-title'>
            <h2>Germany: A User's Manual</h2>
            <div className='dash-line'></div>
        </div>
        <div className='articles'>
        { posts.map( post => (
            <div className='article'>
                <img src={picture}></img>
                <div className='article-info'>
                    <h3>{post.title}</h3>
                    <p>{post.date} - {post.author} </p>
                    <a href="article.html" class="btn-arr"><span class="icon-arrow"></span></a>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Guides