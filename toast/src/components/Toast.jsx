import React from 'react'

function Toast({close,message,type}) {


  return (
    <>
       
            <div className={`toast ${type}`}>
                {message} <span onClick={close}>X</span>
            </div>
       
    </>
  )
}

export default Toast