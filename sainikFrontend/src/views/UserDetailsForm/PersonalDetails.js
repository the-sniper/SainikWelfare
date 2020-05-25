import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class PersonalDetails extends Component {
  Form_Details = [
    {
      inplabel: "First name",
      type: "text",
    },
    {
      inplabel: "Last name",
      type: "text",
    },
    {
      radLabel: "Select gender",
      radOpt: ["Male", "Female"],
      type: "radio",
      group: "gender",
    },
    {
      inplabel: "Date of birth",
      type: "date",
    },
    {
      inplabel: "Father's name",
      type: "text",
    },
    {
      inplabel: "Mother's name",
      type: "text",
    },
    {
      inplabel: "Identification mark",
      type: "text",
    },
    {
      inplabel: "Aadhar card number",
      type: "number",
    },
    {
      inplabel: "PAN card number",
      type: "number",
    },
    {
      inplabel: "ECHS card number",
      type: "number",
    },
    {
      inplabel: "CSD card number",
      type: "number",
    },
    {
      sellabel: "Religion",
      type: "select",
      selOption: ["A", "B", "C"],
      optionalCheck: "(Optional)",
    },
    {
      sellabel: "Caste",
      type: "select",
      selOption: ["A", "B", "C"],
      optionalCheck: "(Optional)",
    },
    {
      inplabel: "Birth place",
      type: "text",
    },
    {
      sellabel: "Birth state",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      sellabel: "Birth city",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      inplabel: "Educational qualification in civil",
      type: "text",
    },
    {
      inplabel: "Equivalent test passed in civil",
      type: "text",
    },
    {
      radLabel: "Civil employment status",
      radOpt: ["Employed", "Un-employed", "Retired"],
      type: "radio",
      group: "civEmpStatus",
    },
    {
      radLabel: "Civil pension status",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "civPensionStatus",
    },
    {
      inplabel: "Civil pension amount",
      type: "number",
    },
    {
      inplabel: "Civil employer",
      type: "text",
    },
    {
      inplabel: "Civil monthly income",
      type: "number",
    },
    {
      inplabel: "Department in civil",
      type: "text",
    },
    {
      inplabel: "Date of retirement",
      type: "date",
    },
    {
      inplabel: "Official contact number",
      type: "number",
    },
  ];
  createElements = (dataParam) => {
    let radioElementsArray = [];
    let selectElementsArray = [];

    if (dataParam.type === "radio") {
      for (let i = 0; i < dataParam.radOpt.length; i++) {
        radioElementsArray.push(
          <>
            <input
              type="radio"
              id={`servRad_${dataParam.radOpt[i]}`}
              name={dataParam.group}
              checked
            />
            <label for={`servRad_${dataParam.radOpt[i]}`}>
              {dataParam.radOpt[i]}
            </label>
          </>
        );
      }
      return radioElementsArray;
    } else if (dataParam.type === "select") {
      for (let i = 0; i < dataParam.selOption.length; i++) {
        selectElementsArray.push(<option>{dataParam.selOption[i]}</option>);
      }
      return selectElementsArray;
    }
  };
  render() {
    return (
      <form>
        <h3 className="formTitle">Personal details</h3>
        <div className="row text-left">
          {this.Form_Details.map((data, index) => (
            <div className="col-6">
              {(() => {
                if (
                  data.type === "text" ||
                  data.type === "date" ||
                  data.type === "number" ||
                  data.type === "email"
                ) {
                  return (
                    <InputBox
                      id={`servInp_${index}`}
                      label={data.inplabel}
                      type={data.type}
                      optional={data.optional}
                    />
                  );
                } else if (data.type === "select") {
                  return (
                    <SelectBox
                      id={`servSel_${index}`}
                      label={data.sellabel}
                      optional={data.optionalCheck}
                    >
                      {this.createElements(data)}
                    </SelectBox>
                  );
                } else if (data.type === "radio") {
                  return (
                    <div className="formRadio">
                      <p className="radioLabel">{data.radLabel}</p>
                      <RadioBox>{this.createElements(data)}</RadioBox>
                    </div>
                  );
                }
              })()}
            </div>
          ))}
        </div>
        <div className="btnContainer d-flex justify-content-end">
          {/* <TertButton type="submit" label="Previous" />
          <PrimaryButton type="submit" label="Next" /> */}
        </div>
      </form>
    );
  }
}

export default PersonalDetails;
