// 1) Import the React and ReactDOM libraries
// React - library that defines what a component is and how multiple components work together
// ReactDOM - library that knows how to get a component to show up in the browser
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
// function App() {
// let message = 'Bye there!';
// if (Math.random() > 0.5) {
//   message = 'Hello there!';
// }
// return <h1>{message}</h1>;

// let message = [1, 2, 3];
// return <h1>{message}</h1>;

// const date = new Date();
// const time = date.toLocaleTimeString();
// return <h1>{time}</h1>;

// const name = 'Ahmed';
// const age = 32;
// return (
//   <h1>
//     Hi, my name is {name} and my age is {age}
//   </h1>
// );

//   const inputType = 'number';
//   const minValue = 5;

//   return <input type={inputType} min={minValue} />;
// }

// 5) Show the component on the screen
root.render(<App />);
