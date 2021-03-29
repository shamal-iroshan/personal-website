import React from 'react';
import {Route, Switch} from 'react-router-dom';

const HomePage = React.lazy(() => import('./home-route'))
const OtherPages = React.lazy(() => import('./other-route'))

export default function AppRoute() {
    return (
        <React.Suspense fallback={<h1>loading</h1>}>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/pages`} component={OtherPages}/>
                <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
            </Switch>
        </React.Suspense>
    )
}