import React from 'react'
import { useState } from 'react'
import Form1 from './Form1'
import Form3 from './Form3'
import Form2 from './Form2'

function Tab() {
    const [tab,setTab]=useState(1)
console.log(tab)
    const handleTab=(id)=>{
        
       setTab(id)
    }
  return (
    <div>

        <div style={{display:"flex",gap:"10px",alignItems:"center"}}> 
            <button onClick={()=>handleTab(1)}className='btn'>Tab1</button>
            <button onClick={()=>handleTab(2)}className='btn'>Tab2</button>
            <button onClick={()=>handleTab(3)}className='btn'>Tab3</button>
        </div>

        {tab===1 && <Form1 /> }
        {tab===2 && <Form2 /> }
        {tab===3 && <Form3 /> }

    </div>
  )
}

export default Tab