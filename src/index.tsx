import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { App } from './components/app';
import { IState } from './interfaces/store';
import { Main } from './redux/reducers/index';

const store: Store<IState> = createStore(Main);
​
render(
  <Provider store={store}>
    <App compiler="React" framework="TypeScript" />
  </Provider>,
  document.getElementById('app')
);