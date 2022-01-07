import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../component/app";
import Home from "../views/home/home";

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `/` } component={ Home } />
            </Layout>
        </Switch>
    );
}