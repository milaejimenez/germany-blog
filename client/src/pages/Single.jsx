import React from 'react'
import User from '../components/User'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">Content
        <User />
      </div>
      <div className="sidebar">Sidebar</div>
    </div>
  )
}

export default Single
