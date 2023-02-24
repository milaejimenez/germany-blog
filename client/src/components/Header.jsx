import React from 'react'

function Header() {
  return (
    <header>
      <div className='upper-header'>
        <nav>Categories</nav>
        <a href='mailto:info@sitename.com'>info@sitename.com</a>
      </div>
      <div className='lower-header'>
        <div className='left-bar'>
          <a href='/'>Recent posts</a>
          <a href='/'>Popular</a>
          <a href='/'>Most Read</a>
        </div>
        <h1>Germany 101</h1>
        <div className='right-bar'>
          <a href='/'>Link</a>
          <a href='/'>Link</a>
          <a href='/'>Link</a>
        </div>
      </div>
    </header>
  )
}

export default Header