import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/Homepage';
import Overview from './pages/Overview';
import Facebook from './pages/Facebook';
import Google from './pages/Google';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/google" element={<Google />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
