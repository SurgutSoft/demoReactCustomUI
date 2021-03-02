import React from 'react';

import LastUsage from './LastUsage';
import '../../../../styles/index.scss';
import { FOLDER_APP } from "../../../consts/storyBook";
import { BowlType, Unit } from 'js/consts/common';
import { Usage } from 'js/models/Usage';
import moment from 'moment';

export default {
  title: `${FOLDER_APP}/BowlStatus`
};

const portionCups = 2.3;
const portionGrams = 240;


const usage: Usage[] = [
  {
    lastConsumeAt: moment("13:32", "HH:mm"),
    lastConsumeValue: 2.1,
  },
  {
    lastConsumeAt: moment("22:02", "HH:mm"),
    lastConsumeValue: 2.2,
  },
  {
    lastConsumeAt: moment("18:17", "HH:mm"),
    lastConsumeValue: 2.8,
  }
]

const usageGrams: Usage[] = [
  {
    lastConsumeAt: moment("13:32", "HH:mm"),
    lastConsumeValue: 50,
  },
  {
    lastConsumeAt: moment("22:02", "HH:mm"),
    lastConsumeValue: 75,
  },
  {
    lastConsumeAt: moment("18:17", "HH:mm"),
    lastConsumeValue: 120,
  },

]


export const LastUsage_ = () => (

  <div>
    <p>
    <strong>Cups</strong>
    </p>
    <div className="flex">
      <LastUsage type={BowlType.food} unit={Unit.cup} usage={usage[0]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.food} unit={Unit.cup} usage={usage[1]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.food} unit={Unit.cup} usage={usage[2]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.water} unit={Unit.cup} usage={usage[2]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.food} unit={Unit.cup} usage={usage[2]} mealPortion={portionCups} offline/> &nbsp;&nbsp;
    </div>
    <p>
    <strong>Grams</strong>
    </p>
    <div className="flex">
      <LastUsage type={BowlType.food} unit={Unit.gram} usage={usageGrams[0]} mealPortion={portionGrams}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.food} unit={Unit.gram} usage={usageGrams[1]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.food} unit={Unit.gram} usage={usageGrams[2]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.water} unit={Unit.gram} usage={usageGrams[2]} mealPortion={portionCups}/> &nbsp;&nbsp;
      <LastUsage type={BowlType.water} unit={Unit.gram} usage={usageGrams[3]} mealPortion={portionCups}/> &nbsp;&nbsp;

    </div>
  </div>

);


