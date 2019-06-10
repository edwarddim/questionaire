import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import './App.css';

import Navbar from './components/UI/Navbar';
import UserHome from './components/UserComponents/UserHome';
import FreeText from './components/UserComponents/FreeText'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' component={UserHome}/>
          </Switch>
        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
