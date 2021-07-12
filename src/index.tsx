import React from 'react';
import ReactDOM from 'react-dom';
import { history } from './services/reducers/index';
import { Provider } from 'react-redux';
import { App } from './components/app';
import {ConnectedRouter } from 'connected-react-router';
import {store} from './store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);