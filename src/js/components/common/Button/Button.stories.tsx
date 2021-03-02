import React from 'react';

import Button from './Button';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import '../../../../styles/index.scss';
import { FOLDER_CONTROLS } from "../../../consts/storyBook";
import {PlusIcon, SupportIcon} from "../Icons/Icons";

export default {
  title: `${FOLDER_CONTROLS}/Buttons`
};


export const Buttons = () => (
  <div className="storybookGrid">
    <div>
      <Button type='primary'>Primary</Button>
      <Button type='primary' size="large">Primary (Large)</Button>
      <Button type='primary' size="middle">Primary (Middle)</Button>
      <Button type='primary' size="small">Primary (Small)</Button>
      <Button type='primary' disabled>Primary (disabled)</Button>
    </div>

    <div>
      <Button type="default">Default</Button>
      <Button type="default" size="large">Default (Large)</Button>
      <Button type="default" size="middle">Default (Middle)</Button>
      <Button type="default" size="small">Default (Small)</Button>
      <Button type="default" disabled>Default(disabled)</Button>
    </div>

    <div>
      <Button type="text">Text</Button>
      <Button type="text" size="large">Text (Large)</Button>
      <Button type="text" size="middle">Text (Middle)</Button>
      <Button type="text" size="small">Text (Small)</Button>
      <Button type="text" disabled>Text(disabled)</Button>
    </div>

  </div>
);




export const ButtonWithIcon_ = () => (
  <div>

    <div>
      <Button type="primary" size="large"><PlusIcon fill="white"/> Add Bowl</Button><br/><br/>
      <Button type="default" size="large"><SupportIcon/> Customer Support</Button>
    </div>

  </div>
);

export const ButtonGroup_ = () => (
  <div className="storybookGrid">

    <div>
      <ButtonsGroup labels={['Day', 'Week', 'Month']} selected={1} onChange={() => {
      }}/>
    </div>

    <div>
      <ButtonsGroup labels={['Day', 'Week', 'Month', 'Year']} selected={2} blue onChange={() => {
      }}/>
    </div>

  </div>
);
