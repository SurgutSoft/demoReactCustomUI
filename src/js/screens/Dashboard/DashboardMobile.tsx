import BowlStatus from 'js/components/bowl/BowlStatus/BowlStatus';
import React from 'react';
import MobileHead from './MobileHead';
import css from './Dashboard.module.scss';
import {Animal, MealTime} from 'js/models/Animal';
import {Bowl} from 'js/models/Bowl';
import {Align, BowlType, Unit} from 'js/consts/common';
import ChartWidget from 'js/components/usage/ChartWidget/ChartWidget';
import MealPlanWidget from 'js/components/animal/MealPlanWidget/MealPlanWidget';
import {Usage} from 'js/models/Usage';

interface IProps {
  animal?: Animal | null;
  onMenuClick: () => void;
  foodBowl?: Bowl;
  waterBowl?: Bowl;
  unit: Unit;
  mealPlan: MealTime[];
  waterlastUsage: Usage | null;
  foodlastUsage: Usage | null;
  mealPortion: number;
}

export const DashboardMobile = ({animal, onMenuClick, foodBowl, waterBowl, unit, mealPlan, waterlastUsage, foodlastUsage, mealPortion}: IProps) => {

  return (
    <div className={css.mobileWrapper}>
      {animal && <MobileHead animal={animal} onMenuClick={onMenuClick} />}
      <div className={css.alertWrapper}>
        {/* alerts mobile*/}
      </div>
      {foodBowl && waterBowl
        ? (
          <div className={css.twoBowlWrapper}>
            <div className={css.bowls}>
              <div className={css.foodBowl}>
                <BowlStatus
                  bowl={foodBowl}
                  unit={unit}
                  usage={foodlastUsage}
                  align={Align.vertical}
                  mealPortion={mealPortion}
                />
              </div>
              <div className={css.waterBowl}>
                <BowlStatus
                  bowl={waterBowl}
                  unit={unit}
                  usage={waterlastUsage}
                  align={Align.vertical}
                  mealPortion={mealPortion}
                />
              </div>
            </div>

            <ChartWidget type={BowlType.food} />
            <ChartWidget type={BowlType.water} />
          </div>
        )
        : (
          <div className={css.oneBowlWrapper}>
            {foodBowl && <BowlStatus
              bowl={foodBowl}
              unit={unit}
              usage={foodlastUsage}
              align={Align.horizontal}
              mealPortion={mealPortion}
            />}
            {waterBowl && <BowlStatus
              bowl={waterBowl}
              unit={unit}
              usage={waterlastUsage}
              align={Align.horizontal}
              mealPortion={mealPortion}
            />}
            <ChartWidget type={foodBowl ? BowlType.food : BowlType.water} />
          </div>
        )}

      {mealPlan && foodBowl && <MealPlanWidget mealPlan={mealPlan} unit={unit} />}
    </div>
  )
}