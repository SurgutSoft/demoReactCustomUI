import React, {useState} from 'react';
import '../../../../styles/index.scss';
import Select from "./Select";
import {FOLDER_CONTROLS} from "../../../consts/storyBook";
import {Unit} from "../../../consts/common";

export default {
  title: `${FOLDER_CONTROLS}/Select`
};


export const Select_ = () => {
  const [value, setValue] = useState(Unit.cup);
  return (<div className="storybookContainer" style={{width: 300}}>
      <p>
        <Select label={"Unit"} value={value} onChange={setValue} options={[
          {value: Unit.cup, label: 'Cups'},
          {value: Unit.gram, label: 'Grams'}
        ]}/>
      </p>

    </div>
  )
}

