import React from 'react';

import BowlStatus from './BowlStatus';
import '../../../../styles/index.scss';
import {FOLDER_APP} from "../../../consts/storyBook";
import {Align, BowlType, Unit} from "../../../consts/common";
import {Bowl} from 'js/models/Bowl';
import moment from 'moment';
import {Usage} from 'js/models/Usage';


const sample = (type: BowlType, battery: number, name: string, mins: number) => {
  return Bowl.create({
    type: type,
    name: name,
    levelGrams: 150,
    levelCups: 2.4,
    isWater: true,
    levelPercent: 80,
    battery: battery,
    tareWeight: 444,
    updatedAt: moment(new Date()).subtract(mins, 'm'),
    isOffline: false,
  })
}

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

export default {
  title: `${FOLDER_APP}/BowlStatus`
};

export const BowlsStatus_ = () => (
  <div>
    <br /><br />
    <div className="flex">
      <div className="flex" style={{width: 350}}>
        <BowlStatus bowl={sample(BowlType.food, 30, 'Food bool', 50)}
          unit={Unit.cup} align={Align.vertical} mealPortion={usage[0].lastConsumeValue - 1} usage={usage[0]} /> &nbsp;&nbsp;

        <BowlStatus bowl={sample(BowlType.water, 78, 'Water bool', 8)}
          unit={Unit.cup} align={Align.vertical} mealPortion={usage[1].lastConsumeValue + 1} usage={usage[1]} />
      </div>

      &nbsp;&nbsp;

      <div className="flex" style={{width: 400}}>
        <BowlStatus bowl={sample(BowlType.food, 10, 'Food bool', 50)}
          unit={Unit.cup} align={Align.vertical} usage={usage[2]} mealPortion={usage[2].lastConsumeValue + 0.2}/> &nbsp;&nbsp;

        <BowlStatus bowl={sample(BowlType.water, 78, 'Water bool', 500)}
          unit={Unit.cup} align={Align.vertical} usage={usage[3]} mealPortion={usage[2].lastConsumeValue + 150}/>
      </div>

    </div>

    <br /><br />

      <div style={{width: 460}}>
      <BowlStatus bowl={sample(BowlType.food, 30, 'Food bool', 50)}
        unit={Unit.cup} align={Align.horizontal} usage={usage[0]} mealPortion={usage[0].lastConsumeValue}/>
    </div>
    <br /><br />

    <div style={{width: 360}}>
      <BowlStatus bowl={sample(BowlType.water, 30, 'Cobe Water bool', 30)}
        unit={Unit.gram} align={Align.horizontal} usage={usageGrams[0]} mealPortion={usageGrams[0].lastConsumeValue}/>
    </div>

  </div>
);
