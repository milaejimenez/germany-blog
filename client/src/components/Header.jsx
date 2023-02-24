import React from 'react'

function Header() {
  return (
    <header>
      <div className='upper-header'>
        <nav>Categories</nav>
        <a href='mailto:info@sitename.com'>info@sitename.com</a>
      </div>
      <div className='lower-header'>
        <ul className='left-bar'>
          <li><a href='/'>RECENT POSTS</a></li>
          <li><a href='/'>POPULAR</a></li>
          <li><a href='/'>MOST READ</a></li>
        </ul>
        <h1>Germany 101</h1>
        <ul className='right-bar'>
          <li><a href='/'>LINK</a></li>
          <li><a href='/'>LINK</a></li>
          <li><a href='/'>LINK</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header