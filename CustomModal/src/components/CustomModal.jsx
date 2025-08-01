import React from 'react'

function CustomModal({setShow}) {
  return (
    <div>
        <div className='modal-overlay'>
            <div className='modal'>
         <h1>Custom Modal</h1>
         <button onClick={()=>{setShow(false)}}>Close modal</button>
        </div>
        </div>
    </div>
  )
}

export default CustomModal