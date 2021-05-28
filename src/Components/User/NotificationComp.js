import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import {Link} from 'react-router-dom'
import not1 from "../../Assets/images/icon/dbr1.jpg"
import not2 from "../../Assets/images/icon/dbr2.jpg"
import not3 from "../../Assets/images/icon/dbr3.jpg"



class Notifications extends Component {
    state={

    }


    componentDidMount(){ 
        init_jquery();
    }

    render(){
      
        return(
            <div className="db-3">
            <h4>Notifications</h4>
            <ul>
              <li>
                <a href="#!"> <img src={not1} alt="" />
                  <h5>50% Discount Offer</h5>
                  <p>Pine Crest Hotels</p>
                </a>
              </li>
              <li>
                <a href="#!"> <img src={not2} alt="" />
                  <h5>Abuja Fest</h5>
                  <p>20th, August for Abuja Festivals</p>
                </a>
              </li>
              <li>
                <a href="#!"> <img src={not3} alt="" />
                  <h5>Group Bookings - Available</h5>
                  <p>Bon Sunshine Hotels</p>
                </a>
              </li>
             
             
            </ul>
          </div>
        
        
        )
    }
}

export default Notifications;