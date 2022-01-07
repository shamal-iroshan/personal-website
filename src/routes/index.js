import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";

import Loader from "../component/common/loading/loader";
import {getConfig} from "../views/home/actions";
const HomePage = React.lazy(() => import('./home-route'));
const OtherPages = React.lazy(() => import('./other-route'));

export default function AppRoute() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig())
  }, [dispatch])

    return (
        <React.Suspense fallback={<Loader/>}>
            <Switch>
                <Route path={`/pages`} component={OtherPages} />
                <Route path={`/`} component={HomePage}/>
            </Switch>
        </React.Suspense>
    )
}