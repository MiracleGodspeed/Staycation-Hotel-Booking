import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Common/Index"
import Login from "./Components/User/Login"
import Register from "./Components/User/Register"
import HotelDetails from "./Components/User/Hotel_Details"
import UserProfile from "./Components/User/Profile"
import UserCheckout from "./Components/User/UserCheckout"
import Booking from "./Components/User/Booking"
import AdminDashboard from "./Components/Admin/Dashboard"
import SideBar from "./Components/Admin/SideBar"
import DashboardTwo from "./Components/Admin/DashBoardTwo"
import AddHotel from "./Components/Admin/AddHotel"
// import AdminDashboard from "./Layouts/Admin/AdminLayout"
import UserLayout from "./Layouts/User/UserLayout"
import DashboardSecond from "./Components/Admin/DashBoardTwo";
import { browserHistory, Router, IndexRoute, hashHistory } from 'react-router'


export class App extends Component {
  render() {
    return (
      <div>
        
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>

      <BrowserRouter>
        <Switch>

          <Route exact path={"/"} component={Home} />

          {/* <Route path={'/admin'} component={AdminLayout} /> */}
          <Route path={"/Login"} component={Login} />
          <Route path={"/Register"} component={Register} />
          <Route path={"/Hotel_Details"} component={HotelDetails} />
          <Route path={"/Booking"} component={Booking} />
          <Route path={"/AdminDashboard"} component={AdminDashboard} />
          <Route path={"/Side"} component={SideBar} />
          <Route path={"/Dashboard2"} component={DashboardSecond} />
          <Route path={"/UserProfile"} component={UserProfile} />
          <Route path={"/AddHotel"} component={AddHotel} />
          <Route path={"/Book"} component={UserCheckout} />
        </Switch>
        {/* <PageLoader/> */}
      </BrowserRouter>

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}

      </div>
    );
  }
}

export default App;
