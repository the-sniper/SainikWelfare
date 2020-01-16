import React, { Component } from "react";
import Textfield from "../../../component/Input/Textfield/Textfield";
import SelectBox from '../../../component/Input/SelectBox/SelectBox';
import "./Registration.css";

class Regstep_2 extends Component {
  state = {
    RegInputFields: [
      {
        label: "First Name",
        type: "text"
      },
      {
        label: "Last Name",
        type: "text"
      },
      {
        label: "Address",
        type: "text"
      },
      {
        label: "Pin Code",
        type: "text"
      }
    ]
  };

  render() {
    return (
      <div className="regStep2">
        <div className="reg_ip">
        <div className="row">
          {this.state.RegInputFields.map((data, index) => (
              <div className="col-sm-6">
                <Textfield
                  id={"RegInputField_" + index}
                  label={data.label}
                  type={data.type}
                  variant="outlined"
                >
                  Input
                </Textfield>
              </div>
              ))}
              <SelectBox></SelectBox>

              </div>
        </div>
    
      </div>
    );
  }
}

export default Regstep_2;
