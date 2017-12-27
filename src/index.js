import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PhotoIndex from './containers/PhotoIndex';
import PhotoShow from './containers/PhotoShow';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/photos/:id" component={PhotoShow} />
        <Route exact path="/" component={PhotoIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container-fluid')
);
