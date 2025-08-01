import React, { useEffect, useRef, useState } from 'react'

function TrafficLights() {
    const [start,setStart]=useState(false)
    const [lights,setLight]=useState("")

 const timeoutRef = useRef(null); // to track timeouts

  useEffect(() => {
    if (!start) return;

    const runCycle = () => {
      setLight('green');
      timeoutRef.current = setTimeout(() => {
        setLight('yellow');
        timeoutRef.current = setTimeout(() => {
          setLight('red');
          timeoutRef.current = setTimeout(() => {
            runCycle(); // repeat cycle
          }, 6000); // red duration
        }, 3000); // yellow duration
      }, 5000); // green duration
    };

    runCycle();

    // cleanup if component unmounts or start becomes false
    return () => clearTimeout(timeoutRef.current);
  }, [start]);
const handleStop=()=>{
    setLight("red")
    setStart(false)
}
  return (
    <div>
         <div className='lightbox' style={{marginBottom:"5px"}}>
            <div style={{backgroundColor:`${lights==="green"?'green':"white"}`}}></div>
            <div style={{backgroundColor:`${lights==="yellow"?'yellow':"white"}`}}></div>
            <div style={{backgroundColor:`${lights==="red"?'red':"white"}`}}></div>
          

         </div>
<div style={{display:"flex",gap:"20px" ,justifyContent:"center"}}>
    <button style={{backgroundColor:"orange",borderRadius:"10px",padding:"10px 20px",outline:"none"}} onClick={()=>{setStart(true)}}>{start?"Started":"Start"}</button>
<button style={{backgroundColor:"red",borderRadius:"10px",padding:"5px 15px",outline:"none",color:"white"}} onClick={handleStop}>Stop</button>
</div>

    </div>
  )
}

export default TrafficLights