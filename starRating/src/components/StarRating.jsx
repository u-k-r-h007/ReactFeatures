import React, { useState } from 'react'

function StarRating({starCount=5}) {
    const [star,setStar]=useState()
    const [starHover,setStarHover]=useState()
    console.log(starHover)
  return (
    <div>

        {
            new Array(starCount).fill(0).map((_,index)=>{
                return (
                    <span key={index} className={`${index<star || index<starHover?"gold":""}`} onMouseOver={()=>setStarHover(index+1)} onMouseLeave={()=>{setStarHover('')}} onClick={()=>{setStar(index+1)}}>&#9733;</span>
                )
            })
        }
    </div>
  )
}

export default StarRating