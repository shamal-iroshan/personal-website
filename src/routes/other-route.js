import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from "../component/app";
import About from "../views/about/about";
import Portfolio from "../views/portfolio/portfolio";
import Contact from "../views/contact/contact";
import NotFound from "../views/404/404";

export default function HomeRoute() {
    return (
        <Switch>
            <Route exact path={`/pages/404`} component={NotFound}/>
            <Layout>
                <Route exact path={`/pages/about`} component={About}/>
                <Route exact path={`/pages/portfolio`} component={Portfolio}/>
                <Route exact path={`/pages/contact`} component={Contact}/>
            </Layout>
        </Switch>
    );
}