import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import {Link} from 'react-router-dom'
import Avatar from "../../Assets/images/avatarMale.jpeg"
import icon11 from "../../Assets/images/icon/dbl1.png"
import icon12 from "../../Assets/images/icon/dbl2.png"
import icon13 from "../../Assets/images/icon/dbl3.png"
import icon14 from "../../Assets/images/icon/dbl4.png"
import icon16 from "../../Assets/images/icon/dbl6.png"
import icon19 from "../../Assets/images/icon/dbl9.png"
import icon17 from "../../Assets/images/icon/dbl7.png"



class SideMenu extends Component {
    state={

    }


    componentDidMount(){ 
        init_jquery();
    }

    render(){
      
        return(
            <div className="db-l">
            <div className="db-l-1">
              <ul>
                <li><img style={{height:'270px'}} src={Avatar} alt="" />
                </li>
                <li><span>80</span> Total Bookings</li>
                <li><span>18</span> Favourites</li>
              </ul>
            </div>
            <div className="db-l-2">
              <ul>
                <li>
                  <a href="#"><img src={icon11} alt="" /> All Bookings</a>
                </li>
                <li>
                  <a href="#"><img src={icon12} alt="" /> Travel Bookings</a>
                </li>
                <li>
                  <a href="#"><img src={icon13} alt="" /> Hotel Bookings</a>
                </li>
                <li>
                  <a href="#"><img src={icon14} alt="" /> Event Bookings</a>
                </li>
                <li>
                  <a href="#"><img src={icon16} alt="" /> My Profile</a>
                </li>
                <li>
                  <a href="#"><img src={icon19} alt="" /> Payments</a>
                </li>
                <li>
                  <a href="#"><img src={icon17} alt="" /> Claim &amp; Refund</a>
                </li>
              </ul>
            </div>
          </div>
          
        )
    }
}

export default SideMenu;