// Components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/style/CreateGlobalStyle';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
