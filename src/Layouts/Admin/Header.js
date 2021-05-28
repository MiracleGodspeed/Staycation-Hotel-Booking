import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import logo from "../../Assets/images/logo.png"
import logo2 from "../../Assets/images/logo-bg1.png"
import logo3 from "../../Assets/images/logo-bg.png"
import {Link} from 'react-router-dom'
import {DashTrigger} from "../../Assets/Sidebar/Dash"
// import UserLayout from "../../Layouts/User/UserLayout"



class AdminHeader extends Component {
    state={
        
    }


    componentDidMount(){ 
        init_jquery();
        DashTrigger();
    }

    render(){
    require("../../Assets/Sidebar/dash.css")
      
        return(
            <section>
            <div id="preloader">
              <div id="status">&nbsp;</div>
            </div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
            
            
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet"></link>
            
            <aside className="side-nav" id="show-side-navigation1">
              <i className="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1" />
              
              
              <div className="heading">
                <img src="https://media.istockphoto.com/photos/north-african-black-young-woman-picture-id1060680104?k=6&m=1060680104&s=612x612&w=0&h=l5gSeqNZEwIeiwnE3koRr992nm5TLYVvKPiaNbLKRRo=" alt="" />
                <div className="info">
                  <h3><a href="#">Godspeed Miracle</a></h3>
                  <p>User</p>
                </div>
              </div>
              <div className="search">
                {/* <input type="text" style={{color:'grey'}} placeholder="Type here" /><i className="fa fa-search" /> */}
              </div>
              <ul className="categories">
                <li><i className="fa fa-home fa-fw" aria-hidden="true" /><a href="#">Home</a>
                  <ul className="side-nav-dropdown">
                    <li><Link to={"/"}>Staycation Home</Link></li>
                    <li><a href="/Dashboard2">Dashboard</a></li>
                    
                  </ul>
                </li>
                <li><i className="fa fa-support fa-fw" /><a href="#">Manage Hotel</a>
                  <ul className="side-nav-dropdown">
                    <li><a href="/AddHotel">Add Host Hotel</a></li>
                    <li><a href="#">Add Hotel Rooms</a></li>
                    
                  </ul>
                </li>
                <li><i className="fa fa-building-o fa-fw" /><a href="#">Manage Events</a>
                  <ul className="side-nav-dropdown">
                    <li><a href="#">Add Event</a></li>
                   
                  </ul>
                </li>
                <li><i className="fa fa-sun-o fa-fw" /><a href="#">Settings</a>
                  <ul className="side-nav-dropdown">
                    <li><a href="#">Create Users</a></li>
                    <li><a href="#">Payment Settings</a></li>
                    <li><a href="#">General Settings</a></li>
                    
                  </ul>
                </li>
              

                <li><i className="fa fa-area-chart fa-fw" /><a href="#"> Reports
                {/* <span className="num dang">4</span> */}
                </a>
                <ul className="side-nav-dropdown">
                    <li><a href="#">Hotel Reports</a></li>
                    <li><a href="#">Booking Reports</a></li>
                    
                  </ul>
                </li>
                <p>More</p>
               
                {/* <li><i className="fa fa-info fa-fw" /><a href="#">Recommendations <span className="num dang">2</span></a>
                <ul className="side-nav-dropdown">
                    <li><a href="#">--</a></li>
                    
                  </ul>
                </li> */}
                <li><i className="fa fa-wrench fa-fw" /><a href="#">Account</a>
                  <ul className="side-nav-dropdown">
                    <li><a href="#">Change Password</a></li>
                    <li><a href="#">Account Delete Request</a></li>
                    <li><Link to={"/Login"}>Log Out</Link></li>
                    
                  </ul>
                </li>
                
              </ul>
            </aside>
            <div id="top-top">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle show-side-btn" data-show="show-side-navigation1">
                      <i className="fa fa-align-right" />
                    </button>
                    <a className="navbar-brand" href="/">Stay<span className="main-color">Cation</span></a>
                  </div>
                  <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My profile <span className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="#"><i className="fa fa-user-o fw" /> My account</a></li>
                          <li><a href="#"><i className="fa fa-envelope-o fw" /> My inbox</a></li>
                          <li><a href="#"><i className="fa fa-question-circle-o fw" /> Help</a></li>
                          <li role="separator" className="divider" />
                          <li><a href="/Login"><i className="fa fa-sign-out" /> Log out</a></li>
                        </ul>
                      </li>
                      {/* <li><a href="#"><i className="fa fa-comments" /><span>23</span></a></li> */}
                      <li><a href="#"><i className="fa fa-bell-o" /><span>98</span></a></li>
                      <li><a href="#"><i data-show="show-side-navigation1" className="fa fa-bars show-side-btn" /></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
              </div>
              </section>
           
           
        )
    }
}

export default AdminHeader;