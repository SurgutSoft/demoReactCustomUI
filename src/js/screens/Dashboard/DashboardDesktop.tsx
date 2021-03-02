import BowlStatus from 'js/components/bowl/BowlStatus/BowlStatus';
import React from 'react';
import {Animal, MealTime} from 'js/models/Animal';
import {Bowl} from 'js/models/Bowl';
import {Align, BowlType, Unit} from 'js/consts/common';
import ChartWidget from 'js/components/usage/ChartWidget/ChartWidget';
import MealPlanWidget from 'js/components/animal/MealPlanWidget/MealPlanWidget';
import {Usage} from 'js/models/Usage';

import simplePng from "images/temp/simple.png";
import css from './Dashboard.module.scss';
import AnimalWidget from 'js/components/animal/AnimalWidget/AnimalWidget';

interface IProps {
  animal: Animal;
  foodBowl?: Bowl;
  waterBowl?: Bowl;
  unit: Unit;
  mealPlan: MealTime[];
  waterlastUsage: Usage | null;
  foodlastUsage: Usage | null;
  isMobile?: boolean;
  mealPortion: number;
}

export const DashboardDesktop = ({animal, foodBowl, waterBowl, unit, mealPlan, waterlastUsage, foodlastUsage, isMobile, mealPortion}: IProps) => {

  return (
    <div className={css.desktopWrapper}>
      <div className={css.alertWrapper}>
        {/* alerts desktop*/}
      </div>
      {foodBowl && waterBowl
        ? (
          <div className={css.rightWidgetsWrapper}>
            <div className={css.twoBowlWidgetWrapper}>
              <div className={css.bowlWrapper}>
                <BowlStatus bowl={foodBowl} unit={unit} usage={foodlastUsage} align={Align.horizontal} mealPortion={mealPortion} />
                <ChartWidget type={BowlType.food} />
                <MealPlanWidget unit={unit} mealPlan={mealPlan} showTimes />
              </div>

              <div className={css.bowlWrapper}>
                <BowlStatus bowl={waterBowl} unit={unit} usage={waterlastUsage} align={Align.horizontal} mealPortion={mealPortion} />
                <ChartWidget type={BowlType.water} />
                <div className={css.baner}> place for info banner</div>
              </div>
            </div>
          </div>
        )
        : (
          <div className={css.rightWidgetsWrapper}>
            <div className={css.oneBowlWidgetsWrapper}>
              <div className={css.otherWidgets}>
                {foodBowl && (
                  <div className={css.foodGrid}>
                    <BowlStatus bowl={foodBowl} unit={unit} usage={foodlastUsage} align={Align.vertical} mealPortion={mealPortion} />
                    <MealPlanWidget unit={unit} mealPlan={mealPlan} showTimes />
                  </div>
                )}
                {waterBowl && <BowlStatus bowl={waterBowl} unit={unit} usage={waterlastUsage} align={Align.vertical} mealPortion={mealPortion} />}

                <div className={css.chartWidget}>
                  <ChartWidget type={foodBowl ? BowlType.food : BowlType.water} />
                  {foodBowl && <div className={css.baner}>place for info banner</div>}
                </div>
              </div>
            </div>

            {waterBowl && <div className={css.baner}>place for info banner</div>}
          </div>
        )
      }
      <div className={css.animalWidget}>
        <AnimalWidget animal={animal} isMobile={isMobile} />
      </div>
    </div>
  )
}