import React from 'react'
import Navbar from './Navbar';

function Header(){
  return(
    <div className='header'>
      <img className="image" src="https://imgur.com/z7wvpDF.jpg" alt="working"></img>
      <Navbar/>
      <h1 className="title">Clean Blog</h1>
      <p className="description">A Blog Theme by Start Bootstrap</p>
      
    </div>
  )
}

export default Header