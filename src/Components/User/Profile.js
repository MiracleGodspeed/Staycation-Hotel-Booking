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



class UserProfile extends Component {
    state={

    }


    componentDidMount(){ 
        init_jquery();
        // DashTrigger();
    }

    render(){
 require('../../Assets/css/bootstrap.css');

      
        return(
         <div>
             <Header/>

 
              <section>
        <div className="db">
          {/*LEFT SECTION*/}
         
          <SideMenu/>
          {/*CENTER SECTION*/}
          <div className="db-2">
            <div className="db-2-com db-2-main">
              <h4>My Profile</h4>
              <div className="db-2-main-com db-2-main-com-table">
                <table className="responsive-table">
                  <tbody>
                    <tr>
                      <td>User Name</td>
                      <td>:</td>
                      <td>O. Godspeed Miracle</td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>:</td>
                      <td>staycation_password</td>
                    </tr>
                    <tr>
                      <td>Eamil</td>
                      <td>:</td>
                      <td>miracle_godspeed@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>+234 70 4561 3214</td>
                    </tr>
                    <tr>
                      <td>Date of birth</td>
                      <td>:</td>
                      <td>03 Jun 19**</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Lekki Phase I, Lagos State</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td><span className="db-done">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="db-mak-pay-bot">
                  <p>Hi Miracle! Kindly confirm that profile details provided above are accurate. If not, hit the Edit button below</p> <a href="#" className="btn btn-primary  waves-effect waves-light btn-large">Edit my profile</a> </div>
              </div>
            </div>
          </div>
          {/*RIGHT SECTION*/}
        <Notifications/>
        </div>
      </section>
         </div>
        )
    }
}

export default UserProfile;