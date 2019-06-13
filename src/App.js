import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import './App.css';

import Navbar from './components/UI/Navbar';
import UserHome from './components/UserComponents/UserHome';
// import FreeText from './components/UserComponents/FreeText'

import AdminHome from './components/AdminComponents/AdminHome'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route path='/user' component={UserHome}/>
            <Route path='/admin' component={AdminHome}/>
          </Switch>
        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;