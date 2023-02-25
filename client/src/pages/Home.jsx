import React from 'react';

//Import components
import PostWidget from '../components/PostWidget'
import Sidebar from '../components/Sidebar'

import picture from '../assets/images/berlin-youth.jpg';


const posts = [
  { id: 1,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
    date: "JUL 06, 2021",
    category: "travel",
  },
  { id: 2,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
    date: "JUL 06, 2021",
    category: "travel",
  },
  { id: 3,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
    date: "JUL 06, 2021",
    category: "travel",
  },
  { id: 4,
    title: "Post Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga quos atque! Voluptatibus animi similique commodi, magnam laboriosam quibusdam consequuntur, fugiat expedita laborum ab saepe qui, tempora sit. Neque...",
    img: picture,
    date: "JUL 06, 2021",
    category: "travel",
  },
]

const Home = () => {
  return (
    <div className='recent'>
      <div className='section-title'>
        <h2>RECENT POSTS</h2>
        <div className='dash-line'></div>
      </div>
      <div className='posts-wrapper'>
        {/* <div className='posts-container'></div>
        <div className='sidebar-recent'></div> */}
        <PostWidget posts={posts} />
        <Sidebar posts={posts} />
      </div>
    </div>
  )
}

export default Home;


