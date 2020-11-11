import React from 'react';
import RolesList from '../../config/roles';
import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

function PrivateRoutes(props) {
  const role = props.role || "GUEST";

  return (
    <Switch>
      {RolesList[role].map(({ path, page: PageComponent }, idx) => <Route key={idx} exact path={path}>
        <PageComponent setRole={props.setRole} setupSocket={props.setupSocket} />
      </Route>)}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default PrivateRoutes;
