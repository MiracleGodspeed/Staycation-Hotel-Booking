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

class HotelImages extends Component {
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
        this.setState({img_prev:false})

        let file_init = e.target.files[0];
        var file = await getBase64(file_init);
        console.log(file, "File");
        var stripped_type = file.substring(file.indexOf(",") + 1);
        console.log(stripped_type, "stripped");
        this.setState({ selected_image: stripped_type });

        let pHold = document.getElementById("progressHold");
        let docPrev = document.getElementById("docPreview");
        pHold.style.display = "block";
        let pBar = document.getElementById("pb");
        pBar.style.width = "0%";

        pBar.innerHTML = "Uploading.....";

        setTimeout(() => {
            pBar.style.width = "100%";
            this.setState({img_prev:true})
            pBar.innerHTML = "100%";
        }, 2000);

        let reader = new FileReader();
        reader.onloadend = () => {
            this.state.documentPreview = reader.result;
            this.setState({
                ...this.state,
                file: file_init,
                documentUploaded: reader.result,
            });
        };
        setTimeout(() => {
            console.log(this.state.file, "File");
            reader.readAsDataURL(file_init);
        }, 2000);
    };

    SaveImage = () => {
        let currentState = this;
        if (this.state.hotel_id <= 0 || this.state.selected_image == null || this.state.image_name == null) {
            this.setState({ err_pop: true });
            return false;
        }
        // {"hotel_id":"1","hotel_image":"base_url","image_name":"front_view"}
        currentState.setState({ loading: true });
        let payload = {
            hotel_id: this.state.hotel_id,
            hotel_image: this.state.selected_image,
            image_name:this.state.image_name
        };
        console.log(payload);

        postData(Endpoint.AddImages, payload, (data) => {
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
            this.setState({ hotelList: data.data });
        });
    };

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
                        Image was saved and uploaded!
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
                                        <h2 className="sofia">Upload Images For Hotel</h2>
                                        <p className="sofia">StayCation Host Hotel Image Upload</p>
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
                                            <h3 className="panel-title sofia">Image Upload</h3>
                                        </div>
                                        <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                    <select className="form-control sofia" onChange={this.changeText} name="hotel_id">
                                                        <option value>Select Hotel</option>
                                                        {this.state.hotelList && this.state.hotelList.map(h => {
                                                            return(
                                                                <option value={h.id}>{h.hotel_name}</option>
                                                            )
                                                        })}
                                                       
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-pencil" />
                                                        </span>
                                                        <input type="text" onChange={this.changeText} name="image_name" className="form-control sofia" placeholder="Image Name" />
                                                    </div>
                                                </div>
                                               
                                               
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="row" style={{ marginTop: "20px", marginLeft: "10px" }}>
                                                    <label style={{ paddingLeft: "0px" }} className="label-control col-lg-12 col-sm-12">
                                                        Hotel Image
                                                    </label>
                                                    <input type="file" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>
                                            <br />
                                        
                                            <div className="row">
                                                {/* <div className="col-sm-2"></div> */}
                                                <div className="col-sm-12">
                                                    <div class="progress" id="progressHold" style={{ height: "15px", display: "none" }}>
                                                        <div class="progress-bar bg-success" id="pb" style={{ width: "0%", height: "15px" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="col-md-12">
                                                    <div className="media align-items-center">
                                        <Fade>

<AttentionSeeker effect={"shake"} duration={500}>
                                                        {this.state.img_prev ? <span className="container-fluid" id="docPreview">
                                                            <div className="">
                                                            <img src={this.state.documentUploaded} />

                                                            </div>
                                                        </span> : null}
                                                        </AttentionSeeker>
                                                        </Fade>
                                                    </div>
                                                </div>

                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    {this.state.loading ? (
                                        <div className="" style={{ marginLeft: "10px" }}>
                                            <Spin size={"large"} />
                                        </div>
                                    ) : (
                                        <button className="btn btn-primary sofia" onClick={this.SaveImage}>
                                            Save & Upload &nbsp;
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

export default HotelImages;
