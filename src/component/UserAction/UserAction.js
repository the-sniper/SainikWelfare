import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import SecondaryButton from '../Input/Button/SecondaryButton';
import './UserAction.css';

class UserAction extends Component{
    render(){
        return(
            <div className="userAction d-flex justify-content-between align-items-center">
            <Avatar/>
            <p>Venkat has recently registered. Please verify the details and approve</p>
            <SecondaryButton sec_label="Verify Details"/>
            </div>
        )
    }
}

export default UserAction;