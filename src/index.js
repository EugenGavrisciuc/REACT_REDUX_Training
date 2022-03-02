// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    case "RND":
      return action.tempval;
    case "CLR":
      return state = 0
    default:
      return state
  }
}

const state = createStore(reducer),
      inc = () => ({type: "INC"}),
      dec = () => ({type: "DEC"}),
      rnd = (tempval) => ({type: "RND", tempval}),
      clr = () => ({type: "CLR"});

document.getElementById("INC").addEventListener("click", () => {
  state.dispatch(inc());
})

document.getElementById("DEC").addEventListener("click", () => {
  state.dispatch(dec())
})

document.getElementById("RND").addEventListener("click", () => {
  const tempval = Math.round(Math.random() * 100);
  state.dispatch(rnd(tempval))
})

document.getElementById("CLR").addEventListener("click", () => {
  state.dispatch(clr());
})

const update = () => {
  document.getElementById("val").textContent = state.getState();
}

state.subscribe(update);