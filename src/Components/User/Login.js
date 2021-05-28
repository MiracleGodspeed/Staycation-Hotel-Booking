import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"
import {Link, Redirect} from "react-router-dom"
import $ from 'jquery'


class Login extends Component{
    state={

    }
    AuthenticateUser = (e) => {
     e.preventDefault();
      if(this.state.user_name == null || this.state.user_name.includes(" ")){
        alert("Invalid Input")
      }
      else if(this.state.user_name == "admin"){
          window.location.href="/Dashboard2"
      }
      else if(this.state.user_name == "user"){
        localStorage.setItem("userData", JSON.stringify(this.state.user_name))
        window.location.href = "/";

    }
      this.setState({
        redirect:true
      })
    }
    componentDidMount(){
      // $("#signIn").on('click', function(e){
      //   e.preventDefault();
      //   window.location.href = "/Dashboard2"
      // })
    }

    render(){
      // if(this.state.redirect){
        
      //   return <Redirect to={{ pathname: "/Login", state:{navigation:'willFocus'} }} />
      // }
        return(
            <div>
                <div>
       <Header/>
        {/*DASHBOARD*/}
        <section>
          <div className="tr-register">
            <div className="tr-regi-form">
              <h4>Sign In</h4>
              <p>It's free and always will be.</p>
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" className="validate" placeholder="User Name" value={this.state.user_name} onChange={(e) => this.setState({user_name: e.target.value})}/>
                    {/* <label>User Name</label> */}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="password" className="validate" placeholder="Password" />
                    {/* <label>Password</label> */}
                  </div>
                </div>
                <div className="row">
                  {/* <Link to={"/Dashboard2"}> */}
                  <div className="input-field col s12">
                    
                    <input type="submit" value="Sign In" className="waves-effect waves-light btn-large full-btn" id="signIn" onClick={this.AuthenticateUser} />
                
                     </div>
                     {/* </Link> */}
                </div>
              </form>
              <p><a href="forgot-pass.html">forgot password</a> | Are you a new user ? <a href="register.html">Register</a>
              </p>
              <div className="soc-login">
                <h4>Sign in using</h4>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook fb1" /> Facebook</a> </li>
                  <li><a href="#"><i className="fa fa-twitter tw1" /> Twitter</a> </li>
                  <li><a href="#"><i className="fa fa-google-plus gp1" /> Google</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*END DASHBOARD*/}
 

<Footer/>
     
      </div>
            </div>
        )
    }
}
export default Login;