import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import NewItem from './pages/NewItem';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={ Register } />
                <Route path="/home" component={ Home } />
                <Route path="/newitems/new" component={ NewItem } />
            </Switch>
        </BrowserRouter>
    );
}