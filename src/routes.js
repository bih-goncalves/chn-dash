import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// Redirect
// import { isAuthenticated } from "./services/auth";
import Main from './pages/Main';
import Dash from './pages/Dash';
import Login from './pages/SignIn/Login';
import Signup from './pages/SignUp/Signup';
import Graph from './pages/Graph/Graph';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
  

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            {/* <Route path="/" exact component={Main} /> */}
            <Redirect exact from="/" to="/graph" />
            {/* <Route path="/dash" component={Dash} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/graph" component={Graph} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;