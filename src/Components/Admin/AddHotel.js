import React, { Component } from "react";
// import {init_jquery} from "../../Assets/js/custom"
// import ;
import { Link } from "react-router-dom";
import AdminHeader from "../../Layouts/Admin/Header";
import { Button, notification, Modal, Upload, Spin,Input } from "antd";
import "antd/dist/antd.css";
import SweetAlert from "react-bootstrap-sweetalert";
import { AlipaySquareFilled, ApiFilled } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios"
import { Endpoint } from "../../Utils/endpoints"
import { BASE_URL, fetchData, postData, postDataWithoutToken } from "../../Utils/crud"
import {validateToken} from "../../Utils/auth"



const { TextArea } = Input;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

const openNotification = () => {
    notification.success({
        description: "Host Hotel Successfully Added!",
        style: { background: "green", color: "ghostwhite" },
    });
};

class AddHotel extends Component {
    state = {
        previewVisible: false,
        previewImage: "",
        previewTitle: "",
        fileList: [],
    };

    onChangeAbout = ({ target: { value } }) => {
      this.setState({ value });
    };

    changeText = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;  
      this.setState({
        [name]: value,
      });
    };

    handleChange = async (e) => {
        let file_init = e.target.files[0];
        var file = await getBase64(file_init);
        console.log(file, "File");
        var stripped_type = file.substring(file.indexOf(',') + 1);
        console.log(stripped_type, "stripped")
        this.setState({hotel_image: stripped_type})           
    };

    SaveHotelInformation = () => {
      let currentState = this;

      if(this.state.hotel_name == null || this.state.hotel_name == " " || !this.state.hotel_email.includes("@")){
        this.setState({err_pop:true})
        return false;
      }
      currentState.setState({loading:true})
      let payload = {
        email : this.state.hotel_email,
        hotel_name: this.state.hotel_name,
        state: this.state.hotel_state,
        country_id:this.state.country_id,
        city: this.state.hotel_city,
        geo: "xxx",
        about: this.state.hotel_about,
        address: this.state.hotel_address,
        phone: this.state.phone_one,
        phone_contact: this.state.phone_two,
        image: this.state.hotel_image ? this.state.hotel_image : "-"

      }

      postData(Endpoint.Add_Hotel, payload, data => {
        if(data.status === "success"){
          this.setState({succ_msg:true,loading:false})
        }
        console.log(data)
      })

      
    }

    getCities = () => {
        fetchData(Endpoint.Cities, data => {
            this.setState({cities:data.data})
            console.log(data)
        })
    }
    resolve_city_country = (data) => {
        var city_obj = this.state.cities.find(x => x.city == data.target.value)
        
       this.setState({hotel_city:city_obj.city, country_id: city_obj.id})
        console.log(city_obj)
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      validateToken();
      this.getCities();
        // init_jquery();
    }

    render() {
        // require('bootstrap/dist/css/bootstrap.min.css');
        return (
            <div>
                <AdminHeader />
                {this.state.succ_msg ?
                        <SweetAlert success title="Saved!" onConfirm={() => this.setState({succ_msg:false})}>
                           Hotel Information was successfully added! 
                        </SweetAlert> : null}

                        {this.state.err_pop ?
                        <SweetAlert error title="Error!" onConfirm={() => this.setState({err_pop:false})}>
                           Enter a valid detail! 
                        </SweetAlert> : null}
                <section id="contents2">
                    <div className="welcome2" style={{ color: "black" }}>
                        <div className="container">
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
                                                        <input type="text" onChange={this.changeText} name="hotel_name" className="form-control sofia" placeholder="Hotel Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">@</span>
                                                        <input type="text" className="form-control sofia" onChange={this.changeText} name="hotel_email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-phone" />
                                                        </span>
                                                        <input type="text" className="form-control sofia" name="phone_one" placeholder="Phone Number 1" onChange={this.changeText} />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-phone" />
                                                        </span>
                                                        <input type="text" className="form-control sofia" onChange={this.changeText} name="phone_two" placeholder="Phone Number 2" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <select className="form-control sofia" onChange={this.changeText} name="hotel_state">
                                                        <option value>Select State</option>
                                                        <option value={"Abia"}>Abia</option>
                                                        <option value={"Bayelsa"}>Bayelsa</option>
                                                        <option value={"Delta"}>Delta</option>
                                                        <option value={"Enugu"}>Enugu</option>
                                                        <option value={"FCT-Abuja"}>FCT Abuja</option>
                                                        <option value={"Imo"}>Imo</option>
                                                        <option value={"Lagos"}>Lagos</option>
                                                        <option value={"Rivers"}>RIvers</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-4 col-sm-4">
                                                    <select className="form-control sofia" onChange={(e) => this.resolve_city_country(e)} name="hotel_city">
                                                    <option value>Select City</option>
                                                        {this.state.cities && this.state.cities.map(cities => {
                                                            return(
                                                                <option value={cities.city}>{cities.city}</option>
                                                            )
                                                        })}
                                            
                                                    </select>
                                                </div>

                                               
                                           
                                            </div>

<br/>
                                      <div className="row">
                                     
                                            <div className="col-lg-12 col-sm-12">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-map-marker" />
                                                        </span>
                                                        <input type="text" className="form-control sofia" placeholder="Address" onChange={this.changeText} name="hotel_address" />
                                                    </div>
                                            </div>
                                      </div>
                                                <br/>
                                               
                                                <div style={{ margin: '24px 0' }} />
                                                        <TextArea
                                                          onChange={this.changeText}
                                                          placeholder="About Hotel"
                                                          name="hotel_about"
                                                          autoSize={{ minRows: 3, maxRows: 5 }}
                                                        />
                                            <div className="row" style={{marginTop:'20px', marginLeft:'10px'}}>
                                                <label style={{paddingLeft:'0px'}} className="label-control col-lg-12 col-sm-12">Hotel Image</label>
                                                <input
                                                    type="file"
                                                    onChange={(e) => this.handleChange(e)}
                                                />                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                   

                                    {this.state.loading ? <div className="" style={{marginLeft:'10px'}}>
                                    <Spin size={"large"}/>
                                        
                                    </div> :  <button className="btn btn-primary sofia" onClick={this.SaveHotelInformation}>
                                        Add Hotel &nbsp;
                                        <i className="glyphicon glyphicon-check" />
                                    </button>}
                                    
                                </div>
               
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
