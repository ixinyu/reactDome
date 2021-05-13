import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {mainRoutes} from './routes/index'
import App from './App';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/admin" render={routeProps=><App {...routeProps} />} />
        {mainRoutes.map(route=>{
          // return <Route key={route.path} path={route.path} component={route.component} />
          //结构赋值的写法
          return <Route key={route.path} {...route} />
        })}
        <Redirect to="/admin" from='/'/>
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
