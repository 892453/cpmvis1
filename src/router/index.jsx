import React from 'react'
import { Router as ReactRouter, Switch, Route, Redirect } from 'react-router'
import history from './history'
import Layout from '../layout'
import Opinion from '@/pages/opinion'
import Analysis from '@/pages/analysis'
import Network from '@/pages/network'
import opinionAnly from '@/pages/opinionAnly'
import Boardcast from '@/pages/boardcast'
import Test from '@/pages/test'

export default function Router() {
    return (
        <ReactRouter history={history}>
            <Layout>
                <Switch>
                    {/* <Route path="/analysis" component={Analysis} />
                    <Route path="/network" component={Network} />
                    <Route path="/option" component={Opinion} />
                    <Route path="/board" component={Boardcast} />
                    <Route path="/optionAnly" component={opinionAnly} /> */}
                    <Route path="/main" component={Test} />
                    <Redirect from="/" to="/main" />
                </Switch>
            </Layout>
        </ReactRouter>
    )
}