import {Component} from 'react';
import renderView  from './InputPhone.view.jsx';

export class InputPhone extends Component {

  state = {phone: '+1'};

  submitPhone = (e) => {
    console.log('submit', e)
    e.preventDefault();
    this.setState({error: null, loading: true});

    // api.auth(this.state.phone)
    //    .then(() => {
    //      this.setState({loading: false});
    //      this.props.history.replace('/login/token');
    //    })
    //    .catch(e => this.setState({error: e.message, loading: false}));
  };

  get isValidPhone() {
    return this.state.phone && this.state.phone.length >= 3;
  }

  onChangePhone(value = '') {
    this.setState({
      phone: `+${ value.replace(/\D/g, '') }`, error: null
    });
  }

  render = renderView;
}

export default InputPhone;
