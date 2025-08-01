import React, { useState } from 'react'
import Preview from './Preview'

function FileUpload() {
    const [upload,setUpload]=useState([])
    const [box,setBox]=useState(false)
console.log(upload)
    const handleUpload=(e)=>{
    
        const file=e.target.files
       
        setUpload([...upload,...file])
       
    }

    const handleClose=(id)=>{
       const filteredFIle=upload.filter((_,index)=>{
        return index !== id
       })
       setUpload(filteredFIle)
    }
    const handleDragEnter=(e)=>{
        e.preventDefault()
        setBox(true)
    }
    const handleDragExit=(e)=>{
        e.preventDefault()
        setBox(false)
    }
    const handleDragCapture=(e)=>{
        e.preventDefault()
         const file=e.dataTransfer.files
       
        setUpload([...upload,...file])
    }
  return (
    <>
    <div className={`uploadBox ${box ? "boxColor":""}`}>
        <div onDragEnter={handleDragEnter} onDragLeave={handleDragExit} onDrop={handleDragCapture}>
           <h1>Upload your File or Drag and Drop</h1>
           <input onChange={handleUpload} className='fileUpload' id='file-upload' type="file" multiple />
           <label  htmlFor="file-upload">Upload File</label>
        </div>
    </div>
    <div>
        {
            upload.map((file,id)=>{
                return (
                    <Preview key={id} file={file} id={id} close={handleClose}/>
                )
            })
        }
    </div>
    </>
  )
}

export default FileUpload