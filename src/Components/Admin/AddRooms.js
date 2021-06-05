import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../Layouts/Admin/Header";
import { Button, notification, Modal, Upload, Spin, Input } from "antd";
import "antd/dist/antd.css";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import { Endpoint } from "../../Utils/endpoints";
import { BASE_URL, fetchData, postData, postDataWithoutToken } from "../../Utils/crud";
import { validateToken } from "../../Utils/auth";
import room01 from "../../Assets/images/rooms/01.jpg";
import { Slide, AttentionSeeker, Fade } from "react-awesome-reveal";


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
        var stripped_type = file.substring(file.indexOf(",") + 1);
        console.log(stripped_type, "stripped");
        this.setState({ room_image: stripped_type });
    };

    SaveRoomInformation = () => {
        let currentState = this;
        if (this.state.room_name == null || this.state.hotel_id <= 0 || this.state.room_price <= 0 || this.state.room_discount <= 0) {
            this.setState({ err_pop: true });
            return false;
        }
        currentState.setState({ loading: true });
        let payload = {
            hotel_id: this.state.hotel_room,
            room_name: this.state.room_name,
            price: parseInt(this.state.room_price),
            discount: parseInt(this.state.room_discount) > 0 ? parseInt(this.state.room_discount) : 1,
            room_image: this.state.room_image ? this.state.room_image : "-",
        };
        console.log(payload);

        postData(Endpoint.Add_Room, payload, (data) => {
            if (data.status === "success") {
                this.setState({ succ_msg: true, loading: false });
            } else {
                this.setState({ err_pop1: true, loading: false });
            }
            console.log(data);
        });
    };

    getHotels = () => {
        fetchData(Endpoint.Add_Hotel, (data) => {
            console.log(data)
            this.setState({ hotelList: data.data });
        });
    };
    changeHotel = (e) => {
        this.setState({hotel_room:e.target.value, fetch_img:true, show_imgs:false})
        fetchData(Endpoint.GetHotelImageBy + parseInt(e.target.value), (data) => {
            console.log(data)
            var h_images = data.data.map((i, r) => {
                return{
                    // data_url: "data:image/png;base64, "+i.dataurl,
                    data_url: i.dataurl,
                    image_name: i.image_name
                }
            })
            setTimeout(() => {
                console.log(h_images)
            },2000)
            this.setState({show_imgs:true, fetch_img:false, h_image_info:h_images})
        })
        // var file = await getBase64("");
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        validateToken();
        this.getHotels();
    }

    render() {
        return (
            <div>
                <AdminHeader />
                {this.state.succ_msg ? (
                    <SweetAlert success title="Saved!" onConfirm={() => this.setState({ succ_msg: false })}>
                        Room successfully added for the selected Hotel!
                    </SweetAlert>
                ) : null}

                {this.state.err_pop ? (
                    <SweetAlert error title="Error!" onConfirm={() => this.setState({ err_pop: false })}>
                        Enter a valid detail!
                    </SweetAlert>
                ) : null}

                {this.state.err_pop1 ? (
                    <SweetAlert error title="Error!" onConfirm={() => this.setState({ err_pop1: false })}>
                        Oops! Ssomething went wrong
                    </SweetAlert>
                ) : null}
                <section id="contents2">
                    <div className="welcome2" style={{ color: "black" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="content2">
                                        <h2 className="sofia">Add Rooms</h2>
                                        <p className="sofia">StayCation Host Hotel Rooms</p>
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
                                            <h3 className="panel-title sofia">Room Details</h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <select className="form-control sofia" onChange={(e) => this.changeHotel(e)} name="hotel_room">
                                                        <option value>Select Hotel</option>
                                                        {this.state.hotelList &&
                                                            this.state.hotelList.map((h) => {
                                                                return <option value={h.id}>{h.hotel_name}</option>;
                                                            })}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-pencil" />
                                                        </span>
                                                        <input type="text" onChange={this.changeText} name="room_name" className="form-control sofia" placeholder="Room Name/Description" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">$</span>
                                                        <input type="number" className="form-control sofia" onChange={this.changeText} name="room_price" placeholder="Price Per Night" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">{/* <i className="glyphicon glyphicon-phone" /> */}</span>
                                                        <input type="number" className="form-control sofia" onChange={this.changeText} name="room_discount" placeholder="Discount(Optional)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />

                                            {this.state.fetch_img ? <div className="row">
                                                        <div className="col-lg-12 col-sm-12">
                                                            <p className="text-center sofia" style={{color:'grey'}}>
                                                                <Spin size={"large"} /> &nbsp; Loading Hotel Images...
                                                            </p>
                                                        </div>
                                                    </div> : null}
                                    <Fade>

                                        <AttentionSeeker effect={"shake"} duration={200}>
                                            {this.state.show_imgs ? (
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-sm-12">
                                                            <h4 className="text-center sofia" style={{ color: "grey" }}>
                                                                Select a room image from the underlisted
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <hr />
                                              
                                                    <div style={{ overflowY: "scroll", height: "200px", overflowX: "hidden" }}>
                                                    {this.state.h_image_info && this.state.h_image_info.map((i,h) => {
                                                    return(
                                                        <div>
                                                        <div className="row">
                                                            <div className="col-lg-12 col-sm-12">
                                                                <div className="col-lg-1 col-sm-1">
                                                                    <p style={{ color: "grey" }}>1.</p>
                                                                </div>
                                                                <div className="col-lg-3 col-sm-3">
                                                                    <img src={i.data_url} style={{ width: "150px", borderRadius: "9px" }} />
                                                                </div>
                                                                <div className="col-lg-3 col-sm-3">
                                                                    <h5 className="sofia text-black" style={{ color: "grey" }}>
                                                                        {i.image_name}
                                                                    </h5>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-4">
                                                                    <h5>
                                                                        <input type="radio" value={i.data_url} className="" style={{ marginTop: "3px" }} onChange={this.changeText} name="room_image" />
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        </div>
                                                    )
                                                })}
                                                        
                                                       
                                                       
                                                        {/* 
                                                    <br/>
                                            <div className="row" style={{marginTop:'20px', marginLeft:'10px'}}>
                                                <label style={{paddingLeft:'0px'}} className="label-control col-lg-12 col-sm-12">Room Image</label>
                                                <input
                                                    type="file"
                                                    onChange={(e) => this.handleChange(e)}
                                                />                                                    
                                            </div> */}
                                                    </div>
                                                </div>
                                            ) : null}
                                            </AttentionSeeker>
                                            </Fade>
                                        </div>
                                    </div>
                                    <br />

                                    {this.state.loading ? (
                                        <div className="" style={{ marginLeft: "10px" }}>
                                            <Spin size={"large"} />
                                        </div>
                                    ) : (
                                        <button className="btn btn-primary sofia" onClick={this.SaveRoomInformation}>
                                            Add Room &nbsp;
                                            <i className="glyphicon glyphicon-check" />
                                        </button>
                                    )}
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
