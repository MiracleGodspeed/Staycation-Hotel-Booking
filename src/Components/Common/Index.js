import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {init_jquery} from "../../Assets/js/custom"
import icon1 from "../../Assets/images/icon/2.png"
import icon2 from "../../Assets/images/icon/31.png"
import icon3 from "../../Assets/images/icon/30.png"
import icon4 from "../../Assets/images/icon/1.png"
import t5 from "../../Assets/images/t5.png"
import t1 from "../../Assets/images/t1.png"
import t2 from "../../Assets/images/t2.png"
import t3 from "../../Assets/images/t3.png"
import t4 from "../../Assets/images/t4.png"
import t6 from "../../Assets/images/t6.png"
import band from "../../Assets/images/band.png"
import band1 from "../../Assets/images/band1.png"
import clock from "../../Assets/images/clock.png"
import info from "../../Assets/images/info.png"
import price from "../../Assets/images/price.png"
import map from "../../Assets/images/map.png"
import logo from "../../Assets/images/logo.png"
import home from "../../Assets/images/listing/home.jpg"
import home3 from "../../Assets/images/listing/home3.jpg"
import home2 from "../../Assets/images/listing/home2.jpg"
import home1 from "../../Assets/images/listing/home1.jpg"
import home4 from "../../Assets/images/listing/home4.jpg"
import h1 from "../../Assets/images/hotels/1.jpg"
import h2 from "../../Assets/images/hotels/2.jpg"
import h3 from "../../Assets/images/hotels/3.jpg"
import place2 from "../../Assets/images/place2.jpg"
import place1 from "../../Assets/images/place1.jpg"
import place3 from "../../Assets/images/place3.jpg"
import place4 from "../../Assets/images/place4.jpg"
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from "reactstrap";

class Home extends Component{
    state={

    }

    componentDidMount(){
        // init_jquery();
    }
    render(){
        return(
            <>
                {/* <h2>Home</h2>
                <button className="btn btn-success">Click</button> */}
      <div>
     
     
	
<Header/>
{/* <Modal isOpen>
       <ModalBody>
         <h1>Modal</h1>
       </ModalBody>
     </Modal> */}
        {/*END HEADER SECTION*/}
        {/*HEADER SECTION*/}
        <section>
          <div className="tourz-search">
            <div className="container">
              <div className="row">
                <div className="tourz-search-1">
                  <h1>Explore and book the best Hotels Now!</h1>
                  <p>Discover the best hotels across Nigeria and make reservations, find vacation packages, search affordable and classy hotels</p>
                  <form className="tourz-search-form">
                    <div className="input-field" style={{cursor:'pointer'}}>
                      <input type="text" style={{cursor:'pointer'}} id="select-city" disabled className="autocomplete" />
                      <label htmlFor="select-city" style={{cursor:'pointer'}}>Filter By &nbsp; <i className="fa fa-filter"/></label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="select-search" className="autocomplete" />
                      <label htmlFor="select-search" className="search-hotel-type">Search over 12,900, hotels and more</label>
                    </div>
                    <div className="input-field">
                      {/* <input type="submit" defaultValue="search" className="link-btn" /> */}
                      <button className="link-btn">Search</button>

                       </div>
                  </form>
                  <div className="tourz-hom-ser">
                    <ul>
                      <li>
                        <a href="booking-tour-package.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="0.5s"><img src={icon1} alt="" /> Lagos</a>
                      </li>
                      <li>
                        <a href="booking-flight.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="1s"><img src={icon2} alt="" /> Abuja</a>
                      </li>
                      <li>
                        <a href="booking-car-rentals.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="1.5s"><img src={icon3} alt="" /> Asaba</a>
                      </li>
                      <li>
                        <a href="booking-hotel.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="2s"><img src={icon4} alt="" />Enugu</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END HEADER SECTION*/}
        <section>
          <div className="rows pad-bot-redu tb-space">
            <div className="container">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title">
                <h2>Top <span>Hotel Deals</span></h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>Nigeria's leading Hotel Booking website, Over 2,000 packages nationwidewide.</p>
              </div>
              <div>
                {/* TOUR PLACE 1 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow slideInUp" data-wow-duration="0.5s">
                  {/* OFFER BRAND */}
                  <div className="band"> <img src={band} alt="" /> </div>
                  {/* IMAGE */}
                  <div className="v_place_img"> <img src={t5} alt="Tour Booking" title="Tour Booking" /> </div>
                  {/* TOUR TITLE & ICONS */}
                  <div className="b_pack rows">
                    {/* TOUR TITLE */}
                    <div className="col-md-12 col-sm-12">
                      <h4><Link to={"/Hotel_Details"}>Pine Crest Hotels<span className="v_pl_name">(Lekki)</span></Link></h4>
                    </div>
                    {/* TOUR ICONS */}
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                      <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* TOUR PLACE 2 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow fadeInUp" data-wow-duration="0.7s">
                  {/* OFFER BRAND */}
                  <div className="band"> <img src={band1} alt="" /> </div>
                  {/* IMAGE */}
                  <div className="v_place_img"> <img src={t1} alt="Tour Booking" title="Tour Booking" /> </div>
                  {/* TOUR TITLE & ICONS */}
                  <div className="b_pack rows">
                    {/* TOUR TITLE */}
                    <div className="col-md-12 col-sm-12">
                      <h4><Link to={"/Hotel_Details"}>BON Sunshine Hotels<span className="v_pl_name">(Enugu)</span></Link></h4>
                    </div>
                    {/* TOUR ICONS */}
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                    <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* TOUR PLACE 3 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow fadeInUp" data-wow-duration="0.9s">
                  <div className="v_place_img"><img src={t2} alt="Tour Booking" title="Tour Booking" /> </div>
                  <div className="b_pack rows">
                    <div className="col-md-12 col-sm-12">
                      <h4><Link to={"/Hotel_Details"}>Top Rank Luxury Palace<span className="v_pl_name">(Asaba)</span></Link></h4>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                    <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* TOUR PLACE 4 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow fadeInUp" data-wow-duration="1.1s">
                  <div className="v_place_img"><img src={t3} alt="Tour Booking" title="Tour Booking" /> </div>
                  <div className="b_pack rows">
                    <div className="col-md-12 col-sm-12">
                      <h4><a href="tour-details.html">Coal City Hotel<span className="v_pl_name">(GRA, Enugu)</span></a></h4>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                    <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* TOUR PLACE 5 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow fadeInUp" data-wow-duration="1.3s">
                  <div className="v_place_img"><img src={t4} alt="Tour Booking" title="Tour Booking" /> </div>
                  <div className="b_pack rows">
                    <div className="col-md-12 col-sm-12">
                      <h4><a href="tour-details.html">Brix Luxury<span className="v_pl_name">(Owerri)</span></a></h4>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                    <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* TOUR PLACE 6 */}
                <div className="col-md-4 col-sm-6 col-xs-12 b_packages wow fadeInUp" data-wow-duration="1.5s">
                  <div className="v_place_img"><img src={t6} alt="Tour Booking" title="Tour Booking" /> </div>
                  <div className="b_pack rows">
                    <div className="col-md-12 col-sm-12">
                      <h4><a href="tour-details.html">Park View<span className="v_pl_name">(Uyo, Akwa-Ibom)</span></a></h4>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 pack_icon">
                    <ul>
                        <li>
                          <a href="#"><img src={clock} alt="Date" title="Tour Timing" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={info} alt="Details" title="View more details" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={price} alt="Price" title="Price" /> </a>
                        </li>
                        <li>
                          <a href="#"><img src={map} alt="Location" title="Location" /> </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== HOME HOTELS ==========*/}
        <section>
          <div className="rows tb-space pad-top-o pad-bot-redu">
            <div className="container">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title">
                <h2>Popular <span>Cities</span> </h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>Nigeria's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
              </div>
              {/* CITY */}
              <div className="col-md-6">
                <a href="tour-details.html">
                  <div className="tour-mig-like-com">
                    <div className="tour-mig-lc-img"> <img src={home} alt="" /> </div>
                    <div className="tour-mig-lc-con">
                      <h5>Abuja</h5>
                      <p><span>2,345 Hotels</span></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="tour-details.html">
                  <div className="tour-mig-like-com">
                    <div className="tour-mig-lc-img"> <img src={home3} alt="" /> </div>
                    <div className="tour-mig-lc-con tour-mig-lc-con2">
                      <h5>Lagos</h5>
                      <p>1,200 Hotels</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="tour-details.html">
                  <div className="tour-mig-like-com">
                    <div className="tour-mig-lc-img"> <img src={home2} alt="" /> </div>
                    <div className="tour-mig-lc-con tour-mig-lc-con2">
                      <h5>Warri</h5>
                      <p>1,004 Hotels</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="tour-details.html">
                  <div className="tour-mig-like-com">
                    <div className="tour-mig-lc-img"> <img src={home1} alt="" /> </div>
                    <div className="tour-mig-lc-con tour-mig-lc-con2">
                      <h5>Enugu</h5>
                      <p>2,450 Hotels</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="tour-details.html">
                  <div className="tour-mig-like-com">
                    <div className="tour-mig-lc-img"> <img src={home4} alt="" /> </div>
                    <div className="tour-mig-lc-con tour-mig-lc-con2">
                      <h5>Owerri</h5>
                      <p>2,400 Hotels</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*====== HOME HOTELS ==========*/}
        <section>
          <div className="rows tb-space pad-top-o pad-bot-redu">
            <div className="container">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title">
                <h2>Hotels <span>booking open now! </span> </h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>Nigeria's leading Hotel Booking website,Over 30,000 Hotel rooms nationwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
              </div>
              {/* HOTEL GRID */}
              <div className="to-ho-hotel">
                {/* HOTEL GRID */}
                {/* <div className="col-md-4">
                  <div className="to-ho-hotel-con">
                    <div className="to-ho-hotel-con-1">
                      <div className="hot-page2-hli-3"> <img src="images/hci1.png" alt="" /> </div>
                      <div className="hom-hot-av-tic"> Available Tickets: 42 </div> <img src={h1} alt="" /> </div>
                    <div className="to-ho-hotel-con-23">
                      <div className="to-ho-hotel-con-2">
                        <a href="hotel-details.html">
                          <h4>GTC Grand Chola</h4>
                        </a>
                      </div>
                      <div className="to-ho-hotel-con-3">
                        <ul>
                          <li>City: illunois,united states
                            <div className="dir-rat-star ho-hot-rat-star"> Rating: <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          </li>
                          <li><span className="ho-hot-pri-dis">$720</span><span className="ho-hot-pri">$420</span> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                */}
               
                {/* HOTEL GRID */}
                <div className="col-md-4">
                  <div className="to-ho-hotel-con">
                    <div className="to-ho-hotel-con-1">
                      <div className="hot-page2-hli-3"> <img src="images/hci1.png" alt="" /> </div>
                      <div className="hom-hot-av-tic"> Available Tickets: 520 </div> <img src={h2} alt="" /> </div>
                    <div className="to-ho-hotel-con-23">
                      <div className="to-ho-hotel-con-2">
                        <a href="hotel-details.html">
                          <h4>Adebola Grand Resorts</h4>
                        </a>
                      </div>
                      <div className="to-ho-hotel-con-3">
                        <ul>
                          <li>City: illunois,united states
                            <div className="dir-rat-star ho-hot-rat-star"> Rating: <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          </li>
                          <li><span className="ho-hot-pri-dis">N40,000</span><span className="ho-hot-pri">N54,000</span> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* HOTEL GRID */}
                <div className="col-md-4">
                  <div className="to-ho-hotel-con">
                    <div className="to-ho-hotel-con-1">
                      <div className="hot-page2-hli-3"> <img src="images/hci1.png" alt="" /> </div>
                      <div className="hom-hot-av-tic"> Available Tickets: 92 </div> <img src={h3} alt="" /> </div>
                    <div className="to-ho-hotel-con-23">
                      <div className="to-ho-hotel-con-2">
                        <a href="hotel-details.html">
                          <h4>Keep Grand Hotels</h4>
                        </a>
                      </div>
                      <div className="to-ho-hotel-con-3">
                        <ul>
                          <li>City: illunois,united states
                            <div className="dir-rat-star ho-hot-rat-star"> Rating: <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          </li>
                          <li><span className="ho-hot-pri-dis">N60,000</span><span className="ho-hot-pri">N38,000</span> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== SECTION: FREE CONSULTANT ==========*/}
        <section>
          <div className="offer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="offer-l"> <span className="ol-1" /> <span className="ol-2"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span> <span className="ol-4">Standardized Budget Rooms</span>                            <span className="ol-3" /> <span className="ol-5">N50,000/-</span>
                    <ul>
                      <li className="wow fadeInUp" data-wow-duration="0.5s">
                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src="images/icon/dis1.png" alt="" />
                        </a><span>Free WiFi</span>
                      </li>
                      <li className="wow fadeInUp" data-wow-duration="0.7s">
                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src="images/icon/dis2.png" alt="" /> </a><span>Breakfast</span>
                      </li>
                      <li className="wow fadeInUp" data-wow-duration="0.9s">
                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src="images/icon/dis3.png" alt="" /> </a><span>Pool</span>
                      </li>
                      <li className="wow fadeInUp" data-wow-duration="1.1s">
                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src="images/icon/dis4.png" alt="" /> </a><span>Television</span>
                      </li>
                      <li className="wow fadeInUp" data-wow-duration="1.3s">
                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src="images/icon/dis5.png" alt="" /> </a><span>GYM</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="offer-r">
                    <div className="or-1"> <span className="or-11">go</span> <span className="or-12">Stays</span> </div>
                    <div className="or-2"> <span className="or-21">Get</span> <span className="or-22">70%</span> <span className="or-23">Off</span> <span className="or-24">use code: RG5481WERQ</span> <span className="or-25" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== EVENTS ==========*/}
        <section>
          <div className="rows tb-space">
            <div className="container events events-1" id="inner-page-title">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title">
                <h2>Top <span>Events</span> in this month</h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
              </div>
              <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Event Name.." title="Type in a name" />
              <table id="myTable">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th className="e_h1">Date</th>
                    <th className="e_h1">Time</th>
                    <th className="e_h1">Location</th>
                    <th>Book</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td><img src="images/iplace-1.jpg" alt="" /><a href="hotels-list.html" className="events-title">Taj Mahal,Agra, India</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Australia</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><img src="images/iplace-2.jpg" alt="" /><a href="hotels-list.html" className="events-title">Salesforce Summer, Dubai</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Dubai</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><img src="images/iplace-3.jpg" alt="" /><a href="hotels-list.html" className="events-title">God Towers, TOKYO, JAPAN</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">JAPAN</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><img src="images/iplace-4.jpg" alt="" /><a href="hotels-list.html" className="events-title">TOUR DE ROMANDIE, Switzerland</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Switzerland</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><img src="images/iplace-5.jpg" alt="" /><a href="hotels-list.html" className="events-title">TOUR DE POLOGNE, Poland</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Poland</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><img src="images/iplace-6.jpg" alt="" /><a href="hotels-list.html" className="events-title">Future of Marketing,Sydney, Australia</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Australia</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><img src="images/iplace-7.jpg" alt="" /><a href="hotels-list.html" className="events-title">Eiffel Tower, Paris</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">France</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><img src="images/iplace-8.jpg" alt="" /><a href="hotels-list.html" className="events-title">PARIS - ROUBAIX, England</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">England</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><img src="images/iplace-9.jpg" alt="" /><a href="hotels-list.html" className="events-title">Dubai Beach Resort, Dubai</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Dubai</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td><img src="images/iplace-4.jpg" alt="" /><a href="hotels-list.html" className="events-title">TOUR DE POLOGNE, Poland</a> </td>
                    <td className="e_h1">16.12.2016</td>
                    <td className="e_h1">10.00 PM</td>
                    <td className="e_h1">Poland</td>
                    <td><a href="booking.html" className="link-btn">Book Now</a> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/*====== POPULAR TOUR PLACES ==========*/}
        <section>
          <div className="rows pla pad-bot-redu tb-space">
            <div className="pla1 p-home container">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title spe-title-1">
                <h2>Top <span>Sight Seeing</span> in this month</h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
              </div>
              <div className="popu-places-home">
                {/* POPULAR PLACES 1 */}
                <div className="col-md-6 col-sm-6 col-xs-12 place">
                  <div className="col-md-6 col-sm-12 col-xs-12"> <img src={place2} alt="" /> </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3><span>Honeymoon Package</span> 7 Days / 6 Nights</h3>
                    <p>lorem ipsum simplelorem ipsum simplelorem ipsum simplelorem ipsum simple</p> <a href="tour-details.html" className="link-btn">more info</a> </div>
                </div>
                {/* POPULAR PLACES 2 */}
                <div className="col-md-6 col-sm-6 col-xs-12 place">
                  <div className="col-md-6 col-sm-12 col-xs-12"> <img src={place1} alt="" /> </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3><span>Family package</span> 14 Days / 13 Nights</h3>
                    <p>lorem ipsum simplelorem ipsum simplelorem ipsum simplelorem ipsum simple</p> <a href="tour-details.html" className="link-btn">more info</a> </div>
                </div>
              </div>
              <div className="popu-places-home">
                {/* POPULAR PLACES 3 */}
                <div className="col-md-6 col-sm-6 col-xs-12 place">
                  <div className="col-md-6 col-sm-12 col-xs-12"> <img src={place3} alt="" /> </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3><span>Weekend Package </span> 3 Days / 2 Nights</h3>
                    <p>lorem ipsum simplelorem ipsum simplelorem ipsum simplelorem ipsum simple</p> <a href="tour-details.html" className="link-btn">more info</a> </div>
                </div>
                {/* POPULAR PLACES 4 */}
                <div className="col-md-6 col-sm-6 col-xs-12 place">
                  <div className="col-md-6 col-sm-12 col-xs-12"> <img src={place4} alt="" /> </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3><span>Group Package</span> 10 Days / 9 Nights</h3>
                    <p>lorem ipsum simplelorem ipsum simplelorem ipsum simplelorem ipsum simple</p> <a href="tour-details.html" className="link-btn">more info</a> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== REQUEST A QUOTE ==========*/}
        <section>
          <div className="ho-popu tb-space pad-bot-redu">
            <div className="rows container">
              {/* TITLE & DESCRIPTION */}
              <div className="spe-title">
                <h2>Top <span>Branding</span> for this month</h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
              </div>
              <div className="ho-popu-bod">
                <div className="col-md-4">
                  <div className="hot-page2-hom-pre-head">
                    <h4>Top Branding <span>Hotels</span></h4>
                  </div>
                  <div className="hot-page2-hom-pre">
                    <ul>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/hotels/1.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Taaj Club House</h5> <span>City: illunois, United States</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>4.5</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/hotels/2.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Universal luxury Grand Hotel</h5> <span>City: Rio,Brazil</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>4.2</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/hotels/3.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Barcelona Grand Pales</h5> <span>City: Chennai,India</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>5.0</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/hotels/4.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Lake Palace view Hotel</h5> <span>City: Beijing,China</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>2.5</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/hotels/8.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>First Class Grandd Hotel</h5> <span>City: Berlin,Germany</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>4.0</span> </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-page2-hom-pre-head">
                    <h4>Top Branding <span>Packages</span></h4>
                  </div>
                  <div className="hot-page2-hom-pre">
                    <ul>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/trends/1.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Family Package Luxury</h5> <span>Duration: 7 Days and 6 Nights</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>4.1</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/trends/2.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Honeymoon Package Luxury</h5> <span>Duration: 14 Days and 13 Nights</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>4.4</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/trends/3.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Group Package Luxury</h5> <span>Duration: 28 Days and 29 Nights</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>3.0</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/trends/4.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Regular Package Luxury</h5> <span>Duration: 12 Days and 11 Nights</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>3.5</span> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/trends/1.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Custom Package Luxury</h5> <span>Duration: 10 Days and 10 Nights</span> </div>
                          <div className="hot-page2-hom-pre-3"> <span>5.0</span> </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-page2-hom-pre-head">
                    <h4>Top Branding <span>Reviewers</span></h4>
                  </div>
                  <div className="hot-page2-hom-pre">
                    <ul>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/reviewer/1.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Christopher</h5> <span>No of Reviews: 620, City: illunois</span> </div>
                          <div className="hot-page2-hom-pre-3"> <i className="fa fa-hand-o-right" aria-hidden="true" /> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/reviewer/2.png" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Matthew</h5> <span>No of Reviews: 48, City: Rio</span> </div>
                          <div className="hot-page2-hom-pre-3"> <i className="fa fa-hand-o-right" aria-hidden="true" /> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/reviewer/3.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Stephanie</h5> <span>No of Reviews: 560, City: Chennai</span> </div>
                          <div className="hot-page2-hom-pre-3"> <i className="fa fa-hand-o-right" aria-hidden="true" /> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/reviewer/4.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Robert</h5> <span>No of Reviews: 920, City: Beijing</span> </div>
                          <div className="hot-page2-hom-pre-3"> <i className="fa fa-hand-o-right" aria-hidden="true" /> </div>
                        </a>
                      </li>
                      {/*LISTINGS*/}
                      <li>
                        <a href="hotels-list.html">
                          <div className="hot-page2-hom-pre-1"> <img src="images/reviewer/5.jpg" alt="" /> </div>
                          <div className="hot-page2-hom-pre-2">
                            <h5>Danielle</h5> <span>No of Reviews: 768, City: Berlin</span> </div>
                          <div className="hot-page2-hom-pre-3"> <i className="fa fa-hand-o-right" aria-hidden="true" /> </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== REQUEST A QUOTE ==========*/}
       
        {/*====== REQUEST A QUOTE ==========*/}
       
<Footer/>



        {/* <div>
       <section>
          <div className="form tb-space">
            <div className="rows container">
              <div className="spe-title">
                <h2>Book your <span>favourite Package</span> Now!</h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
                <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 form_1">
                <div className="succ_mess">Thank you for contacting us we will get back to you soon.</div>
                <form id="home_form" name="home_form" action="mail/send.php">
                  <ul>
                    <li>
                      <input type="text" name="ename" defaultValue id="ename" placeholder="Name" required />
                    </li>
                    <li>
                      <input type="tel" name="emobile" defaultValue id="emobile" placeholder="Mobile" required />
                    </li>
                    <li>
                      <input type="email" name="eemail" defaultValue id="eemail" placeholder="Email id" required />
                    </li>
                    <li>
                      <input type="text" name="esubject" defaultValue id="esubject" placeholder="Subject" required />
                    </li>
                    <li>
                      <input type="text" name="ecity" defaultValue id="ecity" placeholder="City" required />
                    </li>
                    <li>
                      <input type="text" name="ecount" defaultValue id="ecount" placeholder="Country" required />
                    </li>
                    <li>
                      <textarea name="emess" cols={40} rows={3} id="text-comment" placeholder="Enter your message" defaultValue={""} />
                    </li>
                    <li>
                      <input type="submit" defaultValue="Submit" id="send_button" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 family">
                <img src="images/family.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div> */}
     
       
       
        {/*========= Scripts ===========*/}
        {/* Mirrored from rn53themes.net/themes/demo/travelz/main.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 May 2021 08:54:18 GMT */}
      </div>
    );
            </>
        )
    }
}

export default Home;