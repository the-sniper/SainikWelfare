import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import PrimaryButton from "../Input/Button/PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Regstep_1 from "../../view/Main/Registration/Regstep_1";
import Regstep_2 from "../../view/Main/Registration/Regstep_2";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Login Info", "Personal Info", "Upload Docs"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <h2>Login Information</h2>
          <div className="row">
            <div className="col-sm-12">
              <Regstep_1 />
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <h2>Personal Information</h2>
          <div className="row">
            <div className="col-sm-12">
              <Regstep_2 />
            </div>
          </div>
        </div>
      );
    case 2:
      return "Upload Docs";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="registrationForm">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className="d-flex justify-content-between">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button label="Next" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
                </div>
            </div>
          )}
        </div>
        <div className="reg_helpText">
          {(() => {
            if (activeStep === 0) {
              return (
                <p>
                  Already have an account ?
                  <br />
                  Login
                  <Link exact to="/">
                    {" "}
                    here
                  </Link>
                </p>
              );
            } else {
              return "";
            }
          })()}
        </div>
        <p className="copyrights_text">ALL RIGHTS RESERVED © 2019</p>
      </div>
    </div>
  );
}
