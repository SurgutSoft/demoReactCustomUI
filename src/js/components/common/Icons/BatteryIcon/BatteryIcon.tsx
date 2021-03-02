import React from 'react';

import battery9 from '../../../../../images/icons/batteryIcon/battery9.svg';
import battery8 from '../../../../../images/icons/batteryIcon/battery8.svg';
import battery7 from '../../../../../images/icons/batteryIcon/battery7.svg';
import battery6 from '../../../../../images/icons/batteryIcon/battery6.svg';
import battery5 from '../../../../../images/icons/batteryIcon/battery5.svg';
import battery4 from '../../../../../images/icons/batteryIcon/battery4.svg';
import battery3 from '../../../../../images/icons/batteryIcon/battery3.svg';
import battery2 from '../../../../../images/icons/batteryIcon/battery2.svg';
import battery1 from '../../../../../images/icons/batteryIcon/battery1.svg';
import battery0 from '../../../../../images/icons/batteryIcon/battery0.svg';

interface IProps {
  level: number;
}

const BatteryIcon = ({level}: IProps) => {
  const getIcon = () => {
    switch (true) {
      case level > 90:
        return battery9;
      case level > 80:
        return battery8;
      case level > 70:
        return battery7;
      case level > 60:
        return battery6;
      case level > 50:
        return battery5;
      case level > 40:
        return battery4;
      case level > 30:
        return battery3;
      case level > 20:
        return battery2;
      case level > 10:
        return battery1;
      default:
        return battery0;
    }
  };

  return <img src={getIcon()} alt=""/>
}

export default BatteryIcon;
