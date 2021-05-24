import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/index'
import RouterTodo from './components/routerTodo'
import DetailList from './components/details'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import CreateTicket from './components/CreateTicket';
import Individual from './components/individual';

const store = createStore(reducer)

ReactDOM.render(
  // <Provider store = {store}>
  //   {/* <App /> */}
  //   {/* <FunctionTodo /> */}
  //   <RouterTodo />
  // </Provider>,
  <Provider store={store}>
    <Router>
        <div>
            <Switch>
                <Route path='/ticket'>
                  <CreateTicket/>
                </Route>
                <Route path='/details'>
                  <DetailList/>
                </Route>
                <Route path={`/individual/:id`}>
                  <Individual />
              </Route>
                <Route path='/'>
                  <RouterTodo/>
                </Route>
            </Switch>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
