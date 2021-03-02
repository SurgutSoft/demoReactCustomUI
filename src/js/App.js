import React from 'react';
import AppLayout from './components/navigation/AppLayout/AppLayout';
import Login from "./screens/Login/Login";

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Connect} from "./screens/Connect/Connect";

const App = () => {

  return (
    <BrowserRouter>

      <Switch>

        <Route path='/login'><Login/></Route>
        <Route path='/connect'><Connect/></Route>

        <Route exact path="/" render={() => <Redirect to={{pathname: "/home"}}/>}/>

        <AppLayout/>

      </Switch>

    </BrowserRouter>
  );
}



export default App;

