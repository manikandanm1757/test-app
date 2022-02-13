import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Plans from './Plans';
import StateDemo from './StateDemo';
import RootParent from './Hieracray/RootParent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Plans /> */}
    <StateDemo />
    <RootParent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
