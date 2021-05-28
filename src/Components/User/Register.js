import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"


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
  <Footer/>
     
      </div>
            </div>
        )
    }
}
export default Register;