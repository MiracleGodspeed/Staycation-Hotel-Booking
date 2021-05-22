// import '../../Assets/css/style.css'
// import '../../Assets/css/mob.css'
// import '../../Assets/css/materialize.css'
// import '../../Assets/css/bootstrap.css'
// import '../../Assets/css/animate.css'

// import '../../Assets/css/font-awesome.min.css'
// import '../../Assets/css/font-awesome.min.css'

import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Home from "../../Components/Common/Index"
import Login from "../../Components/User/Login"
import Register from "../../Components/User/Register"
import HotelDetails from "../../Components/User/Hotel_Details"
import Booking from "../../Components/User/Booking"


//class AdminLayout extends Component {
class UserLayout extends Component {
  render(){
    require('../../Assets/css/style.css')
    require('../../Assets/css/mob.css')
    require('../../Assets/css/materialize.css')
    require('../../Assets/css/bootstrap.css')
    require('../../Assets/css/animate.css')
   
// let { path, url } = useRouteMatch();
return (
  <div>

 
    {/* <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={path} component={Home} exact={true} />
        <Route path={`${path}/Login`} component={Login} />
        <Route path={`${path}/Register`} component={Register} />
        <Route path={`${path}/Hotel_Details`} component={HotelDetails} />
        <Route path={`${path}/Booking`} component={Booking} />
      </Switch>
    </Suspense> */}
  </div>
);

  }
  
};

export default UserLayout;
