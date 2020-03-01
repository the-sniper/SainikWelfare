import React, { Component } from "react";
import LogHeader from "../Header/LogHeader";
import "./Dashboard.css";
import { Avatar } from "@material-ui/core";
import UserAction from "../../component/UserAction/UserAction";
import UserStats from "../../component/UserStats/UserStats";
import Chart from '../../component/Chart/Chart'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <LogHeader />
        <div className="dashContent customContainer">
          <h2 className="noto-serif dashTitle">
            PUDUCHERRY ZILLA SAINIK BOARD
          </h2>

          <div className="row">
            <div className="actionCnt col-5">
              <h3>Action Center</h3>
              <UserAction />
              <UserAction />
              <UserAction />
              <UserAction />
              <a href="#" className="viewAllBtn">
                View All
              </a>
            </div>
            <div className="col-7">
            <Chart />
            </div>
          </div>
          <div className="userStatsCnt d-flex justify-content-between align-items-center">
            <UserStats userStatsLabel="Total Users"/>
            <UserStats userStatsLabel="User Details" />
            <UserStats userStatsLabel="Approve Users" />
            <UserStats userStatsLabel="Messages"/>
            <UserStats userStatsLabel="View Users"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
