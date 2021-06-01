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
import {isTokenValid, validateToken} from "../../Utils/auth"



let user = JSON.parse(localStorage.getItem("staycation_user"));

class UserProfile extends Component {
    state={
        user_details: JSON.parse(localStorage.getItem("staycation_user"))
    }


    componentDidMount(){ 
      window.scrollTo(0, 0);
        init_jquery();
        validateToken();
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
                      <td>Name</td>
                      <td>:</td>
                      <td>{this.state.user_details?.data?.last_name} {this.state.user_details?.data?.first_name}</td>
                    </tr>
                    {/* <tr>
                      <td>Password</td>
                      <td>:</td>
                      <td>staycation_password</td>
                    </tr> */}
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{this.state.user_details?.data?.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>{this.state.user_details?.data?.phone}</td>
                    </tr>
                    <tr>
                      <td>Date of birth</td>
                      <td>:</td>
                      <td>** ** ***</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>-</td>
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
                  <p className="sofia">Hi <b>{this.state.user_details?.data?.first_name}</b>, Kindly confirm that profile details provided above are accurate. If not, hit the Edit button below</p> <Link to={"/EditProfile"} className="btn btn-primary link-btn">Edit my profile</Link> </div>
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