import React from 'react'
import Card from '../Parts/Card'

function UserOptions() {
  return (
    <div><div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Report Dashboard</h1>
    <a
      href="#"
      className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
    >
      <i className="fas fa-download fa-sm text-white-50"></i>{" "}
      Generate Report
    </a>
  </div>

  <div className="row">
    <Card
      title="Attendance (Monthly)"
      icon="calender"
      value="76.8"
    />

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                Assignments
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    50%
                  </div>
                </div>
                <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Card title="Student Requests" icon="comments" value="18" />
    <Card title="Average Marks" icon="dollar-sign" value="65%" />
  </div>

  <div className="row">
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Illustrations
          </h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src="img/undraw_posting_photo.svg"
              alt="..."
            />
          </div>
          <p>
            Add some quality, svg illustrations to your project
            courtesy of{" "}
            <a
              target="_blank"
              rel="nofollow"
              href="https://undraw.co/"
            >
              unDraw
            </a>
            , a constantly updated collection of beautiful svg
            images that you can use completely free and without
            attribution!
          </p>
          <a
            target="_blank"
            rel="nofollow"
            href="https://undraw.co/"
          >
            Browse Illustrations on unDraw &rarr;
          </a>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Development Approach
          </h6>
        </div>
        <div className="card-body">
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility
            classNamees in order to reduce CSS bloat and poor page
            performance. Custom CSS classNamees are used to create
            custom components and custom utility classNamees.
          </p>
          <p className="mb-0">
            Before working with this theme, you should become
            familiar with the Bootstrap framework, especially the
            utility classNamees.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Earnings Overview
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">
                Dropdown Header:
              </div>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Revenue Sources
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">
                Dropdown Header:
              </div>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart"></canvas>
          </div>
          <div className="mt-4 text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i> Direct
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> Social
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> Referral
            </span>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default UserOptions