import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"


class Register extends Component{
    state={

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
            <Header/>
             <div>
        <section>
          <div className="tr-register">
            <div className="tr-regi-form">
              <h4>Create an Account</h4>
              <p>It's free and always will be.</p>
              <form className="col s12">
                <div className="row">
                  <div className="input-field col m6 s12">
                    <input type="text" className="validate" />
                    <label>First Name</label>
                  </div>
                  <div className="input-field col m6 s12">
                    <input type="text" className="validate" />
                    <label>Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="number" className="validate" />
                    <label>Mobile</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="email" className="validate" />
                    <label>Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="password" className="validate" />
                    <label>Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="password" className="validate" />
                    <label>Confirm Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="submit" defaultValue="submit" className="waves-effect waves-light btn-large full-btn" /> </div>
                </div>
              </form>
              <p>Are you a already member ? <a href="login.html">Click to Login</a>
              </p>
            </div>
          </div>
        </section>
        {/*END DASHBOARD*/}
        {/*====== TIPS BEFORE TRAVEL ==========*/}
        <section>
          <div className="rows tips tips-home tb-space home_title">
            <div className="container tips_1">
              {/* TIPS BEFORE TRAVEL */}
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>Tips Before Travel</h3>
                <div className="tips_left tips_left_1">
                  <h5>Bring copies of your passport</h5>
                  <p>Aliquam pretium id justo eget tristique. Aenean feugiat vestibulum blandit.</p>
                </div>
                <div className="tips_left tips_left_2">
                  <h5>Register with your embassy</h5>
                  <p>Mauris efficitur, ante sit amet rhoncus malesuada, orci justo sollicitudin.</p>
                </div>
                <div className="tips_left tips_left_3">
                  <h5>Always have local cash</h5>
                  <p>Donec et placerat ante. Etiam et velit in massa. </p>
                </div>
              </div>
              {/* CUSTOMER TESTIMONIALS */}
              <div className="col-md-8 col-sm-6 col-xs-12 testi-2">
                {/* TESTIMONIAL TITLE */}
                <h3>Customer Testimonials</h3>
                <div className="testi">
                  <h4>John William</h4>
                  <p>Ut sed sem quis magna ultricies lacinia et sed tortor. Ut non tincidunt nisi, non elementum lorem. Aliquam gravida sodales</p> <address>Illinois, United States of America</address> </div>
                {/* ARRANGEMENTS & HELPS */}
                <h3>Arrangement &amp; Helps</h3>
                <div className="arrange">
                  <ul>
                    {/* LOCATION MANAGER */}
                    <li>
                      <a href="#"><img src="images/Location-Manager.png" alt="" /> </a>
                    </li>
                    {/* PRIVATE GUIDE */}
                    <li>
                      <a href="#"><img src="images/Private-Guide.png" alt="" /> </a>
                    </li>
                    {/* ARRANGEMENTS */}
                    <li>
                      <a href="#"><img src="images/Arrangements.png" alt="" /> </a>
                    </li>
                    {/* EVENT ACTIVITIES */}
                    <li>
                      <a href="#"><img src="images/Events-Activities.png" alt="" /> </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== FOOTER 1 ==========*/}
        <section>
          <div className="rows">
            <div className="footer1 home_title tb-space">
              <div className="pla1 container">
                {/* FOOTER OFFER 1 */}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="disco">
                    <h3>30%<span>OFF</span></h3>
                    <h4>Eiffel Tower,Rome</h4>
                    <p>valid only for 24th Dec</p> <a href="booking.html">Book Now</a> </div>
                </div>
                {/* FOOTER OFFER 2 */}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="disco1 disco">
                    <h3>42%<span>OFF</span></h3>
                    <h4>Colosseum,Burj Al Arab</h4>
                    <p>valid only for 18th Nov</p> <a href="booking.html">Book Now</a> </div>
                </div>
                {/* FOOTER MOST POPULAR VACATIONS */}
                <div className="col-md-6 col-sm-12 col-xs-12 foot-spec footer_places">
                  <h4><span>Most Popular</span> Vacations</h4>
                  <ul>
                    <li><a href="tour-details.html">Angkor Wat</a> </li>
                    <li><a href="tour-details.html">Buckingham Palace</a> </li>
                    <li><a href="tour-details.html">High Line</a> </li>
                    <li><a href="tour-details.html">Sagrada Família</a> </li>
                    <li><a href="tour-details.html">Statue of Liberty </a> </li>
                    <li><a href="tour-details.html">Notre Dame de Paris</a> </li>
                    <li><a href="tour-details.html">Taj Mahal</a> </li>
                    <li><a href="tour-details.html">The Louvre</a> </li>
                    <li><a href="tour-details.html">Tate Modern, London</a> </li>
                    <li><a href="tour-details.html">Gothic Quarter</a> </li>
                    <li><a href="tour-details.html">Table Mountain</a> </li>
                    <li><a href="tour-details.html">Bayon</a> </li>
                    <li><a href="tour-details.html">Great Wall of China</a> </li>
                    <li><a href="tour-details.html">Hermitage Museum</a> </li>
                    <li><a href="tour-details.html">Yellowstone</a> </li>
                    <li><a href="tour-details.html">Musée d'Orsay</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== FOOTER 2 ==========*/}
        <section>
          <div className="rows">
            <div className="footer">
              <div className="container">
                <div className="foot-sec2">
                  <div>
                    <div className="row">
                      <div className="col-sm-3 foot-spec foot-com">
                        <h4><span>Holiday</span> Tour &amp; Travels</h4>
                        <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
                      </div>
                      <div className="col-sm-3 foot-spec foot-com">
                        <h4><span>Address</span> &amp; Contact Info</h4>
                        <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
                        <p> <span className="strong">Phone: </span> <span className="highlighted">+101-1231-1231</span> </p>
                      </div>
                      <div className="col-sm-3 col-md-3 foot-spec foot-com">
                        <h4><span>SUPPORT</span> &amp; HELP</h4>
                        <ul className="two-columns">
                          <li> <a href="#">About Us</a> </li>
                          <li> <a href="#">FAQ</a> </li>
                          <li> <a href="#">Feedbacks</a> </li>
                          <li> <a href="#">Blog </a> </li>
                          <li> <a href="#">Use Cases</a> </li>
                          <li> <a href="#">Advertise us</a> </li>
                          <li> <a href="#">Discount</a> </li>
                          <li> <a href="#">Vacations</a> </li>
                          <li> <a href="#">Branding Offers </a> </li>
                          <li> <a href="#">Contact Us</a> </li>
                        </ul>
                      </div>
                      <div className="col-sm-3 foot-social foot-spec foot-com">
                        <h4><span>Follow</span> with us</h4>
                        <p>Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
                        <ul>
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                          <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                          <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== FOOTER - COPYRIGHT ==========*/}
        <section>
          <div className="rows copy">
            <div className="container">
              <p>Copyrights © 2017 Company Name. All Rights Reserved</p>
            </div>
          </div>
        </section>
        <section>
          <div className="icon-float">
            <ul>
              <li><a href="#" className="sh">1k <br /> Share</a> </li>
              <li><a href="#" className="fb1"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
              <li><a href="#" className="gp1"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
              <li><a href="#" className="tw1"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
              <li><a href="#" className="li1"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
              <li><a href="#" className="wa1"><i className="fa fa-whatsapp" aria-hidden="true" /></a> </li>
              <li><a href="#" className="sh1"><i className="fa fa-envelope-o" aria-hidden="true" /></a> </li>
            </ul>
          </div>
        </section>
      </div>
            </div>
        )
    }
}
export default Register;