// Components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/style/CreateGlobalStyle';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';
import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  APDPAction,
  AvastarParsedDataPointState,
  DispatchType,
} from './types/dataTypes';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store: Store<AvastarParsedDataPointState, APDPAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
