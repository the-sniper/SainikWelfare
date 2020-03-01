import React, { Component } from "react";
import Textfield from "../../component/Input/Textfield/Textfield";
import SelectBox from "../../component/Input/SelectBox/SelectBox";
import RadioBtn from "../../component/Input/RadioBtn/RadioBtn";
import "./UserDetails.css";
import { RadioGroup } from "@material-ui/core";

class UserDetailsForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          label: "Unit Last Served",
          placeholder: "Enter Unit Last Served",
          type: "text",
          class: "col-6"
        },
        {
          label: "Date of Discharge",
          placeholder: "Enter date of discharge",
          type: "text",
          class: "col-6"
        },
        {
          name: "Reason for Discharge",
          type: "select",
          class: "col-6"
        },
        {
          test:[
            {
              radTitle: "Death Details",
              type: "radio",
              class: "col-6",
              radLabel: "Death Details"
            },
            {
              radTitle: "Death Details",
              type: "radio",
              class: "col-6",
              radLabel: "Death Details"
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="userDetailForm userDetails-1">
        <h3 className="userDetailTitle noto-serif">Service Details</h3>
        <form noValidate autoComplete="on">
          <div className="row">
            {this.state.userInfo.map((data, index) => (
              <>
                {(() => {
                  if (data.type == "text") {
                    return (
                      <div
                        className={data.class}
                        style={{ "margin-bottom": "25px" }}
                      >
                        <Textfield
                          id={"LoginInputField_" + index}
                          label={data.label}
                          placeholder={data.placeholder}
                          type={data.type}
                        />
                      </div>
                    );
                  } else if (data.type == "select") {
                    return (
                      <div
                        className={data.class}
                        style={{ "margin-bottom": "25px" }}
                      >
                        <SelectBox name={data.radTitle} />
                      </div>
                    );
                  } else if (data.type == "radio") {
                    return (
                      <div
                        className={data.class}
                        style={{ "margin-bottom": "25px" }}
                      >
                        <RadioBtn
                          radTitle={data.radTitle}
                          radLabel={data.radLabel}
                        />
                      </div>
                    );
                  }
                })()}
              </>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default UserDetailsForm1;
