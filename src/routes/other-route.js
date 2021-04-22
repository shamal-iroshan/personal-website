import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../component/app";
import About from "../component/pages/about/about";
import Portfolio from "../component/pages/portfolio/portfolio";
import Contact from "../component/pages/contact/contact";

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/about` } component={ About } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/portfolio` } component={ Portfolio } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/contact` } component={ Contact } />
            </Layout>
        </Switch>
    );
}