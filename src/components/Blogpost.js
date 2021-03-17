import React from 'react'

function Blogpost(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>Posted by {props.author} on {props.date}</p>
    </div>
  )
}

export default Blogpost