import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import store from './store';
import './App.css';

import Example from './components/example';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Example />
      </div>
      </Provider>
    );
  }
}

export default App;
