import React, { Component } from "react";
import "./Registration.css";

class Regstep_3 extends Component {
  render() {
    return (
      <div className="regStep3">
        <div className="reg_ip">
          <label for="regUpd">
            <input type="file" id="regUpd" />
            <div className="regUpdBtn">
              <i class="fas fa-upload"></i>
              <h4>UPLOAD DOCUMENT TO PROVE YOUR IDENTITY</h4>
              <p>e.x: Copy of your disharge book etc...</p>
            </div>
          </label>
        </div>  
      </div>
    );
  }
}

export default Regstep_3;
