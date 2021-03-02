import React from 'react';
import '../../../../styles/index.scss';
import {FOLDER_CONTROLS} from "../../../consts/storyBook";
import IconButton from "./IconButton";
import {BackIcon, DogFootIcon} from "./Icons";

export default {
  title: `${FOLDER_CONTROLS}/Icons`
};


export const IconButtons = () => (

  <div>
    <div className="widget">
      <IconButton>
        <DogFootIcon/>
      </IconButton>
      <IconButton>
        <BackIcon className="primaryIcon" />
      </IconButton>
    </div>

    <br/>

    <div className="widget primaryBg">
      <IconButton>
        <DogFootIcon className="whiteIcon"/>
      </IconButton>
      <IconButton>
        <BackIcon className="whiteIcon"/>
      </IconButton>
    </div>
  </div>
);

