import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

export default function RootParent() {
   const[name, setName] = useState('');
  const getNameValue = (value) => {
    setName(value);
  };

  return (
    <div style={{ border: "3px solid red", padding: "20px", margin: "20px" }}>
      <h1>RootParent</h1>
      <p>Name: {name}</p>
      <ChildOne name="From Root Parent" getValue={getNameValue} />
      <ChildTwo name="From Root Parent" fromChildOne={name} />
    </div>
  );
}

















