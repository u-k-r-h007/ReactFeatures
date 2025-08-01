import React from 'react'

function Preview({file,id,close}) {
    const fileImage=URL.createObjectURL(file)
  return (
    <div className='preview'>
        <img className='thumbnail' src={fileImage} alt="" />
       <div>
         <h4>{file.name}</h4>
        <h4>{(file.size/1024).toFixed(2)} KB</h4>
       </div>
        <span onClick={()=>close(id)}>X</span>
    </div>
  )
}

export default Preview