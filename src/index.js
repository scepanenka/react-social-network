import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export let renderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       store={store}
                       dispatch={store.dispatch.bind(store)}
                       />,
    document.getElementById('root'));
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
