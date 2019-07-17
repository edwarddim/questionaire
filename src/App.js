import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import './App.css';

import Navbar from './components/UI/Navbar';

import CreateSection from './components/AdminComponents/CreateSection';
import AdminHome from './components/AdminComponents/AdminHome'
import CreateQuestionaire from './components/AdminComponents/createQuestionaire';
import ManageResponse from './components/AdminComponents/ManageResponse';
import UserResponse from './components/UserComponents/UserResponse';
import ViewResponses from './components/AdminComponents/ViewResponses';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path='/admin' component={AdminHome}/>
            <Route exact path='/admin/createSection' component={CreateSection}/>
            <Route exact path='/admin/createQuestionaire' component={CreateQuestionaire}/>
            <Route exact path='/admin/links/manage' component={ManageResponse}/>
            <Route exact path='/admin/responses' component={ViewResponses} />
            <Route exact path='/res/:id' component={UserResponse}/>
          </Switch>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;