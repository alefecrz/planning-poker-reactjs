import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/room" exact component={Room} />
            </Switch>
        </BrowserRouter>
    );
}
