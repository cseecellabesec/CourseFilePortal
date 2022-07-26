import React from "react";

export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand-text mx-3 text-center py-2">
        <a href="#" className="logo">
          <img src="../assets/img/logo.png" width="60px" />
        </a>
      </div>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/user">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Update Data</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-file"></i>
          <span>All Files</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          dataparent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Files you've created</h6>
            <a className="collapse-item" href="buttons.html">
              CoA Third Sem
            </a>
            <a className="collapse-item" href="cards.html">
              DSTL 4th Sem
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="/attendTable">
          <i className="fas fa-fw fa-calendar"></i>
          <span>Attendance</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/marksTable">
          <i className="fas fa-fw fa-graduation-cap"></i>
          <span>Student Marks</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/addData">
          <i className="fas fa-fw fa-plus"></i>
          <span>Add Data</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/upload">
          <i className="fas fa-fw fa-upload"></i>
          <span>Upload Files</span>
        </a>
      </li>

     
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2 rounded-circle"
          src="./assets/img/ecell.jpg"
          alt="..."
        />
        <p className="text-center mb-2">
          This Portal has been Built by <strong>E-Cell CSE Department ABES Engineering College</strong>
        </p>
        <a
          className="btn btn-info btn-sm"
          href="https://instagram.com/cse.ecell"
        >
          <i className="fa fa-link mx-1"></i>
          Instagram
        </a>
      </div>
    </ul>
  );
}


