import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Loader from "../component/common/loading/loader";
import {getConfig} from "../views/home/actions";

const HomePage = React.lazy(() => import('./home-route'));
const OtherPages = React.lazy(() => import('./other-route'));
const UnderConstruction = React.lazy(() => import('../views/commingSoon/CommingSoon'));

export default function AppRoute() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.homeReducer.config);
  const underMaintenance = config?.attributes?.underMaintainence;

  useEffect(() => {
    dispatch(getConfig())
  }, [dispatch])

  return (
    <React.Suspense fallback={<Loader/>}>
      <Switch>
        {
          underMaintenance ?
            <Route path={'/'} component={UnderConstruction}/>
            :
            <>
              <Route path={`/pages`} component={OtherPages}/>
              <Route path={`/`} component={HomePage}/>
            </>
        }
      </Switch>
    </React.Suspense>
  )
}