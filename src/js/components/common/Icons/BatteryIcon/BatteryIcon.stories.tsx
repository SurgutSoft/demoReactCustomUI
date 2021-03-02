import React from 'react';

import BatteryIcon from './BatteryIcon';
import '../../../../../styles/index.scss';
import {FOLDER_CONTROLS} from "../../../../consts/storyBook";
import IconButton from "../IconButton";
import {BackIcon, DogFootIcon} from "../Icons";

export default {
  title: `${FOLDER_CONTROLS}/Icons`
};


export const BatteryIcon_ = () => (
  <div className="widget">
    <BatteryIcon level={97}/>
    <BatteryIcon level={87}/>
    <BatteryIcon level={77}/>
    <BatteryIcon level={67}/>
    <BatteryIcon level={57}/>
    <BatteryIcon level={47}/>
    <BatteryIcon level={37}/>
    <BatteryIcon level={27}/>
    <BatteryIcon level={17}/>
    <BatteryIcon level={7}/>
  </div>
);
