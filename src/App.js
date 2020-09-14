import React from 'react';
import {Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import {adminRoutes} from './routes/index'
import Frame from './components/Frame/Index'
import { isLogined } from "./utils/auth";

function App() {
  
  return (
    isLogined()?
    <Frame className="App">
     <Switch>
       {adminRoutes.map(route=>{
         return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
            return <route.component {...routeProps} />
         }} />
       })}
      <Redirect to={adminRoutes[0].path} from='/admin' />
      <Redirect to="/404" />
     </Switch>
    </Frame>
    :<Redirect to='/login' />
  );
}

export default App;

