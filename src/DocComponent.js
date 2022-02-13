// import React from 'react'

// export default function DocComponent({ color, title, description }) {
//   return (
//     <div>
//     <h3 style={{color: color}}>{title}</h3>
//     <p>{description}</p>
//   </div>
//   )
// }

import React, { Component } from "react";

class DocComponent extends Component {
    clickHandler= () => {
        console.log(this.props.title);
    }
  render() {
      console.log(this.props);
    return (
      <div>
        <h3 style={{ color: this.props.color }}>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {
            this.props.extraContent.show ? <h3>{this.props.extraContent.content}</h3> : <h3>Content Hidden</h3>
        }
        <button onClick={()=> this.props.clickHandler(this.props.title)}>Show Title</button>
      </div>
    );
  }
}

export default DocComponent;
