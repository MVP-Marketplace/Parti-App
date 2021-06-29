import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Home from '../components/Home';
import Default from '../components/Organizer/Default';
import Login from '../components/AccountSetUp/Login'
import Register from '../components/AccountSetUp/Register'
import Welcome from '../components/AccountSetUp/Welcome'
import NewCard from '../components/Card/NewCard'
import NewCardSuccess from '../components/Card/NewCardSuccess'
// import TimeZone from '../components/Card/TimeZone'
// import Time from '../components/Card/Time'



const Routes = () => (

  <Switch>

    <Route exact path='/' component={ Default } />

    <Route exact path='/' component={ Home } />
    <Route path='/login' component={ Login } />
    <Route path='/register' component={ Register } />

    <Route path='/upload' component={ Upload } />
    <Route path='/welcome' component={ Welcome } />
    <Route path='/create-card' component={ NewCard } />
    <Route path='/create-card-success' component={ NewCardSuccess } />
    {/* <Route path='/create-card-success' component={ Time } /> */}
  </Switch>
);

export default Routes;

