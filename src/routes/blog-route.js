import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from "../component/app";
import LandingPage from "../component/pages/blog/landingPage";
import SinglePost from "../component/pages/blog/singlePost";

export default function blogRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={'/blog/post/:id'} component={SinglePost} />
                <Route exact path={`/blog/`} component={LandingPage}/>
            </Layout>
        </Switch>
    );
}