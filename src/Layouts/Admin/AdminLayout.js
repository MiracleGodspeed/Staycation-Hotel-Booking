import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import AdminDash from "../../Components/Admin/Dashboard";
import ManageBooking from "../../Components/Admin/ManageBooking";

//class AdminLayout extends Component {
const AdminLayout = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={path} component={AdminDash} exact={true} />
          <Route path={`${path}/ManageBooking`} component={ManageBooking} />
        </Switch>
      </Suspense>
      {/* <PageLoader/> */}
    </>
  );
};

export default AdminLayout;
