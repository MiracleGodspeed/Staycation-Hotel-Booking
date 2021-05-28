import React, { Component } from "react";
// import {init_jquery} from "../../Assets/js/custom"
// import ;
import { Link } from "react-router-dom";
import AdminHeader from "../../Layouts/Admin/Header";
import { Button, notification, Modal } from 'antd';
import 'antd/dist/antd.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import { AlipaySquareFilled, ApiFilled } from "@ant-design/icons";






const openNotification = () => {
    notification.success({
    //   message: 'Notification Title',
      description:
        'Host Hotel Successfully Added!',
        style:{background:'green', color:'ghostwhite'}
    });
  };

class AddHotel extends Component {
  state = {};

  componentDidMount() {
    // init_jquery();
  }

  render() {
    // require('bootstrap/dist/css/bootstrap.min.css');
    return (
      <div>
        <AdminHeader />
        {this.state.s_alert ? <SweetAlert success title="Host Hotel Added!" onConfirm={() => this.setState({s_alert:false})}>
  You clicked the button!
</SweetAlert> : null}
        <section id="contents2">
          <div className="welcome2" style={{ color: "black" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="content2">
                    <h2 className="sofia">Add Host Hotel</h2>
                    <p className="sofia">StayCation Host Hotels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
            <div class="alert alert-success alert-dismissible">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">
                &times;
              </a>
              <strong>Success!</strong> Indicates a successful or positive
              action.
            </div>
          </div> */}

          <section className="statistics">
            <div className="container">
              {/* Row start */}

              <div className="row sofia">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                      <i className="icon-calendar" />
                      <h3 className="panel-title sofia">Hotel Details</h3>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-pencil" />
                            </span>
                            <input
                              type="text"
                              className="form-control sofia"
                              placeholder="Hotel Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                          <div className="input-group">
                            <span className="input-group-addon">@</span>
                            <input
                              type="text"
                              className="form-control sofia"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-phone" />
                            </span>
                            <input
                              type="text"
                              className="form-control sofia"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-lg-4 col-sm-4">
                          <select className="form-control sofia">
                            <option value>Select State</option>
                            <option value>Abia State</option>
                          </select>
                        </div>

                        <div className="col-lg-4 col-sm-4">
                          <select className="form-control sofia">
                            <option value>Select City</option>
                            <option value>Lagos</option>
                            <option value>Abuja</option>
                          </select>
                        </div>

                        <div className="col-lg-4 col-sm-4">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-map-marker" />
                            </span>
                            <input
                              type="text"
                              className="form-control sofia"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-primary sofia" onClick={openNotification}>Add Hotel &nbsp;<i className="glyphicon glyphicon-check"/></button>
                  {/* <button className="btn btn-primary sofia" onClick={() => this.setState({s_alert:true})}>Add Hotel &nbsp;<i className="glyphicon glyphicon-check"/></button> */}
                 
                </div>
{/* 
                <Modal title="Basic Modal" visible={true}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
        </section>
      </div>
    );
  }
}

export default AddHotel;
