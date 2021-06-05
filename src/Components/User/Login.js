import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"
import { Link, Redirect } from "react-router-dom"
import $ from 'jquery'
import { Alert, Spin } from 'antd';
import SweetAlert from 'react-bootstrap-sweetalert';
import { handleLogin } from "../../Utils/auth"
import { Endpoint } from '../../Utils/endpoints'
import { DatabaseFilled, ImportOutlined, LoadingOutlined } from '@ant-design/icons';






class Login extends Component {
    state = {

    }
    AuthenticateUser = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        if (this.state.user_name == null || this.state.user_name.includes(" ") || !this.state.user_name.includes("@")) {
            this.setState({ err_pop: true, loading: false })
            return false
        }
        else if (this.state.user_name != null && this.state.user_name.includes("@") && this.state.user_password != null) {
            let auth = {
                email: this.state.user_name,
                password: this.state.user_password,
            }
            let payload = {
                email: this.state.user_name,
                device_id: "xxx"
            }
            handleLogin(Endpoint.Login, payload, auth, data => {
                console.log(data)
                if(data.status === "success" && data.data.email === "admin@staycation.com"){
                    window.location.replace('/Dashboard2')
                }
                else if (data.status === "success") {
                    window.location.replace('/UserProfile')
                } else {
                    this.setState({ invalid_login: true, loading: false })
                }
            })

        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

    }

    render() {
        
        return (
            <div>
                {this.state.err_pop ?
                    <SweetAlert error title="Error!" onConfirm={() => this.setState({ err_pop: false })}>
                        Invalid Input
                    </SweetAlert> : null}


                {this.state.invalid_login ?
                    <SweetAlert error title="Error!" onConfirm={() => this.setState({ invalid_login: false })}>
                        Invalid Login Credentials
                    </SweetAlert> : null}
                <div>
                    <Header />
                    {/*DASHBOARD*/}
                    <section>
                        <div className="tr-register">
                            <div className="tr-regi-form">
                                <h4>Sign In</h4>
                                <p>It's free and always will be.</p>
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="text" className="validate" placeholder="User Name" value={this.state.user_name} onChange={(e) => this.setState({ user_name: e.target.value })} />
                                            {/* <label>User Name</label> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="password" className="validate" placeholder="Password" value={this.state.user_password} onChange={(e) => this.setState({ user_password: e.target.value })} />
                                            {/* <label>Password</label> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <Link to={"/Dashboard2"}> */}
                                        <div className="input-field col s12">
                                            {this.state.loading ?
                                                <button className="waves-effect waves-light btn-large full-btn cation-back">
                                                    <LoadingOutlined style={{ fontSize: 24 }} spin />
                                                </button> : <input type="button" value="Sign In" style={{ lineHeight: '0px' }} className="waves-effect waves-light btn-large full-btn cation-back" id="signIn" onClick={this.AuthenticateUser} />}


                                        </div>
                                        {/* </Link> */}
                                    </div>
                                </form>
                                <p><a href="#">forgot password</a> | Are you a new user ? <a href="#">Register</a>
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


                    <Footer />

                </div>
            </div>
        )
    }
}
export default Login;