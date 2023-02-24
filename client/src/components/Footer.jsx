import React from 'react'

function Footer() {
  return (
    <footer>
      <div>
        <h5>About</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo repellat cumque in qui non ipsa quis, quibusdam veniam quae ipsam vitae a optio incidunt hic, amet blanditiis! Est, soluta accusamus?</p>
      </div>
      <div>
        <h5>Categories</h5>
        <nav className='categories-nav'>
          <ul>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
          </ul>
        </nav>
      </div>
      <div className='social-media'>
        <h5>Follow Us</h5>
        <div className='soc'>
          <div className='soc-item'>
          <span className="icon icon-facebook"></span>
          </div>
          <div className='soc-item'>
            <span className='icon-yt'></span>
          </div>
          <div className='soc-item'>
            <span className='icon-tw'></span>
          </div>
          <div className='soc-item'>
            <span className='icon-fb'>hello</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer