import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Round from './Round';
import WinPage from './WinPage';
//import PlayersContainer from './PlayersContainer';
import App from '../App';

export const history = createHistory();
// import SignUp from './SignUp';
// import Welcome from './Welcome';

class AllRoutes extends Component{
 render(){
   return(
    <Router history={history}>
        <Switch> 
            <Route exact path="/" component={App} />
            <Route exact path="/round" component={Round} />
            <Route exact path="/winpage" component={WinPage} />
        </Switch>
    </Router>
   );
  }
 }
 export default AllRoutes;