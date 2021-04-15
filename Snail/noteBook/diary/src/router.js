import React from 'react';
import Home from './Home';
import Detail from './Detail'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
const RouterMap=()=>{
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/detail">
        <Detail/>
      </Route>
    </Switch>
  </Router>
}
export default RouterMap