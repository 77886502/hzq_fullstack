import React from 'react';
import ReactDOM from 'react-dom';
// import Login from './Login';
import {Provider} from 'react-redux'
import Home from './home';
import store from './store'
const App = (
  <Provider store={store}>
    <Home/>
  </Provider>
)

ReactDOM.render(App,document.getElementById('root'));

