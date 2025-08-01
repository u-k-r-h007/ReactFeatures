import React, { useRef, useState } from 'react'
import Toast from './Toast'

function ToastContainer() {
    const [toast,setToast]=useState([])
    const mountedRef = useRef(true);

    const handleClose=(id)=>{
         if (!mountedRef.current) return;
       
        setToast((prev)=>{
             const filteredToast=prev.filter((toast)=>{
               return toast.id !== id
        })
            return filteredToast})
    }

    const handleToast=(message,type)=>{
        const id=new Date().getTime()
        const newToast=[...toast,{id,message,type}]
           setToast(newToast)

         
        setTimeout(()=>handleClose(id),5000)
    }
  return (
    <div>
<div className='toastContainer'>
     {
    toast.map(({id,message,type})=>{
        return (
           <div key={id} >
             <Toast close={()=>handleClose(id)} message={message} type={type} />
           </div>
        )
    })
 }
</div>
        <div style={{display:"flex",gap:"10px"}}>
            <button onClick={()=>handleToast("success","success")} style={{border:"1px solid black",borderRadius:"10px",padding:"10px 20px"}}>Success</button>
            <button onClick={()=>handleToast("warning","warning")} style={{border:"1px solid black",borderRadius:"10px",padding:"10px 20px"}}>Warning</button>
            <button onClick={()=>handleToast("info","info")} style={{border:"1px solid black",borderRadius:"10px",padding:"10px 20px"}}>Info</button>
            <button onClick={()=>handleToast("error","error")} style={{border:"1px solid black",borderRadius:"10px",padding:"10px 20px"}}>Error</button>
        </div>
    </div>
  )
}

export default ToastContainer