import React from 'react';
import Prepare from './prepare/Prepare';
import WiFiSettings from './wifi/WiFiSettings';
import BlinkUp from './blinkup/BlinkUp';
import Assign from './assign/Assign';

import './Connect.scss';
import {BackIcon} from "../../components/common/Icons/Icons";

export default function render() {

  const steps = [
    <Prepare onConfirmStep={this.onNextClick}/>,
    <WiFiSettings onConfirmStep={this.onNextClick}/>,
    <BlinkUp onConfirmStep={this.handleBlinkUp}/>,
    <Assign
      animal={this.props.animal}
      deviceInfo={this.state.deviceInfo}
      onConfirmStep={this.handleAssign}/>
  ]

  return (<div className="Connect">
    <BackIcon
      className="back-icon"
      onClick={this.onBackClick}
    />
    <p className="title">Connecting a Bowl</p>
    {steps[this.state.step]}

  </div>)
}
