import React, { Component } from "react";
import Textfield from "../../component/Input/Textfield/Textfield";
import SelectBox from "../../component/Input/SelectBox/SelectBox";
import "./UserDetails.css";

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
            name: "Death Details",
            type: "select",
            class: "col-6"
          }
      ]
    };
  }
  render() {
    return (
      <div className="userDetailForm userDetails-1 customContainer">
        <h3>Pension Details</h3>
        <form noValidate autoComplete="on">
          <div className="row">
            {this.state.userInfo.map((data, index) => (
              <>
                {(() => {
                  if (data.type == "text") {
                    return (
                      <div className={data.class}>
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
                      <div className={data.class}>
                        <SelectBox name={data.name} />
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
