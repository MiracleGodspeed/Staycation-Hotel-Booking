import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  Link
} from "react-router-dom";
import {DashTrigger} from "../../Assets/Sidebar/Dash"
import {init_jquery} from "../../Assets/js/custom"
import {DashboardOutlined, AppstoreOutlined, DollarOutlined} from '@ant-design/icons';
// import "../../Assets/Sidebar/dash.css";



//class AdminLayout extends Component {
class DashboardSecond extends Component {
    state={
        executed : false
    }

    reloadAction = () => {
    }
    componentDidMount(){
     
        init_jquery();
       
          DashTrigger();
          
      
    }
    render(){
require("../../Assets/Sidebar/dash.css")
// require("../../Assets/Sidebar/main")
  return (

    <div>
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
                <li><a href="#">Dashboard</a></li>
                
              </ul>
            </li>
            <li><i className="fa fa-support fa-fw" /><a href="#">My Trips</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Trip History</a></li>
                
              </ul>
            </li>
            <li><i className="fa fa-envelope fa-fw" /><a href="#">My Bookings</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Completed Bookings</a></li>
                <li><a href="#">Uncompleted Bookings</a></li>
                <li><a href="#">All Bookings</a></li>
               
              </ul>
            </li>
            <li><i className="fa fa-star fa-fw" /><a href="#">Favourites</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">View Favourites</a></li>
                <li><a href="#">Explore and Add</a></li>
                
              </ul>
            </li>
            <li><i className="fa fa-dollar fa-fw" /><a href="#">Payments</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Successful Payments</a></li>
                <li><a href="#">Declined Payments</a></li>
                
              </ul>
            </li>
            <p>More</p>
            <li><i className="fa fa-gift fa-fw" /><a href="#"> Staycation Specials <span className="num dang">4</span></a>
            <ul className="side-nav-dropdown">
                <li><a href="#">Hotel Bonuses</a></li>
                <li><a href="#">Tours</a></li>
                
              </ul>
            </li>
            <li><i className="fa fa-info fa-fw" /><a href="#">Hotel Recommendations <span className="num dang">2</span></a>
            <ul className="side-nav-dropdown">
                <li><a href="#">--</a></li>
                
              </ul>
            </li>
            <li><i className="fa fa-wrench fa-fw" /><a href="#">Account Settings</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Change Password</a></li>
                <li><a href="#">Account Delete Request</a></li>
                <li><Link to={"/Login"}>Log Out</Link></li>
                
              </ul>
            </li>
            
          </ul>
        </aside>
        <section id="contents">
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
          <div className="welcome">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="content">
                    <h2>Hello Miracle!</h2>
                    <p>Thank you for choosing StayCation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="statistics">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-envelope fa-fw bg-primary" />
                    <div className="info">
                      <h3>45</h3> <span>Emails</span>
                      <p>Complains/Recommendations</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-file fa-fw danger" />
                    <div className="info">
                      <h3>1252</h3> <span>Hotels</span>
                      <p>Hotels within StayCation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-users fa-fw success" />
                    <div className="info">
                      <h3>214</h3> <span>Users</span>
                      <p>Registered Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         <br/>
         <br/>
         <br/>

        
         
          <section className="statis text-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="box bg-primary">
                    <i className="fa fa-eye" />
                    <h3>5,154</h3>
                    <p className="lead">Site views</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box danger">
                    <i className="fa fa-user-o" />
                    <h3>245</h3>
                    <p className="lead">Successful Payments</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box warning">
                    <i className="fa fa-shopping-cart" />
                    <h3>5,154</h3>
                    <p className="lead">Declined Payments</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box success">
                    <i className="fa fa-handshake-o" />
                    <h3>5,154</h3>
                    <p className="lead">Bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="charts">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="chart-container">
                    <h3>Chart</h3>
                    <canvas id="myChart" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="chart-container">
                    <h3>Chart2</h3>
                    <canvas id="myChart2" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="admins">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <h3>StayCationNewest Users</h3>
                    <div className="admin">
                      <div className="img">
                        <img className="img-responsive" src="data:image/jpeg;base64,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" alt="admin" />
                      </div>
                      <div className="info">
                        <h3>Emeka Obinna</h3>
                        <p>emekaobinna@gmail.com</p>
                      </div>
                    </div>
                  
                    <div className="admin">
                      <div className="img">
                        <img className="img-responsive" src="https://media.istockphoto.com/photos/north-african-black-young-woman-picture-id1060680104?k=6&m=1060680104&s=612x612&w=0&h=l5gSeqNZEwIeiwnE3koRr992nm5TLYVvKPiaNbLKRRo=" alt="admin" />
                      </div>
                      <div className="info">
                        <h3>Rita Mudiaga</h3>
                        <p>ritamudi@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <h3>&nbsp;</h3>
                    <div className="admin">
                      <div className="img">
                        <img className="img-responsive" src="data:image/jpeg;base64,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" alt="admin" />
                      </div>
                      <div className="info">
                        <h3>Kunle Damilola</h3>
                        <p>olakunle@hotmail.com</p>
                      </div>
                    </div>
                  
                  
                  </div>
                </div>
              </div>
            </div></section>
         
          <section className="chrt3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                    <canvas id="chart3" width="100%" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

  );
};
}

export default DashboardSecond;


