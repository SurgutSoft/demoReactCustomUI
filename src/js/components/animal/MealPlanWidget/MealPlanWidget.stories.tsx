import React from 'react';
import moment from 'moment';

import MealPlanWidget from './MealPlanWidget';
import '../../../../styles/index.scss';
import { FOLDER_APP } from "../../../consts/storyBook";
import { Gender, Unit } from "../../../consts/common";
import { Animal, MealTime } from 'js/models/Animal';

export default {
  title: `${FOLDER_APP}/MealPlanWidget`,
  component: MealPlanWidget
};

const mealPlanCups: Array<MealTime> = [
  MealTime.create(1.2, 200000),
  MealTime.create(1.2, 4000000),
  MealTime.create(1.2, 66000000)
]

const mealPlanGrams: Array<MealTime> = [
  MealTime.create(700, 200000)
]


export const MealPlanWidget_ = () => (
  <div>
    <div className="flex">
      <div style={{width: 360}}>
        <MealPlanWidget mealPlan={mealPlanCups} unit={Unit.cup} showTimes/>
      </div>
      &nbsp; &nbsp; &nbsp;
      <div>
        <MealPlanWidget mealPlan={mealPlanGrams} unit={Unit.gram} showTimes/>
      </div>
    </div>

    <br/><br/>

    <div style={{width: 360}}>
      <MealPlanWidget mealPlan={mealPlanCups} unit={Unit.cup}/><br/>
      <MealPlanWidget mealPlan={mealPlanGrams} unit={Unit.gram}/>
    </div>
  </div>
);
