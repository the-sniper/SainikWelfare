import React, { Component } from "react";
import "./SelectBox.css";

class SelectBox extends Component {
  render() {
    return (
      <div class="form-group customSelectBox">
        <label for={this.props.id}>
          {this.props.label}
          <span className="optionalTag">{this.props.optional}</span>
        </label>
        <select class="form-control" name={this.props.label} id={this.props.id}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default SelectBox;
