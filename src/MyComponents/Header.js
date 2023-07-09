import React from 'react'
import './Header.css';
import android from './android.jpg';

function Header() {
  return (
    <div id='parental'>
      <div className='image'>
       <img src={android} alt="Error"></img>
      </div>
       <div id='header-heading'>
       <div className='header-heading-1'>
         <b><p>College journey is better</p><p>with <span>my</span>Lamp Community</p></b>
       </div> 
       <div className='header-heading-2'>
         <p>Join a community of serious and passionate tech folks,</p><p>students,mentors and coaches to accelerate your</p> 
         <p>career</p>  
      </div>
      <div className='button'>
         <a className='btn' href=""><b>JOIN OUR DISCORD</b></a>
      </div>
      </div>
     </div>
    
      
  )
}

export default Header
