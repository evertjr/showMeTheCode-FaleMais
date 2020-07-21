import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Plans from '../pages/Plans';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Plans} />
  </Switch>
);

export default Routes;
