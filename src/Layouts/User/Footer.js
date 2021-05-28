import React, { Component } from 'react';
// import {init_jquery} from "../../Assets/js/custom"
import logo from "../../Assets/images/logo.png"
import logo2 from "../../Assets/images/logo-bg1.png"
import logo3 from "../../Assets/images/logo-bg.png"
import {Link} from 'react-router-dom'



class Footer extends Component {
    state={

    }


    componentDidMount(){
        // init_jquery();
    }

    render(){
        return(
       <div>
   {/*====== TIPS BEFORE TRAVEL ==========*/}
  
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
              <p>Copyrights © 2021 Staycation.ng - All Rights Reserved</p>
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
        )
    }
}

export default Footer;