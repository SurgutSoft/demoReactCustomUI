import React from 'react';

import BowlImage from '../../../../images/custom/bowl.png';

import Button from "../../../components/common/Button/Button";

export default function Assign({ onConfirmStep, animal, deviceInfo }) {
  if (!animal || !deviceInfo) return null;
  return (
    <div className="assign">
        <p className="step-title">
            <div className="mac">

                {deviceInfo.deviceId}
            </div>
        </p>
        <div className="bowl-animal">
            <img src={BowlImage} alt="" />

            <div className="current-animal">
                <img src={animal.image_url} alt="" />
                {animal.name}

            </div>
        </div>
        <p className="details">
            Select the Bowl type
        </p>

        <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            onClick={onConfirmStep}>
            Complete
        </Button>
    </div>
  );
}