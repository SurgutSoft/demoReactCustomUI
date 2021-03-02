import {Component} from 'react';
import renderView from './LoginInputToken.view.jsx';

export class LoginInputToken extends Component {

  state = {token: ''};

  submitToken(e = null) {
    if (e) e.preventDefault();
    this.setState({error: null, loading: true});

    // api.authConfirm(this.state.token)
    //   .then(res => this.props.history.replace('/dashboard'))
    //   .catch(e => this.setState({error: e.message, loading: false}));
  }

  onChangeToken(value) {
    this.setState({
      token: value.slice(0, 6), error: null
    }, () => {
      if (this.state.token.length === 6) this.submitToken();
    });
  }

  back() {
    this.props.history.goBack();
  }

  render = renderView;
}

export default LoginInputToken;
