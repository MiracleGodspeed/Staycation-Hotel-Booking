import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import logo from "../../Assets/images/logo.png"
import logo2 from "../../Assets/images/logo-bg1.png"
import {Link} from 'react-router-dom'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"
import s1 from "../../Assets/images/gallery/s1.jpg"
import s2 from "../../Assets/images/gallery/s2.jpg"
import s3 from "../../Assets/images/gallery/s3.jpg"
import room01 from "../../Assets/images/rooms/01.jpg"
import room02 from "../../Assets/images/rooms/02.jpg"



class HotelDetails extends Component {
    state={

    }


    componentDidMount(){
        // init_jquery();
    }

    render(){
        return(
            <div>
            <div>
                <Header/>
        {/*====== BANNER ==========*/}
        <section>
          <div className="rows inner_banner inner_banner_2">
            <div className="container">
              <h2><span>The Pines Hotel</span></h2>
              <ul>
                <li><a href="#inner-page-title">Home</a>
                </li>
                <li><i className="fa fa-angle-right" aria-hidden="true" /> </li>
                <li><a href="#inner-page-title" className="bread-acti">Hotel Booking</a>
                </li>
              </ul>
              <p>Location: 28800 Independence Layout, Enugu State, Nigeria</p>
            </div>
          </div>
        </section>
        {/*====== TOUR DETAILS - BOOKING ==========*/}
        <section>
          <div className="rows banner_book" id="inner-page-title">
            <div className="container">
              <div className="banner_book_1">
                <ul>
                  <li className="dl1">Location : Enugu, Nigeria</li>
                  <li className="dl2">Price : N25,000</li>
                  <li className="dl3">Duration : One Night</li>
                  <li className="dl4"><Link to={"/Booking"}>Book Now</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*====== TOUR DETAILS ==========*/}
        <section>
          <div className="rows inn-page-bg com-colo">
            <div className="container inn-page-con-bg tb-space">
              <div className="col-md-9">
                {/*====== TOUR TITLE ==========*/}
                <div className="tour_head">
                  <h2>The Pines Hotel <span className="tour_star"><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-half-o" aria-hidden="true" /></span><span className="tour_rat">4.5</span></h2> </div>
                {/*====== TOUR DESCRIPTION ==========*/}
                <div className="tour_head1 hotel-com-color">
                  <h3>About The Pines HOTEL</h3>
                  <p>Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides.</p>
                  <p>Brazil’s view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Rio de Janeiro, Iguassu Falls, and Buenos Aires will leave you with vacation memories you’ll cherish for life.</p>
                </div>
                {/*====== ROOMS: HOTEL BOOKING ==========*/}
                <div className="tour_head1 hotel-book-room">
                  <h3>Photo Gallery</h3>
                  <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators carousel-indicators-1">
                      <li data-target="#myCarousel1" data-slide-to={0}><img src={s1} alt="Chania" />
                      </li>
                      <li data-target="#myCarousel1" data-slide-to={1}><img src={s2} alt="Chania" />
                      </li>
                      <li data-target="#myCarousel1" data-slide-to={2}><img src={s3} alt="Chania" />
                      </li>
                     
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner carousel-inner1" role="listbox">
                      <div className="item active"> <img src={s1} alt="Chania" width={460} height={345} /> </div>
                      <div className="item"> <img src={s2} alt="Chania" width={460} height={345} /> </div>
                      <div className="item"> <img src={s3} alt="Chania" width={460} height={345} /> </div>
                      
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel1" role="button" data-slide="prev"> <span><i className="fa fa-angle-left hotel-gal-arr" aria-hidden="true" /></span> </a>
                    <a className="right carousel-control" href="#myCarousel1" role="button" data-slide="next"> <span><i className="fa fa-angle-right hotel-gal-arr hotel-gal-arr1" aria-hidden="true" /></span> </a>
                  </div>
                </div>
                {/*====== ABOUT THE TOUR ==========*/}
                <div className="tour_head1">
                  <h3>special features</h3>
                  <table>
                    <tbody><tr>
                        <th>Places covered</th>
                        <th className="event-res">Inclusions</th>
                        <th className="event-res">Exclusions</th>
                        <th>Event Date</th>
                      </tr>
                      <tr>
                        <td>Rio De Janeiro ,Brazil</td>
                        <td className="event-res">Accommodation</td>
                        <td className="event-res">Return Airfare &amp; Taxes</td>
                        <td>Nov 12, 2017</td>
                      </tr>
                      <tr>
                        <td>Iguassu Falls </td>
                        <td className="event-res">8 Breakfast, 3 Dinners</td>
                        <td className="event-res">Arrival &amp; Departure transfers</td>
                        <td>Nov 14, 2017</td>
                      </tr>
                      <tr>
                        <td>Peru,Lima </td>
                        <td className="event-res">First-class Travel</td>
                        <td className="event-res">travel insurance</td>
                        <td>Nov 16, 2017</td>
                      </tr>
                      <tr>
                        <td>Cusco &amp; Buenos Aires </td>
                        <td className="event-res">Free Sightseeing</td>
                        <td className="event-res">Service tax of 4.50%</td>
                        <td>Nov 18, 2017</td>
                      </tr>
                    </tbody></table>
                </div>
                {/*====== HOTEL ROOM TYPES ==========*/}
                <div className="tour_head1">
                  <h3>ROOMS &amp; AVAILABILITIES</h3>
                  <div className="tr-room-type">
                    <ul>
                      <li>
                        <div className="tr-room-type-list">
                          <div className="col-md-3 tr-room-type-list-1"><img src={room01} alt="" />
                          </div>
                          <div className="col-md-6 tr-room-type-list-2">
                            <h4>Ultra Deluxe</h4>
                            <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
                          <div className="col-md-3 tr-room-type-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">N24,000</span> <Link to={"/Booking"} className="hot-page2-alp-quot-btn spec-btn-text">Book Now</Link> </div>
                        </div>
                      </li>
                      <li>
                        <div className="tr-room-type-list">
                          <div className="col-md-3 tr-room-type-list-1"><img src={room02} alt="" />
                          </div>
                          <div className="col-md-6 tr-room-type-list-2">
                            <h4>Premium Rooms(EXECUTIVE)</h4>
                            <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
                          <div className="col-md-3 tr-room-type-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">N17,000</span> <a href="booking.html" className="hot-page2-alp-quot-btn spec-btn-text">Book Now</a> </div>
                        </div>
                      </li>
                 
                    
                    </ul>
                  </div>
                </div>
                {/*====== AMENITIES ==========*/}
                <div className="tour_head1 hot-ameni">
                  <h3>Hotel Amenities</h3>
                  <ul>
                    <li><i className="fa fa-check" aria-hidden="true" /> Airport transportation (surcharge)</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Number of floors - 9 </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Coffee shop or café </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Dry cleaning/laundry service</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Health club </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Billiards or pool table</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Total number of rooms - 108</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Bar/lounge </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Air Conditioner </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Mini Bar (with liquor) </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Separate Bedroom </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Living Room Space </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Smoking Rooms Available </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Internet </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Transport to / from Hotel </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Concierge </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Rental Car Service Desk On Site </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Room Service </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Beauty Salon </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Business Centre </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Fitness Centre </li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Spa and Pool </li>
                  </ul>
                </div>
                {/*====== TOUR LOCATION ==========*/}
                <div className="tour_head1 tout-map map-container">
                  <h3>Location</h3>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63269148426!2d3.1438742665509865!3d6.5480356985713195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1621004980308!5m2!1sen!2sng" width="600" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy"></iframe>
                 
                </div>
                <div>
                  <div className="dir-rat">
                    <div className="dir-rat-inn dir-rat-title">
                      <h3>Write Your Rating Here</h3>
                      <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                      <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                        <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                        <input type="radio" id="star4half" name="rating" defaultValue="4 and a half" />
                        <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
                        <input type="radio" id="star4" name="rating" defaultValue={4} />
                        <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                        <input type="radio" id="star3half" name="rating" defaultValue="3 and a half" />
                        <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                        <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                        <input type="radio" id="star2half" name="rating" defaultValue="2 and a half" />
                        <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                        <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                        <input type="radio" id="star1half" name="rating" defaultValue="1 and a half" />
                        <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                        <label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                        <input type="radio" id="starhalf" name="rating" defaultValue="half" />
                        <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
                      </fieldset>
                    </div>
                    <div className="dir-rat-inn">
                      <form className="dir-rat-form">
                        <div className="form-group col-md-6 pad-left-o">
                          <input type="text" className="form-control" id="email11" placeholder="Enter Name" /> </div>
                        <div className="form-group col-md-6 pad-left-o">
                          <input type="number" className="form-control" id="email12" placeholder="Enter Mobile" /> </div>
                        <div className="form-group col-md-6 pad-left-o">
                          <input type="email" className="form-control" id="email13" placeholder="Enter Email id" /> </div>
                        <div className="form-group col-md-6 pad-left-o">
                          <input type="text" className="form-control" id="email14" placeholder="Enter your City" /> </div>
                        <div className="form-group col-md-12 pad-left-o">
                          <textarea placeholder="Write your message" defaultValue={""} />
                        </div>
                        <div className="form-group col-md-12 pad-left-o">
                          <input type="submit" defaultValue="SUBMIT" className="link-btn" /> </div>
                      </form>
                    </div>
                    {/*COMMENT RATING*/}
                    <div className="dir-rat-inn dir-rat-review">
                      <div className="row">
                        <div className="col-md-3 dir-rat-left"> <img src="images/reviewer/4.jpg" alt="" />
                          <p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
                        </div>
                        <div className="col-md-9 dir-rat-right">
                          <div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          <p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
                          <ul>
                            <li><a href="#"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*COMMENT RATING*/}
                    <div className="dir-rat-inn dir-rat-review">
                      <div className="row">
                        <div className="col-md-3 dir-rat-left"> <img src="images/reviewer/3.jpg" alt="" />
                          <p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
                        </div>
                        <div className="col-md-9 dir-rat-right">
                          <div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          <p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
                          <ul>
                            <li><a href="#"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*COMMENT RATING*/}
                    <div className="dir-rat-inn dir-rat-review">
                      <div className="row">
                        <div className="col-md-3 dir-rat-left"> <img src="images/reviewer/1.jpg" alt="" />
                          <p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
                        </div>
                        <div className="col-md-9 dir-rat-right">
                          <div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" /> </div>
                          <p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
                          <ul>
                            <li><a href="#"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true" /></a> </li>
                            <li><a href="#"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true" /></a> </li>
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
              <div className="col-md-3 tour_r">
                {/*====== SPECIAL OFFERS ==========*/}
                <div className="tour_right tour_offer">
                  <div className="band1"><img src="images/offer.png" alt="" /> </div>
                  <p>Special Offer</p>
                  <h4 style={{fontSize:'22px'}}>N50,000<span className="n-td">
                      <span className="n-td-1" style={{fontSize:'18px'}}>N80,000</span>
                    </span>
                  </h4> <a href="booking.html" className="link-btn">Book Now</a> </div>
                {/*====== TRIP INFORMATION ==========*/}
                <div className="tour_right tour_incl tour-ri-com">
                  <h3>Trip Information</h3>
                  <ul>
                    <li>Location : Enugu, Nigeria</li>
                    <li>Arrival Date: Nov 12, 2017</li>
                    <li>Departure Date: Nov 21, 2017</li>
                    <li>Free Sightseeing &amp; Hotel</li>
                  </ul>
                </div>
                {/*====== PACKAGE SHARE ==========*/}
                <div className="tour_right head_right tour_social tour-ri-com">
                  <h3>Share This Package</h3>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                    <li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true" /></a> </li>
                  </ul>
                </div>
                {/*====== HELP PACKAGE ==========*/}
                <div className="tour_right head_right tour_help tour-ri-com">
                  <h3>Help &amp; Support</h3>
                  <div className="tour_help_1">
                    <h4 className="tour_help_1_call">Call Us Now</h4>
                    <h4><i className="fa fa-phone" aria-hidden="true" /> 10-800-123-000</h4> </div>
                </div>
                {/*====== PUPULAR TOUR PACKAGES ==========*/}
                <div className="tour_right tour_rela tour-ri-com">
                  <h3>Popular Packages</h3>
                  <div className="tour_rela_1"> <img src="images/related1.png" alt="" />
                    <h4>Lagos 7Days / 6Nights</h4>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p> <a href="#" className="link-btn">View this Package</a> </div>
                  
                  <div className="tour_rela_1"> <img src="images/related3.png" alt="" />
                    <h4>Abuja 14Days / 13Nights</h4>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p> <a href="#" className="link-btn">View this Package</a> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== TIPS BEFORE TRAVEL ==========*/}
        {/*========= Scripts ===========*/}
      </div>
            </div>
        )
    }
}

export default HotelDetails;