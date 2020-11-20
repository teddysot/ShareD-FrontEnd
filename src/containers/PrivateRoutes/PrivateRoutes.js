import React from 'react';
import RolesList from '../../config/roles';
import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import {connect} from 'react-redux'

function PrivateRoutes(props) {

  const role = props.role || "GUEST";

  return (
    <Switch>
      {RolesList[role].map(({ path, page: PageComponent }, idx) => <Route key={idx} exact path={path}>
        <PageComponent />
      </Route>)}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
      role: state.role.role
  }
}

export default connect(mapStateToProps)(PrivateRoutes);