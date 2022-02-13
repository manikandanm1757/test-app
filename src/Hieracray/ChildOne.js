import React, { Component } from 'react'
import GrandChildOne from './GrandChildOne'

export default class ChildOne extends Component {
    clickHandler = () => {
        this.props.getValue('From Child One Component to ROOT');
    }
  render() {
    return (
      <div  style={{border: '3px solid blue', padding: '20px', margin: '20px'}}>
          <h2>ChildOne</h2>
          <p>Name : {this.props.name}</p>
          <button onClick={this.clickHandler}>Pass Prop to Root Parent</button>
          <GrandChildOne name='From Child one' fromRoot={this.props.name} />
      </div>
    )
  }
}
