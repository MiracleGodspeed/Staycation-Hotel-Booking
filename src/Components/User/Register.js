import React, { Component } from 'react'
import Header from "../../Layouts/User/Header"
import Footer from "../../Layouts/User/Footer"
import { editData, postData, postData_noToken } from "../../Utils/crud"
import { Endpoint } from "../../Utils/endpoints"
import SweetAlert from 'react-bootstrap-sweetalert';
import { ImportOutlined, LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';
import { Slide, AttentionSeeker, Fade } from "react-awesome-reveal";
import { Redirect } from 'react-router'
// import {Fade} from "reactstrap"



class Register extends Component {
    state = {
        registerbtn: true,
        save_contBtn: false,
        loading: false
    }

    handleRegister = () => {
        let payload = {
            device_id: "xxx",
            email: this.state.emailAddress
        }
        if (this.state.emailAddress == null || !this.state.emailAddress.includes("@")) {
            this.setState({ err_pop: true })
            return false
        }
        this.setState({ loading: true, registerbtn: false })
        postData(Endpoint.Register, payload, data => {
            console.log(data);
            this.setState({ succ_pop: true, loading: false, verify_code: data.data.verify_code, registerbtn: false, save_contBtn: true })
        })
    }

    completeRegistration = () => {
        if (this.state.password_value != this.state.confirm_password_value) {
            this.setState({ password_mismatch: true })
            return false
        }

        let payload = {
            device_id: "xxx",
            email: this.state.emailAddress,
            activation_code: this.state.verify_code,
            password: this.state.password_value
        }
        this.setState({ loading: true, save_contBtn: false })
        editData(Endpoint.Validate, payload, data => {
            console.log(data);
            this.setState({ loading: false, save_contBtn: true, reg_complete: true })

        })
    }

    toggleCompleteForm = () => {
        this.setState({ reg_complete: false, loading: false })
    }
    routeOnSuccess = () => {
        this.setState({ reg_complete: false, redirect_user: true, loading: false })
    }
    componentDidMount() {

    }

    render() {
        if (this.state.redirect_user) {
            return (
                <Redirect to={{ pathname: "/Login" }} />
            )
        }
        return (
            <div>
                <Header />
                <div>
                    {this.state.err_pop ?
                        <SweetAlert error title="Error!" onConfirm={() => this.setState({ err_pop: false })}>
                            Enter a valid email address
                        </SweetAlert> : null}

                    {this.state.password_mismatch ?
                        <SweetAlert error title="Error!" onConfirm={() => this.setState({ password_mismatch: false })}>
                            Password Mismatch!
                        </SweetAlert> : null}


                    {this.state.reg_complete ?
                        <SweetAlert success title="Registration Complete!" onConfirm={this.routeOnSuccess}>
                            Your registration request is now complete! Login to continue
                        </SweetAlert> : null}

                    <section>
                        <div className="tr-register">
                            <div className="tr-regi-form">
                                <div style={{ textAlign: 'center' }}>
                                    <h4>Create an Account</h4>
                                </div>

                                <form className="col s12 regg-form">
                                    {this.state.succ_pop ? <Alert
                                        message="Your email has been successfully registered. Enter a password to continue"
                                        type="success"
                                        className="sofia"
                                        showIcon
                                    /> : null}

                                    <div className="row">
                                        <label className="label-control sofia" style={{ textAlign: 'left', marginTop: '20px', marginLeft: '9px', fontSize: '12px', marginBottom: '0px' }}>Email Address</label>
                                        <div className="input-field col s12">
                                            <input type="email" className="validate" onChange={(e) => this.setState({ emailAddress: e.target.value })} placeholder="Enter Email Address" />
                                        </div>
                                    </div>
                      
                                    <Fade>

                                        <AttentionSeeker effect={"shake"} duration={200}>
                                            {this.state.succ_pop ?

                                              <section><div className="row">
                                                    <label className="label-control sofia" style={{ float: 'left', marginTop: '20px', marginLeft: '9px', fontSize: '11px', marginBottom: '0px' }}>Verfification Code</label>
                                                    <div className="input-field col s12">
                                                        <input type="text" className="validate" defaultValue={this.state.verify_code} onChange={(e) => this.setState({ verify_code: e.target.value })} />
                                                    </div>
                                                </div>

                                                    <div className="row">
                                                        <label className="label-control sofia" style={{ textAlign: 'left', marginTop: '20px', marginLeft: '9px', fontSize: '11px', marginBottom: '0px' }}>Password</label>
                                                        <div className="input-field col s12">
                                                            <input type="password" className="validate" onChange={(e) => this.setState({ password_value: e.target.value })} placeholder="Password" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <label className="label-control sofia" style={{ textAlign: 'left', marginTop: '20px', marginLeft: '9px', fontSize: '11px', marginBottom: '0px' }}>Confirm Password</label>
                                                        <div className="input-field col s12">
                                                            <input type="password" onChange={(e) => this.setState({ confirm_password_value: e.target.value })} className="validate" placeholder="Confirm Password" />
                                                        </div>
                                                    </div> 
                                                </section>


                                                : null}
                                        </AttentionSeeker>
                                    </Fade>

                                    <div className="row">
                                        <div className="input-field col s12">


                                            {this.state.loading ? <button className="waves-effect waves-light btn-large full-btn cation-back">
                                                <LoadingOutlined style={{ fontSize: 24 }} spin />
                                            </button> : null}

                                            {this.state.registerbtn ? <input type="button" value="Register" className="waves-effect waves-light btn-large full-btn cation-back" style={{ lineHeight: '0px' }} onClick={this.handleRegister} /> : null}

                                            {this.state.save_contBtn ? <input type="button" value="Save & Continue" className="waves-effect waves-light btn-large full-btn cation-back" style={{ lineHeight: '0px' }} onClick={this.completeRegistration} /> : null}

                                        </div>
                                    </div>
                                </form>
                                <p className="text-center sofia">Are you a already member ? <a href="#">Click to Login</a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <Footer />

                </div>
            </div>
        )
    }
}
export default Register;