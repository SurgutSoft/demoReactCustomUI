import React, {Component} from 'react';
import logo from '../../../images/logo/logoColor.svg';

import './login.scss';
import {Switch, withRouter} from "react-router";
import {Route} from "react-router-dom";
import InputPhone from "./InputPhone/InputPhone";
import LoginInputToken from "./LoginInputToken/LoginInputToken";

export class Login extends Component {

  render() {
    return (
      <div className="Login">
        <div>
          <header className="text-center">
            <img src={logo} alt="Obe"/>
          </header>

          <Switch>
            <Route exact path='/login'>
              <InputPhone history={this.props.history}/>
            </Route>
            <Route exact path='/login/token'>
              <LoginInputToken history={this.props.history}/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  };
}

export default withRouter(Login);
