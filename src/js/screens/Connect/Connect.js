import {Component} from 'react';
import renderView from './Connect.view';

export class Connect extends Component {
  state = {
    deviceInfo: null,
    step: 0,
  }

  onNextClick = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  onBackClick = () => {
    const {step} = this.state;
    if (step === 0) {
      this.props.history.push('/dashboard');
    } else {
      this.setState({
        step: step - 1
      })
    }
  }

  handleBlinkUp = () => {
    let wifiName = localStorage.getItem('obe.wifi.name');
    let wifiPassword = localStorage.getItem('obe.wifi.password');
    console.log('blinkUp with wifi = ' + wifiName);
    console.log('blinkUp plugin: ' + window.blinkup);
    let self = this;
    if (window.blinkup) {
      console.log('start blinkUp');
      let callback = function (message) {
        let json = JSON.parse(message);
        console.log('callback ' + message);
        if (json.deviceInfo) {
          console.log("success blinkup, device ID =  " + json.deviceInfo.deviceId);
          self.setState({deviceInfo: json.deviceInfo});
          self.onNextClick();
        }
      };
      var error = function (message) {
        console.log('error-blink ' + message);
      };

      window.blinkup.flashWifiBlinkUp(callback, error, {
        apiKey: '318e3fcdf922b7072f6ad333c9c70d69',
        ssid: wifiName, password: wifiPassword,
        developerPlanId_: '58811c24f7edac50',
        isInDevelopment: false
      });
    }
  }

  handleAssign = () => {

  }

  render = renderView;
}

export default Connect;