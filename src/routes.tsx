import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import { ProgressSpinner } from 'primereact/progressspinner';
import PageNotFound from './components/error/PageNotFound/PageNotFound'

const Courses = React.lazy(() => import('./containers/Courses/Courses'))
const Meeting = React.lazy(() => import('./containers/Jitsi/Meeting'))

const Routes = () => (
  <Suspense fallback={<ProgressSpinner/>}>
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/courses" component={Courses} exact />
      <Route path="/meeting" component={Meeting} exact />
      <Redirect from="/" to="/home" exact />
      <Route render={() => <PageNotFound />} />
    </Switch>
  </Suspense>
)

export default Routes
