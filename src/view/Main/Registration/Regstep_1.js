import React, { Component } from "react";
import Textfield from "../../../component/Input/Textfield/Textfield";
import SelectBox from '../../../component/Input/SelectBox/SelectBox';
import "./Registration.css";

class Regstep_1 extends Component {
  state = {
    RegInputFields: [
      {
        label: "Email Address",
        type: "text"
      },
      {
        label: "Username",
        type: "text"
      },
      {
        label: "Password",
        type: "password"
      },
      {
        label: "Confirm Password",
        type: "password"
      }
    ]
  };

  render() {
    return (
      <div className="regStep1">
        <div className="reg_ip">
          {this.state.RegInputFields.map((data, index) => (
            <div className="row">
              <div className="col-sm-12">
                <Textfield
                  id={"RegInputField_" + index}
                  label={data.label}
                  type={data.type}
                  variant="outlined"
                >
                  Input
                </Textfield>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    );
  }
}

export default Regstep_1;
