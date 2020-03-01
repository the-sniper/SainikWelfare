import React, { Component } from "react";
import Textfield from "../../../component/Input/Textfield/Textfield";
import TextField from "@material-ui/core/TextField";
import SelectBox from "../../../component/Input/SelectBox/SelectBox";
import SecondaryButton from "../../../component/Input/Button/SecondaryButton";
import "./Registration.css";

class Regstep_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegInputFields: [
        {
          label: "First Name",
          type: "text",
          input_type: "input",
          placeholder: "Enter your first name",
          class: "col-sm-6"
        },
        {
          label: "Last Name",
          type: "text",
          input_type: "input",
          placeholder: "Enter your last name",
          class: "col-sm-6"
        },
        {
          name: "State",
          type: "text",
          input_type: "select",
          class: "col-sm-6"
        },
        {
          name: "City",
          type: "text",
          input_type: "select",
          class: "col-sm-6"
        },
        {
          label: "Address",
          type: "text",
          input_type: "input",
          placeholder: "Enter your address",
          class: "col-sm-12"
        },
        {
          label: "Pin Code",
          type: "text",
          input_type: "input",
          placeholder: "Enter your pin code",
          class: "col-sm-6"
        },
        {
          label: "Phone Number",
          type: "text",
          input_type: "input",
          placeholder: "Enter your phone number",
          class: "col-sm-7"
        },
        {
          input_type: "button",
          class: "col-sm-5"
        },
        {
          name: "Board",
          type: "text",
          input_type: "select",
          class: "col-sm-12"
        },
      ]
    };
  }

  render() {
    return (
      <div className="regStep2">
        <div className="reg_ip">
          <div className="row">
            {this.state.RegInputFields.map((data, index) => (
              <>
                {(() => {
                  if (data.input_type == "input") {
                    return (
                      <div className={data.class}>
                        <Textfield
                          id={"RegInputField_" + index}
                          label={data.label}
                          type={data.type}
                          placeholder={data.placeholder}
                          variant="outlined"
                        />
                      </div>
                    );
                  } else if (data.input_type == "select") {
                    return (
                      <div className={data.class}>
                        <SelectBox name={data.name} />
                      </div>
                    );
                  }

                  else if (data.input_type == "button") {
                    return (
                      <div className={data.class}>
                        <SecondaryButton sec_label="Verify" />
                      </div>
                    );
                  }
                })()}
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Regstep_2;
