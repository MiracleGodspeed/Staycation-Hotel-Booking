import React, { Component } from 'react';
import {init_jquery} from "../../Assets/js/custom"
import {Link} from 'react-router-dom'
import {DashTrigger} from "../../Assets/Sidebar/Dash"
import Header from "../../Layouts/User/Header"
import SideMenu from "../../Components/User/SideMenu"
import Notifications from "../../Components/User/NotificationComp"

import {isTokenValid, validateToken} from "../../Utils/auth"
import {Endpoint} from "../../Utils/endpoints"
import {editData} from "../../Utils/crud"
import SweetAlert from 'react-bootstrap-sweetalert';
import { ImportOutlined, LoadingOutlined } from '@ant-design/icons';
import {CartContext} from "../../Context/CartContext"




let user = JSON.parse(localStorage.getItem("staycation_user"));

class EditProfile extends Component {
    state={
      user_details: JSON.parse(localStorage.getItem("staycation_user")),
      first_name: user.data?.first_name,
      last_name: user.data?.last_name,
      user_phone: user.data?.phone,
      user_country: user.data?.country,
      gender: user.data?.gender,
    }

    changeText = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;  
        this.setState({
          [name]: value,
        });
      };
      
      updateProfileDetails = () => {
        this.setState({loading:true})
        let payload = {
          pin:"xxx",
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          middle_name: this.state.middle_name,
          phone: this.state.user_phone,
          gender: this.state.gender,
          country : this.state.user_country,
          zip_code:"-",
          month:"-",
          year:"-",
          day:"-"
        }

        editData(Endpoint.Update_Profile, payload, data =>{
            console.log(data)
            if(data.status === "success"){
                let retrievedData = localStorage.getItem("staycation_user");
                let parsedObject = JSON.parse(retrievedData);
                parsedObject.data.first_name = this.state.first_name;
                parsedObject.data.last_name = this.state.last_name;
                parsedObject.data.phone = this.state.user_phone;
                parsedObject.data.country = this.state.user_country;
                parsedObject.data.gender = this.state.gender;
                let modifiedForStorage = JSON.stringify(parsedObject);
                localStorage.setItem("staycation_user", modifiedForStorage);

             
                this.setState({loading:false, succ_msg:true})
                this.context.resolveCart();
            }
        })
      }
      updateChanges = () => {
        this.setState({succ_msg:false, first_name:this.state.first_name})
        // window.location.reload();

      }
      l_setItem = (item) => {
             return Promise.resolve().then(function () {
                  localStorage.setItem("staycation_user", item);

              });
      }
      l_getItem = () => {
        return Promise.resolve().then(function () {
          return localStorage.getItem("staycation_user");
      });
      }

    

    componentDidMount(){ 
      console.log(this.state)
        window.scrollTo(0, 0);
        init_jquery();
        validateToken();
    }

    render(){
 require('../../Assets/css/bootstrap.css');

 const {resolveCart} = this.context;
      
        return(
            <div>
            <Header/>

             <section>
             {this.state.succ_msg ?
                        <SweetAlert success title="Updated!" onConfirm={this.updateChanges}>
                           Your profile was successfully updated! 
                        </SweetAlert> : null}
       <div className="db">
         {/*LEFT SECTION*/}
        {/* <button onClick={resolveCart}>Update</button> */}
         <SideMenu/>
         {/*CENTER SECTION*/}
         <div className="db-2">
        <div className="db-2-com db-2-main">
          <h4>Edit My Profile </h4>
          <div className="db-2-main-com db2-form-pay db2-form-com ed-frm">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
              
                  <input type="text" className="validate" readOnly onChange={this.changeText} defaultValue={this.state.user_details?.data?.email} name="email" placeholder="Email/Username"/>
                  {/* <label>User Name</label> */}
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12 m6">
                  <input type="text" className="validate" onChange={this.changeText} defaultValue={this.state.first_name} name="first_name" placeholder="First Name" />
                  {/* <label>Enter Password</label> */}
                </div>
                <div className="input-field col s12 m6">
                  <input type="text" className="validate" onChange={this.changeText} defaultValue={this.state.last_name} name="last_name" placeholder="Last Name"/>
                  {/* <label>Confirm Password</label> */}
                </div>
              </div>
              
              <div className="row">
              <div className="input-field col m6">
                  <select style={{display:'block'}} className="sofia" onChange={this.changeText} defaultValue={this.state.user_country} name="user_country">
                    <option value selected>Select Country</option>
                    <option value={"Ghana"}>Ghana</option>
                    <option value={"Nigeria"}>Nigeria</option>
                  </select>
                </div>
                <div className="input-field col s12 m6">
                  <input type="text" className="validate" onChange={this.changeText} placeholder="Phone" defaultValue={this.state.user_phone} name="user_phone"/>
                  {/* <label>Phone</label> */}
                </div>
              </div>
              <div className="row">
                <div className="input-field col m6">
                  <select style={{display:'block'}} className="sofia" onChange={this.changeText} defaultValue={this.state.gender} name="gender">
                    <option value selected>Select Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              {/* </div> */}
              {/* <div className="row"> */}
                <div className="input-field col m6">
                  <input id="pay-ca" type="number" className="validate" onChange={this.changeText} defaultValue={this.state.card_number} name="card_number" placeholder="Card Number"/>
                  {/* <label htmlFor="pay-ca">Card Number</label> */}
                {/* </div> */}
              </div>
              </div>
              {/* <div className="row">
                <div className="input-field col s12 m6">
                  <input type="password" className="validate" onChange={this.changeText} defaultValue={this.state.user_password} name="user_password" placeholder="Password" />
                </div>
                <div className="input-field col s12 m6">
                  <input type="password" className="validate" defaultValue={this.state.confirm_user_password} name="confirm_user_password" placeholder="Confirm Password" onChange={this.changeText}/>
                </div>
              </div> */}
              {/* <div className="row db-file-upload">
                <div className="file-field input-field">
                  <div className="db-up-btn" style={{lineHeight:'0px'}}> <span>File</span>
                    <input type="file" /> </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" /> </div>
                </div>
              </div> */}

              <div className="row">
                <div className="input-field col s12">
                 
                  
                  {this.state.loading ? 
                  <button className="waves-effect waves-light btn-large full-btn cation-back">
                            <LoadingOutlined style={{ fontSize: 24 }} spin />
                    </button> :  <input type="button" onClick={this.updateProfileDetails} value="Save" className="waves-effect waves-light full-btn cation-back" style={{lineHeight:'0px'}} /> }
                  </div>

                  
              </div>
            </form>
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
EditProfile.contextType = CartContext;
export default EditProfile;