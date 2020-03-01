import React, { Component } from 'react';
import LogHeader from "../Header/LogHeader";
import './UserDetails.css';
import UserDetailsForm1 from './UserDetailsForm1';

class UserDetails extends Component{
    render(){
        return(
            <div className="userDetails">
                <LogHeader/>
                <h2>ADD USER DETAILS</h2>
                <div>
                    <UserDetailsForm1/>
                </div>
            </div>
        )
    }
}
export default UserDetails;