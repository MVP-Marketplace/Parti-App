import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Home from '../components/Home';
import Login from '../components/AccountSetUp/Login'
import Register from '../components/AccountSetUp/Register'


const Routes = () => (

  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/login' component={ Login } />
    <Route path='/register' component={ Register } />
    <Route path='/upload' component={ Upload } />
  </Switch>
);

export default Routes;

