import React, { Component } from "react";

export default class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
        items: []
    };
  }

  keyPressHandler = (event) => {
    //   this.setState({ hasFocus: true}, ()=>{
    //     console.log(this.state);
    //   });
    //   console.log(this.state);
    // this.setState({
    //     focus: {...this.state.focus, hasFocus: true, focusBackground: '#F00'}
    // });
    if(event.key === 'Enter') {
        const value = event.target.value;
        this.setState({
            items: [...this.state.items, value]
        });
    }
  }
  removeHandler = (index) => {
      console.log(index);
    this.setState({
        items: this.state.items.filter((item, idx)=>{
            return idx !== index;
        })
    })
  }
  render() {

    return (
      <div>
        <input type="text" onKeyPress={this.keyPressHandler} />
        {
            this.state.items.map((item, index) => {
                return <h3>{item} <button onClick={() => this.removeHandler(index)}>X</button></h3>
            })
        }
      </div>
    );
  }
}
