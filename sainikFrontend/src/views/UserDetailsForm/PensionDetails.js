import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class PensionDetails extends Component {
  Form_Details = [
    {
      inplabel: "Unit last served",
      type: "text",
    },
    {
      inplabel: "Date of discharge",
      type: "date",
    },
    {
      sellabel: "Reason of discharge",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      radLabel: "Death while on service",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "deathOnService",
    },
    {
      inplabel: "Date of death",
      type: "date",
    },
    {
      sellabel: "Death details",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      sellabel: "Medical category while discharge",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      sellabel: "Character while discharge",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      inplabel: "Discharge book number",
      type: "text",
    },
    {
      inplabel: "PPO Number",
      type: "text",
    },
    {
      inplabel: "Name of the record office",
      type: "text",
    },
    {
      inplabel: "Pension sanctioned",
      type: "number",
    },
    {
      inplabel: "Disability pension",
      type: "number",
    },
    {
      sellabel: "Percentage of disability",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      inplabel: "Pension account number",
      type: "number",
    },
    {
      sellabel: "Bank name",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      sellabel: "Branch name",
      type: "select",
      selOption: ["A", "B", "C"],
    },
    {
      sellabel: "IFSC code",
      type: "select",
      selOption: ["A", "B", "C"],
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
        <h3 className="formTitle">Pension details</h3>
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
                    />
                  );
                } else if (data.type === "select") {
                  return (
                    <SelectBox id={`servSel_${index}`} label={data.sellabel}>
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

export default PensionDetails;
