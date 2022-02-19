import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Loader from "../component/common/loading/loader";
import {getConfig} from "../views/home/actions";
import About from "../views/about/about";
import Portfolio from "../views/portfolio/portfolio";
import Contact from "../views/contact/contact";
import Home from "../views/home/home";

const UnderConstruction = React.lazy(() => import('../views/commingSoon/CommingSoon'));
const NotFound = React.lazy(() => import('../views/404/404'));

export default function AppRoute() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.homeReducer.config);
  const underMaintainence = config?.attributes?.underMaintainence;

  useEffect(() => {
    dispatch(getConfig())
  }, [dispatch])

  return (
    <React.Suspense fallback={<Loader/>}>
      {
        underMaintainence ?
          <Switch>
            <Route path={'/'} component={UnderConstruction}/>
          </Switch>
          :
          <Switch>
            <Route exact path={`/pages/about`} component={About}/>
            <Route exact path={`/pages/portfolio`} component={Portfolio}/>
            <Route exact path={`/pages/contact`} component={Contact}/>
            <Route exact path={ `/` } component={ Home } />
            <Route component={NotFound}/>
          </Switch>
      }
    </React.Suspense>
  )
}