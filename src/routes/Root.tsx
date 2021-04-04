//@ts-nocheck
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {
  Route, Switch, BrowserRouter
} from 'react-router-dom';
import  {store,persistor} from '../redux/store/store';
import Home from '../modules/home/index';

const Root = ()=>(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
)

export default Root;