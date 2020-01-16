import React, { Component } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { Route, Switch } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Registration" component={Registration} />
            </Switch>
            </div>
        );
    }
}

export default Main;