import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='write'>
      <div className="content">
        <input type="text" className='title' placeholder="title" />
        <div className='editor-container'>
         <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
          <label htmlFor="file"></label>
          <input type="file" name="file"/>

          <div className='tags'>
            <h3>Categories</h3>
            <input type="radio" name="work" value="work" id="work"/>
            <label htmlFor="work">Work</label>
            <input type="radio" name="education" value="education" id="education"/>
            <label htmlFor="education">Education</label>
            <input type="radio" name="language" value="language" id="language"/>
            <label htmlFor="language">Language</label>
            <input type="radio" name="accomodation" value="accomodation" id="accomodation"/>
            <label htmlFor="accomodation">Accomodation</label>
            <input type="radio" name="entertainment" value="entertainment" id="entertainment"/>
            <label htmlFor="entertainment">Entertainment</label>
            <input type="radio" name="culture" value="culture" id="cultre"/>
            <label htmlFor="culture">Culture</label>
          </div>
      </div>
    </div>
  )
}

export default Write