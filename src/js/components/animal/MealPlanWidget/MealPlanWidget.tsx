import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MealTime } from "../../../models/Animal";
import { Unit } from "../../../consts/common";
import Button from "../../common/Button/Button";
import { Path } from "../../../consts/router";

import verticalDividerIcon from 'images/icons/verticalDivider.svg';
import boneInBowlIcon from 'images/icons/boneInBowl.svg';
import css from "./MealPlanWidget.module.scss";
import Weight from "js/components/bowl/Weight/Weight";
import moment from "moment";

interface IProps {
  mealPlan?: Array<MealTime>;
  unit: Unit;
  showTimes?: boolean;
}

const MealPlanWidget = ({mealPlan, unit, showTimes}: IProps) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(Path.mealPlan), [history]);
  const dayPortion = mealPlan ? mealPlan.map(i => i.value).reduce((a, b) => a + b, 0) : 0;
  return (
    <>
      <div className="widget">
        <div className={css.widgetWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title}>Meal Plan</div>
            <Button className={css.detailsBtn} type="details" onClick={handleOnClick}>Details</Button>
          </div>

          <div className={css.mealWrapper}>
            {mealPlan
              ? <>
                <div className={css.timesWrapper}>
                  <div className={css.times}>{mealPlan.length}<sup>times</sup></div>
                  <div className={css.caption}>per day</div>
                </div>

                <img src={verticalDividerIcon} alt=""/>

                <div className={css.timesWrapper}>
                  <Weight value={dayPortion / mealPlan.length} unit={unit} size="large"/>
                  <div className={css.caption}>per meal</div>
                </div>

                <img src={verticalDividerIcon} alt=""/>

                <div className={css.timesWrapper}>
                  <Weight value={dayPortion} unit={unit} size="large"/>
                  <div className={css.caption}>per day</div>
                </div>
              </>
              : <>
                No meal planned
              </>
            }
          </div>

          {showTimes && mealPlan &&
          <div className={css.showTimesWrapper}>
            {mealPlan.map(item => (
              <>
                <div className={css.row}>
                  <div className={css.timeCol}>
                    <img src={boneInBowlIcon} alt=""/>
                    <span>{moment(item.time).format('hh:mm A')}</span>
                  </div>

                  <Weight unit={unit} value={item.value} size="medium"/>
                </div>
              </>
            ))}
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default MealPlanWidget;
