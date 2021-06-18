import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Home from '../components/Home';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/upload' component={ Upload } />
  </Switch>
);

export default Routes;