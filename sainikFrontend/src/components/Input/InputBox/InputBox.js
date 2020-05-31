import React, { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
  render() {
    return (
      <div class="form-group customInputBox">
        <label htmlFor={this.props.id}>
          {this.props.label}
          {this.props.optional}
        </label>
        <input
          type={this.props.type}
          class="form-control"
          name={this.props.name}
          id={this.props.id}
          aria-describedby="helpId"
          placeholder={`Enter your ${this.props.label}`}
          required={this.props.required}
          min="0"
          minLength={this.props.minLength}
        />
        {/* <small id="helpId" class="form-text text-muted">Help text</small> */}
      </div>
    );
  }
}

export default InputBox;
