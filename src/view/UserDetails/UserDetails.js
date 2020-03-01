import React, { Component } from "react";
import LogHeader from "../Header/LogHeader";
import "./UserDetails.css";
import UserDetailsForm1 from "./UserDetailsForm1";

class UserDetails extends Component {
  render() {
    return (
      <div className="userDetails">
        <LogHeader />
        <div className="customContainer">
        <h2 className="noto-serif dashTitle">ADD USER DETAILS</h2>

          <div className="row">
            <div
              className="col-3"
              style={{ background: "#fff", height: "100vh" }}
            ></div>
            <div className="col-9">
              <div>
                <UserDetailsForm1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserDetails;
