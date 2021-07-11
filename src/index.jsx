import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer, history } from './services/reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import { App } from './components/app';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { wsActions } from './services/actions/ws';  
import { wsActionsAuth } from './services/actions/ws-auth';  
import { socketMiddleware } from './services/middleware';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history),  socketMiddleware('wss://norma.nomoreparties.space/orders/all', wsActions, false),
  socketMiddleware('wss://norma.nomoreparties.space/orders', wsActionsAuth, true))
);

const store = createStore(rootReducer, enhancer);
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