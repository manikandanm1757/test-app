import React, { Component } from "react";

export default class ChildTwo extends Component {
  render() {
    return (
      <div
        style={{ border: "3px solid blue", padding: "20px", margin: "20px" }}
      >
        <h2>ChildTwo</h2>
        <p>Name : {this.props.name}</p>
        <p>fromChildOne : {this.props.fromChildOne}</p>
      </div>
    );
  }
}
