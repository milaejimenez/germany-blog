import React from 'react';
import picture from '../assets/images/berlin-youth.jpg';

const posts = [
  { id: 1,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
  },
  { id: 2,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
  },
  { id: 3,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
  },
  { id: 4,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
  },
]

const Home = () => {
  return (
    <div className='recent'>
      <div className='section-title'>
        <h2>RECENT POSTS</h2>
        <div className='dash-line'></div>
      </div>
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
    </div>
  )
}

export default Home;


