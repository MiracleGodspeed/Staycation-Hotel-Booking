import React, { Component } from "react";
import { init_jquery } from "../../Assets/js/custom";
import logo from "../../Assets/images/logo.png";
import logo2 from "../../Assets/images/logo-bg1.png";
import logo3 from "../../Assets/images/logo-bg.png";
import { Link } from "react-router-dom";
import $ from "jquery";
import {isTokenValid, validateToken} from "../../Utils/auth"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// import UserLayout from "../../Layouts/User/UserLayout"

class Header extends Component {
  state = {
    user_details: JSON.parse(localStorage.getItem("staycation_user")),
  };

  logOutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  componentDidMount() {
    init_jquery();
    $("#email-dd").on("click", function () {
      $(".meno-ul").toggleClass("active");
    });
  }

  render() {
    // require('../../Assets/js/custom.js')
    require("../../Assets/css/style.css");
    require("../../Assets/css/mob.css");
    require("../../Assets/css/materialize.css");
    require('../../Assets/css/bootstrap.css')
    require("../../Assets/css/animate.css");
    return (
      <div>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        {/* MOBILE MENU */}
        <section>
          <div className="ed-mob-menu">
            <div className="ed-mob-menu-con">
              <div className="ed-mm-left">
                <div className="wed-logo">
                  <Link to={"/"}>
                    <img src={logo3} alt="" />
                  </Link>
                </div>
              </div>
              <div className="ed-mm-right">
                <div className="ed-mm-menu">
                  <a href="#!" className="ed-micon">
                    <i className="fa fa-bars" />
                  </a>
                  <div className="ed-mm-inn">
                    <a href="#!" className="ed-mi-close">
                      <i className="fa fa-times" />
                    </a>
                    <h4>Menu</h4>
                    {this.state.user_details != null ?
                   <div className="user-nav" style={{ marginTop: "2px" }}>
                   <UncontrolledDropdown
                     nav
                     inNavbar
                     style={{
                       fontSize: "10px",
                       listStyleType: "none",
                       textDecoration: "none",
                     }}
                   >
                     <DropdownToggle
                       nav
                       caret
                       style={{
                         fontSize: "12px",
                         listStyleType: "none",
                         textDecoration: "none",
                         background:'rgb(44 139 145)',
                         padding:'2px'

                       }}
                       className="badge badge-primary sofia"
                     >
                       {this.state.user_details?.data?.email} <i className="fa fa-angle-down"/>
                     </DropdownToggle>

                     <DropdownMenu right style={{ padding: "9px" }}>
                       <DropdownItem
                         className="col-md-12"
                         style={{
                           border: "none",
                           background: "#FFF",
                           marginBottom: "4px",
                         }}
                       >
                         <Link style={{ color: "black" }} className="sofia" to={"/UserProfile"}>
                         <i className="fa fa-th-large" aria-hidden="true" /> Manage Bookings
                         </Link>
                       </DropdownItem>

                       <DropdownItem
                         className="col-md-12"
                         style={{
                           border: "none",
                           background: "#FFF",
                           marginBottom: "10px",
                         }}
                       >
                         <Link style={{ color: "black" }} className="sofia" to={"/UserProfile"}>
                         <i className="fa fa-user-o" aria-hidden="true" /> &nbsp; Manage Account
                         </Link>
                       </DropdownItem>

                       <DropdownItem className="col-md-12" style={{border:'none', background:'#FFF', marginBottom:'10px'}}>
                         <Link onClick={this.logOutUser} style={{marginTop:"7px", background:'#ec2e47!important', borderRadius:'10px'}} href="#" className="btn btn-danger sofia">
                         Sign Out
                         </Link>
                         
                       </DropdownItem>
                     </DropdownMenu>
                   </UncontrolledDropdown>

                  
                 </div> : 
                    <ul>
                      <li className="sofia">
                        <Link to={"/Login"}>Sign In</Link>
                      </li>
                      <li>
                        <Link to={"/Register"}>Sign Up</Link>
                      </li>
                      <li>
                        <Link to={"/Booking"}>Book Now</Link>
                      </li>
                    </ul>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*HEADER SECTION*/}
        <section>
          {/* TOP BAR */}
          <div className="ed-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="ed-com-t1-left">
                    <ul>
                      <li>
                        <a href="#">Contact: Lekki Phase I, Lagos State</a>
                      </li>
                      <li>
                        <a href="#">Phone: +234-1231-1231</a>
                      </li>
                    </ul>
                  </div>
                  {this.state.user_details != null ?
                   <div className="user-nav" style={{ marginTop: "2px" }}>
                   <UncontrolledDropdown
                     nav
                     inNavbar
                     style={{
                       fontSize: "14px",
                       listStyleType: "none",
                       textDecoration: "none",
                     }}
                   >
                     <DropdownToggle
                       nav
                       caret
                       style={{
                         fontSize: "14px",
                         listStyleType: "none",
                         textDecoration: "none",
                         background:'#747b76',
                         padding:'8px'

                       }}
                       className="badge badge-primary sofia"
                     >
                      {this.state.user_details?.data?.email} <i className="fa fa-angle-down"/>
                     </DropdownToggle>

                     <DropdownMenu right style={{ padding: "9px" }}>
                       <DropdownItem
                         className="col-md-12"
                         style={{
                           border: "none",
                           background: "#FFF",
                           marginBottom: "10px",
                         }}
                       >
                         <Link style={{ color: "black" }} className="sofia" to={"/UserProfile"}>
                         <i className="fa fa-th-large" aria-hidden="true" /> Manage Bookings
                         </Link>
                       </DropdownItem>

                       <DropdownItem
                         className="col-md-12"
                         style={{
                           border: "none",
                           background: "#FFF",
                           marginBottom: "10px",
                         }}
                       >
                         <Link style={{ color: "black" }} className="sofia" to={"/UserProfile"}>
                         <i className="fa fa-user-o" aria-hidden="true" /> &nbsp; Manage Account
                         </Link>
                       </DropdownItem>

                       <DropdownItem className="col-md-12" style={{border:'none', background:'#FFF', marginBottom:'10px'}}>
                         <Link onClick={this.logOutUser} style={{marginTop:"7px", background:'#ec2e47!important', borderRadius:'10px'}} href="#" className="btn btn-danger sofia">
                         Sign Out
                         </Link>
                         
                       </DropdownItem>
                     </DropdownMenu>
                   </UncontrolledDropdown>

                  
                 </div>
                 
                 :  <div className="ed-com-t1-right">
                     
                 <ul>
                   <li ><Link style={{borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}} className="sofia" to={"/Login"}>Sign In</Link>
                   </li>
                   <li>
                   <Link style={{borderTopRighttRadius:'5px', borderBottomRightRadius:'5px'}} className="sofia" to={"/Register"}>Sign Up</Link>
                   </li>
                 </ul>
               </div>
                }
                 
                  {/* <div className="meno" style={{width:'200px', height:'200px', background:'black', display:'none'}}>
                  <ul className="meno-ul">
                        <li><a href="#" style={{color:'black'}}>Dashboard</a></li>
                        
                      </ul>
                      </div> */}
                 
                  <div className="ed-com-t1-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LOGO AND MENU SECTION */}
          <div className="top-logo" data-spy="affix" data-offset-top={250}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="wed-logo">
                    <Link to={"/"}>
                      <img src={logo2} alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>

                      <li>
                        <a href="#">Hotels</a>
                      </li>
                      {/*<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>*/}

                      <li>
                        <a href="#">Events</a>
                      </li>
                      <li>
                        <a href="#">Profile</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div class="search-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="search-form">
                            <form>
                                <div class="sf-type">
                                    <div class="sf-input">
                                        <input type="text" id="sf-box" placeholder="Search course and discount courses">
                                    </div>
                                    <div class="sf-list">
                                        <ul>
                                            <li><a href="course-details.html">Accounting/Finance</a></li>
                                            <li><a href="course-details.html">civil engineering</a></li>
                                            <li><a href="course-details.html">Art/Design</a></li>
                                            <li><a href="course-details.html">Marine Engineering</a></li>
                                            <li><a href="course-details.html">Business Management</a></li>
                                            <li><a href="course-details.html">Journalism/Writing</a></li>
                                            <li><a href="course-details.html">Physical Education</a></li>
                                            <li><a href="course-details.html">Political Science</a></li>
                                            <li><a href="course-details.html">Sciences</a></li>
                                            <li><a href="course-details.html">Statistics</a></li>
                                            <li><a href="course-details.html">Web Design/Development</a></li>
                                            <li><a href="course-details.html">SEO</a></li>
                                            <li><a href="course-details.html">Google Business</a></li>
                                            <li><a href="course-details.html">Graphics Design</a></li>
                                            <li><a href="course-details.html">Networking Courses</a></li>
                                            <li><a href="course-details.html">Information technology</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sf-submit">
                                    <input type="submit" value="Search Course">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
        </section>
      </div>
    );
  }
}

export default Header;
