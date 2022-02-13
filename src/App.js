import { FunctionDemo, SecondDemo } from "./DemoFunction";
import DocComponent from "./DocComponent";
import ClassDemo from "./DemoClass";
import "./App.css";
import {useState} from 'react';

function App() {
  const [clickedTitle, setClickedTitle] = useState('');
  const sections = [
    {
      color: "red",
      title: "Declarative",
      extraContent: {show: true, content: 'For red title'},
      description:
        "Decalrative description Decalrative description Decalrative descriptionDecalrative description",
    },
    {
      color: "blue",
      title: "Component Based",
      extraContent: {show: false, content: 'For blue title'},
      description:
        "Component Based Component BasedComponent BasedComponent Based",
    },
    {
      color: "green",
      title: "Use ANywhere",
      extraContent: {show: false, content: 'For green title'},
      description:
        "Use ANywhere Use ANywhere Use ANywhere Use ANywhere Use ANywhere",
    },
  ];
  return (
    <div>
      <FunctionDemo />
      <SecondDemo />
      <ClassDemo />
      <h1>{clickedTitle}</h1>
      <div style={{ display: "flex" }} className="container">
        {sections.map((item, index) => {
          return (
            <DocComponent
              key={index}
              color={item.color}
              title={item.title}
              description={item.description}
              extraContent={item.extraContent}
              clickHandler={(title)=> setClickedTitle(title)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
