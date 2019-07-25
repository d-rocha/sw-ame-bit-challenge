import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Start from '../components/Start';
import Main from '../components/Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Start}/>
            <Route path='/main' component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;