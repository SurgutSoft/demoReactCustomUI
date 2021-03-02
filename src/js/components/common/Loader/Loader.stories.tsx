import React from 'react';

import Loader from './Loader';
import { FOLDER_CONTROLS } from "../../../consts/storyBook";

export default {
  title: `${FOLDER_CONTROLS}/Loaders`,
  component: Loader,
};

export const Loader_ = () => (
  <>
    <div>
      <Loader size="large"/>
      <Loader size="medium"/>
      <Loader size="small"/>
    </div>
    <div>
      <Loader color="blue" size="large"/>
      <Loader color="blue" size="medium"/>
      <Loader color="blue" size="small"/>
    </div>
    <div>
      <Loader color="white" size="large"/>
      <Loader color="white" size="medium"/>
      <Loader color="white" size="small"/>
    </div>
  </>

);
