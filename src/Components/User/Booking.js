import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"


class Booking extends Component{
    state={

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
            <Header/>
                <section>
        <div className="tr-register">
          <div className="tr-regi-form v2-search-form">
            <h4>Book <span>The Pine's Hotel</span> Now</h4>
            <p>Enter booking details</p>
            <form className="contact__form" method="post" action="http://rn53themes.net/themes/demo/travelz/mail/tourbooking.php">
              <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                Thank you for arranging a wonderful trip for us! Our team will contact you shortly!
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" className="validate" name="name" required />
                  <label>Enter your name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input type="number" className="validate" name="phone" required />
                  <label>Enter your phone</label>
                </div>
                <div className="input-field col s6">
                  <input type="email" className="validate" name="email" required />
                  <label>Enter your email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" id="select-city-1" className="autocomplete validate" name="city" />
                  <label htmlFor="select-city-1">Select City or Place</label>
                </div>
                <div className="input-field col s12">
                  <select name="package">
                    <option value disabled selected>Select your package</option>
                    <option value="Honeymoon Package">Honeymoon Package</option>
                    <option value="Family Package">Family Package</option>
                    <option value="Holiday Package">Holiday Package</option>
                    <option value="Group Package">Group Package</option>
                    <option value="Regular Package">Regular Package</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input type="text" id="from" name="arrival" readOnly />
                  <label htmlFor="from">Arrival Date</label>
                </div>
                <div className="input-field col s6">
                  <input type="text" id="to" name="departure" readOnly />
                  <label htmlFor="to">Departure Date</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select name="noofadults">
                    <option value disabled selected>No of adults</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <select name="noofchildrens">
                    <option value disabled selected>No of childrens</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>											
                  </select>
                </div>
              </div>							
              <div className="row">
                <div className="input-field col s6">
                  <select name="minprice">
                    <option value disabled selected>Min Price</option>
                    <option value="$200">$200</option>
                    <option value="$500">$500</option>
                    <option value="$1000">$1000</option>
                    <option value="$5000">$5000</option>
                    <option value="$10,000">$10,000</option>
                    <option value="$50,000">$50,000</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <select name="maxprice">
                    <option value disabled selected>Max Price</option>
                    <option value="$200">$200</option>
                    <option value="$500">$500</option>
                    <option value="$1000">$1000</option>
                    <option value="$5000">$5000</option>
                    <option value="$10,000">$10,000</option>
                    <option value="$50,000">$50,000</option>
                  </select>
                </div>								
              </div>							
              <div className="row">
                <div className="input-field col s12">
                  <input type="submit" defaultValue="Book Now" style={{background:'#f4364f', borderRadius:'10px'}} className="waves-effect waves-light tourz-sear-btn v2-ser-btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
            </div>
        )
    }
}
export default Booking;