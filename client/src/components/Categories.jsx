import React from 'react'

const Categories = () => {
  return (
    <div className='categories'>
        <div className='section-title'>
            <h2>Categories</h2>
            <div className='dash-line'></div>
        </div>
        <div>
            <ul>
                <li><a href='/work'>Work</a></li>
                <li><a href='/language'>Language</a></li>
                <li><a href='/study'>Study</a></li>
                <li><a href='/work'>Accomodation</a></li>
                <li><a href='/work'>Entertainment</a></li>
                <li><a href='/work'>Administration</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Categories