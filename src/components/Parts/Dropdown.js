import React from "react";

function Dropdown(props) {
  return (
    <div>
      <button
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        id={`${props.id}DropDown`}
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-angle-down mx-1"></i>
        <span>{props.batch || `Choose ${props.id}`}</span>
      </button>
      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow "
        aria-labelledby={`${props.id}DropDown`}
      >
        <h6 className="dropdown-header">Choose From Above {props.id}</h6>
        {props.dropList.map((item) => {
          return (
            <p className="dropdown-item" onClick={() => props.handleFn(item)}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
