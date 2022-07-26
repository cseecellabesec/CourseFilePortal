import React, { useState } from 'react'

function Upload() {
    const [fileList,setList]=useState(["Syllabuss.txt"])
    const [fileName,setFileName]=useState("")
  return (
    <div>
        <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Upload Documents</h1>
        <div>
        
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Save All Documents
          </a>
        </div>
      </div>

      <div className="row " style={{height:"400px !important"}}>
        <div className="col-xl-6 col-md-6 mb-4" style={{height:"300px !important"}}>
          <div className="card border-left-primary shadow py-2 ">
            <div className="card-body ">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <input type="file" className='my-2'/>
                  
                  <input
                    type="text"
                    id="student-name-area"
                    placeholder="File Name "
                    className="form-control shadow"
                    onChange={(e)=>{
                      setFileName(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
        className="btn btn-primary mx-auto my-2"
        id="student-list-submit-btn"
        onClick={()=>{
          setList([...fileList,fileName])
        }}
      >
        Upload 
      </button>
        </div>
        <div className="col-xl-6 col-md-6 mb-4" style={{height:"300px !important"}}>
          <div className="card border-left-primary shadow py-2 ">
            <div className="card-body ">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <h5>Uploaded Files</h5>
                  {  fileList.map((item)=>{
                        return <div className='row align-items-center bg-light rounded my-1 py-1' >
                            <p className='col-10 my-0'>{item}</p>
                            <i className="fa fa-trash" onClick={()=>fileList.pop(item)}></i>
                        </div>
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

     
    </div>
    </div>
  )
}

export default Upload