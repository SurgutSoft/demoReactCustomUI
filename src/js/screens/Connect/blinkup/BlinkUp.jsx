import React from 'react';

import Button from "../../../components/common/Button/Button";

export default function BlinkUp({ onConfirmStep }) {
  return (
    <div className="blinkup">
        <p className="step-title">CONNECTING...</p>
        <div className="step-circle">

        </div>
        <p className="details">
            Tap the 'Connect' button and{'\n'}
            place your phone screen down over{'\n'}
            the Obe logo on the Bowl and wait 30 sec.
        </p>
        <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            onClick={onConfirmStep}>
            Connect
        </Button>
    </div>
  );
}
