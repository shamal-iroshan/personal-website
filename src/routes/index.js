import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Loader from "../component/common/loading/loader";
const HomePage = React.lazy(() => import('./home-route'));
const OtherPages = React.lazy(() => import('./other-route'));

export default function AppRoute() {
    return (
        <React.Suspense fallback={<Loader/>}>
            <Switch>
                <Route path={`/pages`} component={OtherPages} />
                <Route path={`/`} component={HomePage}/>
            </Switch>
        </React.Suspense>
    )
}