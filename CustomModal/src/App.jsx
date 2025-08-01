import { useState } from 'react'

import './App.css'
import CustomModal from './components/CustomModal'

function App() {
 const [show, setShow]=useState(false)

  return (
   <div style={{backgroundColor:"lightcyan"}}>
    <div style={{zIndex:"0",backgroundColor:"green",border:"1px solid black", padding:"200px",width:"100%",height:"100%"}}>
      <button style={{background:"purple",borderRadius:"10px",padding:"10px 20px",color:"white", outline:"none"}} onClick={()=>{setShow(!show)}}>Show Modal</button>
       {show && <CustomModal show={show} setShow={setShow}/>}
    </div>
   </div>
  )
}

export default App
