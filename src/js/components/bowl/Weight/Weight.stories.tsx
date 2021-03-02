import React from 'react';

import Weight from './Weight';
import '../../../../styles/index.scss';
import {FOLDER_APP} from "../../../consts/storyBook";
import {BowlType, Unit} from "../../../consts/common";

export default {
  title: `${FOLDER_APP}/Weights`
};


export const Weights = () => (
  <div>
    <div className="flex widget">
      <Weight value={0.4} unit={Unit.cup} size="large" color="primary"/> &nbsp; &nbsp;
      <Weight value={7.5} unit={Unit.cup} size="large" color="red"/> &nbsp; &nbsp;
      <Weight value={140} unit={Unit.gram} size="large" color="gray"/> &nbsp; &nbsp;
      <Weight value={50} unit={Unit.gram} size="large" color="blue" type={BowlType.water}/>
    </div>
    <br/>

    <div className="flex widget">

      <Weight value={0.4} unit={Unit.cup} size="medium" color="primary"/> &nbsp; &nbsp;
      <Weight value={7.5} unit={Unit.cup} size="medium" color="red"/> &nbsp; &nbsp;
      <Weight value={140} unit={Unit.gram} size="medium" color="gray"/> &nbsp; &nbsp;
      <Weight value={50} unit={Unit.gram} size="medium" color="blue" type={BowlType.water}/>
    </div>

    <br/>

    <div className="flex widget">
      <Weight value={0.4} unit={Unit.cup} size="small" color="primary"/> &nbsp; &nbsp;
      <Weight value={7.5} unit={Unit.cup} size="small" color="red"/> &nbsp; &nbsp;
      <Weight value={140} unit={Unit.gram} size="small" color="gray"/> &nbsp; &nbsp;
      <Weight value={50} unit={Unit.gram} size="small" color="blue" type={BowlType.water}/>
    </div>

    <br/>

  </div>
);
