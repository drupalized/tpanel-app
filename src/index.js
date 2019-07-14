// Global components.
import React from 'react';
import ReactDOM from 'react-dom';

// The app.
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Redux.
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './reducers';

// History.
import history from './config/history';

// Styles.
import './styles/index.scss';

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
