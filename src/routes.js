import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Dash from './pages/Dash';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dash" component={Dash} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
    );
}

export default Routes;