import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import logo from "../../Assets/images/logo.png"
import logo2 from "../../Assets/images/logo-bg1.png"
import logo3 from "../../Assets/images/logo-bg.png"
import {Link} from 'react-router-dom'
import {DashTrigger} from "../../Assets/Sidebar/Dash"
import Header from "../../Layouts/User/Header"
import SideMenu from "../../Components/User/SideMenu"
import Notifications from "../../Components/User/NotificationComp"
import not1 from "../../Assets/images/icon/dbr1.jpg"
import not2 from "../../Assets/images/icon/dbr2.jpg"
import not3 from "../../Assets/images/icon/dbr3.jpg"
import room02 from "../../Assets/images/rooms/02.jpg"
import {currencyFormat} from "../../Helpers/Helpers"






class UserCheckout extends Component {
    state={
      hotel_info: this.props.location.state.data
    }


    componentDidMount(){ 

        // init_jquery();
      window.scrollTo(0, 0);

        // DashTrigger();
    }

    render(){
 require('../../Assets/css/bootstrap.css');

      
        return(
         <div>
             <Header/>

 
    <section>
        <div className="v2-hom-search">
          <div className="container">
            <div className="row">
              
              <div className="col-md-6">
                <div className>
                  <form className="contact__form v2-search-form" method="post" action="#">
                    <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                      Thank you for arranging a wonderful trip for us! Our team will contact you shortly!
                    </div>
                    <h4 className="sofia">Booking Details</h4>
                    <b className="sofia">Primary/Main Contact Information</b>
                    <hr/>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" className="validate" value="Miracle Godspeed" name="name" required />
                        {/* <label>Enter your name</label> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input type="number" className="validate" value="08076767676" name="phone" required />
                        {/* <label>Enter your phone</label> */}
                      </div>
                      <div className="input-field col s6">
                        <input type="email" className="validate" value="staycation@mail.com" name="email" required />
                        {/* <label>Enter your email</label> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" id="select-city-1" className="autocomplete validate" name="city" />
                        <label htmlFor="select-city-1">Nationality</label>
                      </div>
                     
                    </div>
            
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="submit" value="Book Now" className="waves-effect waves-light tourz-sear-btn v2-ser-btn cation-back" />
                      </div>
                    </div>
                  </form>
                </div>						
              </div>				
           
              <div className="col-md-6">
                <div style={{background:'#f9f9f9'}}>
                  <form className="contact__form v2-search-form" method="#" action="#">
                    <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                      Thank you for arranging a wonderful trip for us! Our team will contact you shortly!
                    </div>
                    <div className="row">
                 
                          <div className="col-md-3 tr-room-type-list-1"><img src={this.state.hotel_info?.bannerImage} alt="" />
                          </div>
                          <div className="col-md-8 tr-room-type-list-2">
                            <h4>{this.state.hotel_info?.Name}</h4>
                            <p>
                                {/* <b>Premium Rooms(EXECUTIVE) </b> */}
                                {this.state.hotel_info?.Address}</p> 
                             </div>
                        
                        
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="input-field col s6">
                      
                        <h5>Check In</h5>
                        <p className="text-success sofia"><i className="fa fa-clock-o"/> 11:00am, 29th, May 2021</p>
                      </div>
                      <div className="input-field col s6">
                        {/* <input type="email" className="validate" name="email" required /> */}
                        <h5>Check Out</h5>
                        <p className="text-danger sofia"><i className="fa fa-clock-o"/> 11:00am, 29th, May 2021</p>

                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="input-field col s12">
                      <small className="text-danger sofia"><i className="fa fa-users"/> 4 Guest &nbsp; &nbsp; &nbsp; &nbsp; <i className="fa fa-building"/> 4 Rooms
                      &nbsp; &nbsp; &nbsp; &nbsp; <i className="fa fa-clock-o"/> 2 Nights
                      </small>
                      </div>
                     
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="input-field col s6">
                        <p className="sofia"><i className="fa fa-get-pocket"/> 2 Ultra Deluxe Rooms</p>
                        <p className="sofia"><i className="fa fa-get-pocket"/> 2 Economic Class</p>
                      </div>
                      <div className="input-field col s6">
                      <p className="sofia text-success">{currencyFormat(12000)}.00</p>
                        <p className="sofia text-success">{currencyFormat(8000)}.00</p>
                      </div>
                    </div>


                    <hr/>
                    <div className="row">
                      <div className="input-field col s6">
                        <h4 className="sofia">Total Payable Amount: </h4>
                      </div>
                      <div className="input-field col s6">
                      <h3 className="sofia text-success">{currencyFormat(30000)}.00</h3>
                      </div>
                    </div>
                 
                    
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="submit" value="Process Payment" className="waves-effect waves-light tourz-sear-btn v2-ser-btn cation-back" />
                      </div>
                    </div>
                  </form>
                </div>						
              </div>				
           
            </div>
          </div>
        </div>
      </section>
         </div>
        )
    }
}

export default UserCheckout;