import React from 'react';
import List from './component/list.js';
import Add from './component/add.js';
import { Provider } from 'react-redux';
import store from './store/index.js';

export default function App() {
  return (
    <Provider store={store}>
        <Add />
        <hr />
        <List />
    </Provider>
  );
}

