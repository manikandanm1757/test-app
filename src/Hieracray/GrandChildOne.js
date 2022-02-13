import React, { Component } from "react";

export default class GrandChildOne extends Component {
  render() {
    return (
      <div  style={{border: '3px solid green', padding: '20px', margin: '20px'}}>
        <h5>GrandChildOne</h5>
        <p>Name : {this.props.name}</p>
        <p>Root Name : {this.props.fromRoot}</p>
      </div>
    );
  }
}
