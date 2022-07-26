import React, { useState } from "react";
import { uploadList } from "../firebase";
function ListForm() {

  const [nameV,setNames]=useState("")
  const [rollV,setRoll]=useState("")
  const [batch,setBatch]=useState("")
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Students</h1>
        <div>
          <button
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            id="batchDropDown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-angle-down mx-1"></i>
            <span id="studentBatchName" >{batch || "Choose Batch"}</span>
          </button>
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow "
            aria-labelledby="batchDropDown"
          >
            <h6 className="dropdown-header">Choose From Above Batches</h6>
            <p
              className="dropdown-item"
              onClick={()=>setBatch("Btech 3rd Sem")}
            >
              Btech 3rd Sem
            </p>
            <p
              className="dropdown-item"
              onClick={()=>setBatch("Btech 4th Sem")}
            >
              Btech 4th Sem
            </p>
            <p
              className="dropdown-item"
              onClick={()=>setBatch("Btech 5th Sem")}
            >
              Btech 5th Sem
            </p>
            <p
              className="dropdown-item"
              onClick={()=>setBatch("Btech 6th Sem")}
            >
              Btech 6th Sem
            </p>
          </div>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a>
        </div>
      </div>

      <div className="row " style={{height:"400px !important"}}>
        <div className="col-xl-6 col-md-6 mb-4" style={{height:"300px !important"}}>
          <div className="card border-left-primary shadow py-2 ">
            <div className="card-body ">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Student Names
                  </div>
                  <textarea
                    type="text"
                    id="student-name-area"
                    placeholder="Student Names ( seperate by new line ) "
                    className="form-control shadow"
                    onChange={(e)=>{
                      setNames(e.target.value)
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-6 mb-4" style={{height:"300px !important"}}>
          <div className="card border-left-primary shadow py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Student Roll Numbers
                  </div>
                  <textarea
                    type="text"
                    id="student-roll-area"
                    placeholder="Student Roll Numbers ( seperate by new line ) "
                    className="form-control shadow "
                    onChange={(e)=>{
                      setRoll(e.target.value)
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary mx-auto"
        id="student-list-submit-btn"
        onClick={()=>{
          uploadList(nameV,rollV,batch)
        }}
      >
        Submit Student List
      </button>
    </div>
  );
}

export default ListForm;
