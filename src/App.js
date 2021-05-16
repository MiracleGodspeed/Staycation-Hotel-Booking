import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Common/Index"
import Login from "./Components/User/Login"
import Register from "./Components/User/Register"
import HotelDetails from "./Components/User/Hotel_Details"
import Booking from "./Components/User/Booking"

export class App extends Component {
  render() {
    return (
      <>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}>
            <Redirect to="/Home" />
          </Route>
          <Route exact path={"/Home"} component={Home} />
          <Route path={"/Login"} component={Login} />
          <Route path={"/Register"} component={Register} />
          <Route path={"/Hotel_Details"} component={HotelDetails} />
          <Route path={"/Booking"} component={Booking} />
        </Switch>
        {/* <PageLoader/> */}
      </BrowserRouter>
      </>
    );
  }
}

export default App;
