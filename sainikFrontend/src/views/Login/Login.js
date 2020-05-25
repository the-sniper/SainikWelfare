import React, { Component } from "react";
import InputBox from "../../components/Input/InputBox/InputBox";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import "./Login.css";

class Login extends Component {
  Login_Input = [
    {
      inpLabel: "Email address",
      inpType: "email",
      inpRequired: "required",
    },
    {
      inpLabel: "Password",
      inpType: "password",
      inpRequired: "required",
      minLength: "8",
    },
  ];

  render() {
    return (
      <div className="swLogin">
        <div className="logoContainer">
          <img src="./images/logo.png" class="img-fluid" alt="" />
        </div>
        <div className="loginGreet">
          <h3>LOGIN</h3>
          <p>Welcome</p>
          <p>Login back to your account</p>
        </div>
        <div className="swLoginInputContainer">
          <form>
            {this.Login_Input.map((data, index) => (
              <InputBox
                label={data.inpLabel}
                type={data.inpType}
                id={`loginInp_${index}`}
                placeholder={data.inpPlaceholder}
                required={data.inpRequired}
                minLength={data.minLength}
              />
            ))}
            <div className="d-flex justify-content-between align-items-center">
              <InputCheckbox label="Remember me" />
              <a href="#">Forgot password?</a>
            </div>
            <PrimaryButton type="submit" label="LOGIN" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
