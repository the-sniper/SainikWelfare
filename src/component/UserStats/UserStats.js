import React, { Component } from "react";
import "./UserStats.css";

class UserStats extends Component {
  render() {
    return (
      <div className="userStatsBox">
          <img src={"./1.png"} />
          <p title={this.props.userStatsLabel}>{this.props.userStatsLabel}</p>
          <p>150</p>
      </div>
    );
  }
}

export default UserStats;
