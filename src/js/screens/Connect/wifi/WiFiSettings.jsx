import React from 'react';

import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

export default function Prepare({ onConfirmStep }) {
  const dataObject = {};

  const handleInputChange = (key) => (e) => {
    dataObject[key] = e.target.value;
  }

  const onNextClick = () => {
    dataObject.name && localStorage.setItem('obe.wifi.name', dataObject.name);
    dataObject.password && localStorage.setItem('obe.wifi.password', dataObject.password);
    onConfirmStep();
  }

  return (
    <div className="wifi">
        <p className="step-title">WIFI SETTINGS</p>
 
        <Input
          placeholder="Wifi name"
          defaultValue={localStorage.getItem('obe.wifi.name') || ''}
          onChange={handleInputChange('name')}
        />
        <Input
          placeholder="Wifi password"
          defaultValue={localStorage.getItem('obe.wifi.password') || ''}
          onChange={handleInputChange('password')}
        />
        <p className="details">
            Enter your home WiFi{'\n'}
            network name and password.{'\n'}
            Make sure your network is set to 2.4GHz
        </p>
        <Button
            type="primary"
            shape="round"
            size="large"
            onClick={onNextClick}>
            Next
        </Button>
    </div>
  );
}