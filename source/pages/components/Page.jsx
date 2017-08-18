import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../HomeContainer';
import SignUpUserContainer from '../SignUpUserContainer';
import Profile from '../ProfileContainer';
import Error404 from '../Error404Container';

function Pages() {
  return (
    <main role="application">
      <Switch>
        {/* Home */}
        <Route path="/" exact component={Home} />
        {/* SignupUserContainer */}
        <Route path="/user" exact component={SignUpUserContainer} />
        {/* Profile */}
        <Route path="/user/:id" exact component={Profile} />
        {/* Error 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  );
}

export default Pages;
