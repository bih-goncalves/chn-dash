import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Main from './pages/Main';
import Dash from './pages/Dash';
import Login from './pages/SignIn/Login';
import Register from './pages/SignUp/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dash" component={Dash} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;