import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import PhotoIndex from './containers/PhotoIndex';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <PhotoIndex />
  </Provider>
  , document.querySelector('.container-fluid'));
