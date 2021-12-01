import { Route, Switch, Redirect } from 'react-router-dom';
import Meeting from './containers/Jitsi/Meeting';
import Home from './components/Home/Home';
import Courses from './containers/Courses/Courses';
import PageNotFound from './components/error/PageNotFound/PageNotFound';

const Routes = () => (
    <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/courses" component={Courses} exact />
        <Route path="/meeting" component={Meeting} exact />
        <Redirect from="/" to="/home" exact />
        <Route render={() => <PageNotFound />}/>
    </Switch>
);

export default Routes;