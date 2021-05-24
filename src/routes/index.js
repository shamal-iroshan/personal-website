import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Loader from "../component/common/loading/loader";
import NotFound from "../component/pages/404/404";
const HomePage = React.lazy(() => import('./home-route'));
const OtherPages = React.lazy(() => import('./other-route'));

export default function AppRoute() {
    return (
        <React.Suspense fallback={<Loader/>}>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/pages`} component={OtherPages} />
                <Route exact path={`${process.env.PUBLIC_URL}/404`} component={NotFound} />
                <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
            </Switch>
        </React.Suspense>
    )
}