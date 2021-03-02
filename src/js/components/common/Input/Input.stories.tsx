import React from 'react';
import '../../../../styles/index.scss';
import Input from "./Input";
import { FOLDER_CONTROLS } from "../../../consts/storyBook";

export default {
  title: `${FOLDER_CONTROLS}/Input`
};


export const Inputs = () => (
  <div className="storybookContainer" style={{width: 300}}>
    <p>
      <Input label={"Name"}/>
    </p>
    <br/>
    <p>
      <Input label={"Name"} value={'Cobe'}/>
    </p>

    <br/>
    <p>
      <Input label={"Weight"} value={'22'} endAdornment={'lbs'}/>
    </p>


  </div>
);

