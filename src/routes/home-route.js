import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../component/app";
import Home from "../component/home";

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/` } component={ Home } />
            </Layout>
        </Switch>
    );
}