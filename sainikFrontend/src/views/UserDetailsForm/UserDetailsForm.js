import React, { Component } from "react";
import "./UserDetailsForm.css";
import ServiceDetails from "./ServiceDetails";
import PersonalDetails from "./PersonalDetails";
import FamilyDetails from "./FamilyDetails";
import PensionDetails from "./PensionDetails";
import DependentDetails from "./DependentDetails";
import ContactDetails from "./ContactDetails";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class UserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.submitValue = ""
    this.formLists = [
      <ServiceDetails />,
      <PensionDetails />,
      <PersonalDetails />,
      <FamilyDetails />,
      <DependentDetails />,
      <ContactDetails />,
    ]

    
    this.state = {
      toggleState: false,
      hoverState: false,
      currentFormIndex: 0
    };
  }

  openSlide = () => {
    this.setState({
      toggleState: true,
    });
  };

  slideHoverIn = () => {
    let bodyElement = document.querySelector("html");
    this.setState({
      hoverState: true,
    });
    bodyElement.classList.add("noScroll");
  };

  slideHoverOut = () => {
    let bodyElement = document.querySelector("html");
    this.setState({
      hoverState: false,
    });
    bodyElement.classList.remove("noScroll");
  };

  slideHover = () => {
    let bodyElement = document.querySelector("html");
    let currentState;
    this.setState({
      hoverState: !this.state.hoverState,
    });
    currentState = this.state.hoverState;
    bodyElement.classList.add("noScroll");
    // currentState ? bodyElement.classList.add("noScroll") : bodyElement.classList.remove("noScroll");
  };

  changeFormNext = () => {
    let currentIndex = this.state.currentFormIndex + 1;
    if (currentIndex >= 4) {
      // currentIndex = 0;
      return this.submitValue= "Submitted Successfully !"
    }
    this.setState((state) => ({
      currentFormIndex: currentIndex,
    }));
    
  }

  changeFormPrevious = () => {
    let currentIndex
    if (currentIndex === 0) {
      // currentIndex = 0;
      // return this.submitValue= "Submitted Successfully !"
      return 0
    }
    currentIndex = this.state.currentFormIndex - 1;
    this.setState((state) => ({
      currentFormIndex: currentIndex,
    }));
  }

  render() {
    return (
      <div className="userDetailsForm">
        <h3 className="mb-5">ADD USER DETAILS</h3>
        <div className="customContainer d-flex justify-content-between align-items-start">
          <div className="ltPanel">
            <ul class="nav d-flex justify-content-between">
              <li class="nav-item completed">
                <span class="checkpoint">01</span>
                <a class="nav-link active" href="#">
                  Service Details
                </a>
              </li>
              <li class="nav-item active">
                <span class="checkpoint">02</span>
                <a class="nav-link" href="#" onClick={this.openSlide}>
                  Pension Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">03</span>
                <a class="nav-link" href="#">
                  Personal Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">04</span>
                <a class="nav-link" href="#">
                  Contact Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">05</span>
                <a class="nav-link" href="#">
                  Family Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">06</span>
                <a class="nav-link" href="#">
                  Dependent Details
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`slider${
              this.state.toggleState
                ? " show d-flex justify-content-between"
                : ""
            }`}
          >
            <div
              className={`slideLt${
                this.state.hoverState ? " showOverlay" : "disable"
              }`}
            ></div>
            <div
              className="slideRt"
              onMouseEnter={this.slideHoverIn}
              onMouseLeave={this.slideHoverOut}
            >
              <div className="sliderRtContent">
                <div className="closeSlider d-flex justify-content-center align-items-center">
                  <span
                    className="material-icons"
                    onClick={() => this.setState({ toggleState: false })}
                  >
                    arrow_forward
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="rtPanel">

            {this.formLists[this.state.currentFormIndex]}
            {/* <ServiceDetails /> */}
            {/* <PensionDetails/> */}
            {/* <PersonalDetails /> */}
            {/* <FamilyDetails/> */}
            {/* <DependentDetails/> */}
            {/* <ContactDetails/> */}
            <h1>{this.submitValue}</h1>
          <TertButton type="submit" actionFunction={this.changeFormPrevious} label="Previous" />

          <PrimaryButton type="submit" actionFunction={this.changeFormNext} label="Next" />

            {/* <button onClick={this.changeForm}>Click</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailsForm;
