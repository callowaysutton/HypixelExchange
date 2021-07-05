import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import Hypixel from 'hypixel-api-reborn';

// const hypixel = new Hypixel.Client("0b41349c-a396-4aeb-b90e-5a1d9fa7f685", {
//     cache: true,
//     rateLimit: "AUTO",
//     cacheSize: 10,
//     cacheTime: 120
//   });

// hypixel.getSkyblockAuctions().then(auction => {
//     console.log(auction)
// })