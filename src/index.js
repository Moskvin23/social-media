import reportWebVitals from './reportWebVitals'
import state, { subscriber } from './redux/state'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import {addPost} from './redux/state'


let rerenderEntireTree = (state) => {  
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/> 
    </React.StrictMode>,
    document.getElementById('root')
  );
 
  }
  rerenderEntireTree(state);
 subscriber(rerenderEntireTree);

reportWebVitals();
