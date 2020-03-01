import React, { Component } from "react";
import logo from "../../../image/logo.png";
import Textfield from "../../../component/Input/Textfield/Textfield";
import PrimaryButton from "../../../component/Input/Button/PrimaryButton";
import CheckBox from "../../../component/Input/CheckBox/CheckBox";
import { Link } from "react-router-dom";
import InputPassword from './../../../component/Input/Textfield/InputPassword';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginInputFields: [
        {
          label: "Username",
          placeholder: "Enter your username",
          type: "text"
        },
        {
          label: "Password",
          placeholder: "Enter your password",
          type: "password"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="login_box">
              <img className="login_logo" src={logo} />
              <h2 className="login_title">LOGIN</h2>
              <p className="login_wcText">
                Welcome ! <br /> Login back to your account
              </p>
              <form
                className="login_textForm d-flex"
                noValidate
                autoComplete="on"
              >
              {this.state.LoginInputFields.map((data, index) => (
                <div className="w-100">
                {(() => {
                  if (data.type == 'text'){
                      return(
                          <Textfield
                          id={"LoginInputField_" + index}
                          label={data.label}
                          placeholder={data.placeholder}
                          type={data.type}
                          />
                      )
                  }

                  else if (data.type == 'password'){
                    return(
                        <InputPassword
                        id={"LoginInputField_" + index}
                        label={data.label}
                        placeholder={data.placeholder}
                        type={data.type}
                        />
                    )
                }
              }
                  )()}
                </div>
              ))}
              </form>
              <div className="login_rem d-flex justify-content-between align-items-center">
                <CheckBox />
                <a href="#"> Forgot password ?</a>
              </div>
              <div className="login_btn">
                <PrimaryButton login_label="Login" />
              </div>
              <div className="login_helpText">
                <p>
                  Don't have an account ?
                  <br />
                  Register
                  <Link to="/Registration"> here</Link>
                </p>
              </div>
              <p className="copyrights_text">ALL RIGHTS RESERVED © 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
