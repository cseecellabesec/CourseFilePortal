import React, { useState } from "react";
import Dropdown from "./Dropdown";
function OptBar(props) {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
        <div className="col-4-ns col-6-md col-8 d-flex flex-no-wrap justify-content-around">
          {props.limit[0] ? (
            <Dropdown
              id="batch"
              batch={props.batch}
              handleFn={(val) => props.setFn("batch",val)}
              dropList={[
                "Btech 3rd Sem",
                "Btech 4th Sem",
                "Btech 5th Sem",
                "Btech 6th Sem",
              ]}
            />
          ) : (
            ""
          )}

          {props.limit[1] ? (
            <Dropdown
              id="subject"
              batch={props.subject}
              handleFn={(val) => props.setFn("subject",val)}
              dropList={[
                "Computer Organization",
                "Data Structure",
                "Operating System",
                "Microprocessor",
              ]}
            />
          ) : (
            ""
          )}
          {props.limit[2] ? (
            <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <input type="date" name="" onChange={(e)=>props.setFn("date",e.target.value)} id="attendance-date-input" />
            </button>
          ) : (
            ""
          )}

          {props.limit[3] ? (
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-save mx-1 fa-sm text-white-50"></i>Save
              {props.cato}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OptBar;
