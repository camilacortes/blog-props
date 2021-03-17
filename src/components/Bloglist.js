import React from 'react'
import Blogpost from './Blogpost';
import blogArr from '../blogArr';

function Bloglist(){
  const blogArray  = blogArr.map(info => {
    return <Blogpost key={info.title} title={info.title} subtitle={info.subTitle} author={info.author} date={info.date}/>
  })
  return(
    <div className="container">
     {blogArray}
    </div>
  )
}

export default Bloglist