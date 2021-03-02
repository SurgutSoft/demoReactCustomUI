import React from 'react';

import {FoodChart, WaterChart} from './Chart';
import moment from 'moment';
import '../../../../styles/index.scss';
import {Unit} from "../../../consts/common";
import {MealTime} from "../../../models/Animal";
import { FOLDER_APP, FOLDER_CONTROLS } from "../../../consts/storyBook";

export default {
  title: `${FOLDER_APP}/Charts`,
};

const mealPlan = [
  MealTime.create(0.6, 32400000),
  MealTime.create(0.6, 46800000),
  MealTime.create(0.6, 75600000),
]

const mealPlanGrams = [
  MealTime.create(30, 32400000),
  MealTime.create(30, 46800000),
  MealTime.create(30, 75600000),
]

const dayData = [
  {datetime: moment('2021-01-01 00:00:00'), value: 0},
  {datetime: moment('2021-01-01 02:00:00'), value: 0},
  {datetime: moment('2021-01-01 04:00:00'), value: 0},
  {datetime: moment('2021-01-01 06:00:00'), value: 0},
  {datetime: moment('2021-01-01 07:00:00'), value: 0},
  {datetime: moment('2021-01-01 08:00:00'), value: 0},
  {datetime: moment('2021-01-01 09:00:00'), value: 0.5},
  {datetime: moment('2021-01-01 10:00:00'), value: 0},
  {datetime: moment('2021-01-01 11:00:00'), value: 0},
  {datetime: moment('2021-01-01 12:00:00'), value: 0},
  {datetime: moment('2021-01-01 13:00:00'), value: 0.8},
  {datetime: moment('2021-01-01 14:00:00'), value: 0},
  {datetime: moment('2021-01-01 15:00:00'), value: 0},
  {datetime: moment('2021-01-01 17:00:00'), value: 0},
  {datetime: moment('2021-01-01 19:00:00'), value: 0},
  {datetime: moment('2021-01-01 20:00:00'), value: 0},
  {datetime: moment('2021-01-01 21:00:00'), value: 0},
  {datetime: moment('2021-01-01 23:00:00'), value: 0},
]

const weekData = [
  {datetime: moment('2021-01-01 10:00:00'), value: 0.4},
  {datetime: moment('2021-01-02 12:00:00'), value: 0},
  {datetime: moment('2021-01-03 10:00:00'), value: 2.2},
  {datetime: moment('2021-01-04 10:00:00'), value: 1},
  {datetime: moment('2021-01-05 11:00:00'), value: 1.6},
  {datetime: moment('2021-01-06 10:00:00'), value: 2.4},
  {datetime: moment('2021-01-07 12:00:00'), value: 0.7},
]

const monthData = [
  {datetime: moment('2021-01-01 10:00:00'), value: 100},
  {datetime: moment('2021-01-02 12:00:00'), value: 50},
  {datetime: moment('2021-01-03 10:00:00'), value: 150},
  {datetime: moment('2021-01-04 10:00:00'), value: 90},
  {datetime: moment('2021-01-05 11:00:00'), value: 111},
  {datetime: moment('2021-01-06 10:00:00'), value: 120},
  {datetime: moment('2021-01-07 12:00:00'), value: 0},
  {datetime: moment('2021-01-08 11:00:00'), value: 111},
  {datetime: moment('2021-01-09 10:00:00'), value: 120},
  {datetime: moment('2021-01-10 12:00:00'), value: 150},
  {datetime: moment('2021-01-11 11:00:00'), value: 111},
  {datetime: moment('2021-01-12 10:00:00'), value: 120},
  {datetime: moment('2021-01-13 12:00:00'), value: 23},
  {datetime: moment('2021-01-14 11:00:00'), value: 111},
  {datetime: moment('2021-01-15 10:00:00'), value: 12},
  {datetime: moment('2021-01-16 12:00:00'), value: 0},
  {datetime: moment('2021-01-17 10:00:00'), value: 100},
  {datetime: moment('2021-01-18 12:00:00'), value: 50},
  {datetime: moment('2021-01-19 10:00:00'), value: 150},
  {datetime: moment('2021-01-20 10:00:00'), value: 90},
  {datetime: moment('2021-01-21 11:00:00'), value: 111},
  {datetime: moment('2021-01-22 10:00:00'), value: 120},
  {datetime: moment('2021-01-23 12:00:00'), value: 0},
  {datetime: moment('2021-01-24 11:00:00'), value: 111},
  {datetime: moment('2021-01-25 10:00:00'), value: 120},
  {datetime: moment('2021-01-26 12:00:00'), value: 150},
  {datetime: moment('2021-01-27 11:00:00'), value: 111},
  {datetime: moment('2021-01-28 10:00:00'), value: 120},
  {datetime: moment('2021-01-29 12:00:00'), value: 23},
  {datetime: moment('2021-01-30 11:00:00'), value: 0},
]

export const Food_Chart = () => (

  <div>

    <div className="storybookContainer" style={{height: 150}}>
      <strong>Week</strong>
      <FoodChart dataUnit={Unit.cup} data={weekData} mealPlan={mealPlan}/>
    </div>

    <div className="storybookContainer" style={{height: 150}}>
      <strong>Month</strong>
      <FoodChart dataUnit={Unit.gram} data={monthData} mealPlan={mealPlanGrams}/>
    </div>


    <div className="storybookContainer" style={{height: 150}}>
      <strong>Day meal plan</strong>
      <FoodChart dataUnit={Unit.cup} data={dayData} mealPlan={mealPlan}/>
    </div>
  </div>
);

export const Water_Chart = () => (

  <div>
    <div className="storybookContainer" style={{height: 150}}>
      <strong>Week</strong>
      <WaterChart dataUnit={Unit.cup} data={weekData}/>
    </div>
    <div className="storybookContainer" style={{height: 150}}>
      <strong>Month</strong>
      <WaterChart dataUnit={Unit.cup} data={monthData}/>
    </div>
  </div>
);

