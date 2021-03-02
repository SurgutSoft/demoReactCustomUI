import React from 'react';
import moment from 'moment';

import AnimalWidget from './AnimalWidget';
import '../../../../styles/index.scss';
import {FOLDER_APP} from "../../../consts/storyBook";
import {Gender} from "../../../consts/common";
import {Animal} from 'js/models/Animal';

export default {
  title: `${FOLDER_APP}/AnimalWidget`
};

const animal: Animal = {
  id: 1,
  name: "Prince",
  image: "https://s3.amazonaws.com/obedog-backend/animals/animal-images/prince_588_311_fawxb.jpg",
  activityLevel: 1.5,
  birthDate: moment(1539129600),
  bodyType: 1,
  breed: "Boxer",
  gender: Gender.male,
  kcalCustom: 732,
  kcalRecommended: 732,
  weight: 68,
  current: false,
  years: "9.5",
  mealPlan: [],
}

const animal2: Animal = {
  id: 1,
  name: "Zeus",
  image: "https://s3.amazonaws.com/obedog-backend/animals/animal-images/zeus_349_90_wqdi9.jpg",
  activityLevel: 1.5,
  birthDate: moment(1539129600),
  bodyType: 1,
  breed: "American Staffordshire Terrier",
  gender: Gender.female,
  kcalCustom: 937,
  kcalRecommended: 940,
  weight: 55,
  current: false,
  years: "7",
  mealPlan: [],
}

export const AnimalWidgets = () => (
  <div className="flex">
    <div style={{width: 320}}>
      <AnimalWidget animal={animal}/>
    </div>
    <div style={{width: 40}}></div>
    <div style={{width: 320}}>
      <AnimalWidget animal={animal2}/>
    </div>
  </div>
);
