import React, { useEffect, useState } from 'react'

function Timer() {
    const [isStart,setIsStart]=useState(false)
    const [isHour,setIsHour]=useState("")
    const [isMinutes,setIsMinutes]=useState("")
    const [isSecond,setIsSecond]=useState("")
 const [intervalId, setIntervalId] = useState(null);
 
 useEffect(()=>{
     if (isStart) {
      const id = setInterval(() => {
        updateTimer();
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
 },[isStart,isSecond])


 const updateTimer=()=>{
    console.log("inside this")
   let h=Number(isHour)
   let m=Number(isMinutes)
   let s=Number(isSecond)
if(h ===0 && m===0&& s===0){
    clearInterval(intervalId)
    setIsStart(false)
    setIsHour("")
    setIsMinutes("")
    setIsSecond("")
    return;
}
   if(s>0){
    s--
    }
    else{
        if(m>0){
    m--
    s=59

   }
   else if(h>0){
    h--
    m=59
    s=59
   }
    }
   
   setIsHour(h.toString().padStart(2,0))
   setIsMinutes(m.toString().padStart(2,0))
   setIsSecond(s.toString().padStart(2,0))
 }
  const handleStartPause = () => {
    if (isStart) {
      setIsStart(false);
      clearInterval(intervalId);
    } else {
      if (isHour || isMinutes || isSecond) {
        setIsStart(true);
      }
    }
  };
  const handleReset=()=>{
    clearInterval(intervalId)
    setIsHour("")
    setIsMinutes("")
    setIsSecond("")
    setIsStart(false)
  }
  return (
    <div>
        <div style={{border:"2px solid lightGray",borderRadius:"10px",width:"600px",padding:"20px",overflow:"hidden",alignItems:"center"}}>
            <h1>Countdown Timer</h1>

            <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
                <input value={isHour} style={{padding:"5px",borderRadius:"10px",width:"50px"}} placeholder='HH' type="text" onChange={(e)=>{setIsHour(e.target.value)}} />:
            <input value={isMinutes} style={{padding:"5px",borderRadius:"10px",width:"50px"}} placeholder='MM' type="text" onChange={(e)=>{setIsMinutes(e.target.value)}} />:
            <input value={isSecond} style={{padding:"5px",borderRadius:"10px",width:"50px"}} placeholder='SS' type="text" onChange={(e)=>{setIsSecond(e.target.value)}} />
            <div style={{display:"flex",gap:"10px"}}>
             <button
              style={{ backgroundColor: isStart ? "orange" : "green", borderRadius: "5px", color: "white", padding: "10px 20px", outline: "none" }}
              onClick={handleStartPause}
            >
              {isStart ? "Pause" : "Start"}
            </button>
                <button onClick={handleReset} style={{backgroundColor:"red",borderRadius:"5px",color:"white",padding:"10px 20px"}}>Reset</button>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Timer