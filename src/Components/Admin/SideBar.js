import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import {trigger} from "../../Assets/Sidebar/main"
import {DashboardOutlined, AppstoreOutlined, DollarOutlined} from '@ant-design/icons';



//class AdminLayout extends Component {
class SideBar extends Component {
    componentDidMount(){
        trigger();
    }
    render(){
require("../../Assets/Sidebar/style.css")
// require("../../Assets/Sidebar/main")
    
  return (
    <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="custom-menu">
            <button type="button" id="sidebarCollapse" className="btn btn-primary">
            </button>
          </div>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a href="#"><span className="fa fa-home mr-3" /> Home</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-download mr-3 notif"><small className="d-flex align-items-center justify-content-center">5</small></span> Download</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-gift mr-3" /> Gift Code</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-trophy mr-3" /> Top Review</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-cog mr-3" /> Settings</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-support mr-3" /> Support</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-sign-out mr-3" /> Sign Out</a>
            </li>
          </ul>
        </nav>
        {/* Page Content  */}
        <div id="content" className="p-4 p-md-5 pt-5" style={{background:'#f9fbfd'}}>
        <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="avatar avatar-icon avatar-lg avatar-blue">
                          {/* <i className="anticon anticon-dollar" /> */}
                          <DollarOutlined />
                        </div>
                        <div className="m-l-15">
                          <h2 className="m-b-0">$23,523</h2>
                          <p className="m-b-0 text-muted">Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="avatar avatar-icon avatar-lg avatar-cyan">
                          <i className="anticon anticon-line-chart" />
                        </div>
                        <div className="m-l-15">
                          <h2 className="m-b-0">+ 17.21%</h2>
                          <p className="m-b-0 text-muted">Growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="avatar avatar-icon avatar-lg avatar-gold">
                          <i className="anticon anticon-profile" />
                        </div>
                        <div className="m-l-15">
                          <h2 className="m-b-0">3,685</h2>
                          <p className="m-b-0 text-muted">Orders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="avatar avatar-icon avatar-lg avatar-purple">
                          <i className="anticon anticon-user" />
                        </div>
                        <div className="m-l-15">
                          <h2 className="m-b-0">1,832</h2>
                          <p className="m-b-0 text-muted">Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
             
          {/* <h2 className="mb-4">Sidebar #09</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        </div>
      </div>
  );
};
}

export default SideBar;


