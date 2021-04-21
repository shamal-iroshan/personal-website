import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../component/app";
import About from "../component/about";
import Portofolios from "../component/pages/portfolio/portfolios";

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/about` } component={ About } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/portfolio` } component={ Portofolios } />
            </Layout>
        </Switch>
    );
}