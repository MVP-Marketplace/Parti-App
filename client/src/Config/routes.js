import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Home from '../components/Home';
import Default from '../components/Organizer/Default';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Default } />
    <Route path='/upload' component={ Upload } />
  </Switch>
);

export default Routes;