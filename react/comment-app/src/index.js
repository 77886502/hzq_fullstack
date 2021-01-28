import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import reportWebVitals from './reportWebVitals';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

ReactDOM.render(
  <React.StrictMode>
    <CommentApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();