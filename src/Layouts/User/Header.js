import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import logo from "../../Assets/images/logo.png"
import logo2 from "../../Assets/images/logo-bg1.png"
import logo3 from "../../Assets/images/logo-bg.png"
import {Link} from 'react-router-dom'



class Header extends Component {
    state={

    }


    componentDidMount(){
        init_jquery();
    }

    render(){
        return(
            <>
                 {/* Preloader */}
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        {/* MOBILE MENU */}
        <section>

          <div className="ed-mob-menu">
            <div className="ed-mob-menu-con">
              <div className="ed-mm-left">
                <div className="wed-logo">
                  <Link to={"/Home"}><img src={logo3} alt="" />
                  </Link>
                </div>
              </div>
              <div className="ed-mm-right">
                <div className="ed-mm-menu">
                  <a href="#!" className="ed-micon"><i className="fa fa-bars" /></a>
                  <div className="ed-mm-inn">
                    <a href="#!" className="ed-mi-close"><i className="fa fa-times" /></a>
                    <h4>Menu</h4>
                    <ul>
                      <li><Link to={"/Login"}>Sign In</Link></li>
                      <li><Link to={"/Register"}>Sign Up</Link></li>
                      <li><Link to={"/Booking"}>Book Now</Link></li>
                      <li><Link to={"#"}>-</Link></li>
                      
                    </ul>
                    
                    
                 
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
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="ed-com-t1-left">
                    <ul>
                      <li><a href="#">Contact: Lekki Phase I, Lagos State</a>
                      </li>
                      <li><a href="#">Phone: +234-1231-1231</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-right">
                    <ul>
                      <li><Link to={"/Login"}>Sign In</Link>
                      </li>
                      <li>
                      <Link to={"/Register"}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-social">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                      </li>
                      <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                      </li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
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
                    <Link to={"/Home"}><img src={logo2} alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                        <li><Link to={"/Home"}>Home</Link>
                        </li>
                    
                        <li><a href="#">Hotels</a></li>
                        {/*<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>*/}
                    
                        <li><a href="#">Events</a>
                        </li>
                        <li><a href="#">Profile</a>
                        </li>
                        <li><a href="#">Contact us</a>
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
            </>
        )
    }
}

export default Header;