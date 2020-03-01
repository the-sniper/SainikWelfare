import React, { Component } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import UserDetailsForm1 from '../UserDetails/UserDetailsForm1';
import UserDetails from '../UserDetails/UserDetails';
class Main extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Registration" component={Registration} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/UserDetails" component={UserDetails} />
                <Route exact path="/UserForm1" component={UserDetailsForm1} />
            </Switch>
            </div>
        );
    }
}

export default Main;