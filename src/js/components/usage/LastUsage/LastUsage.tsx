import Weight from "js/components/bowl/Weight/Weight";
import React from "react";
import {BowlType, getPortionDiff, PortionDiff, Unit} from "../../../consts/common";
import {Usage} from "../../../models/Usage";

import wifiOffIcon from "images/icons/wifiOff.svg";
import css from "./LastUsage.module.scss";

interface IProps {
  usage?: Usage | null,
  type: BowlType,
  unit: Unit,
  mealPortion: number,
  offline?: boolean,
  weightSize?: "small" | "medium" | "large",
  weightColor?: 'primary' | 'black' | 'blue' | 'red',
}

const UsageStatus = ({usage, type, unit, offline, weightSize, weightColor, mealPortion}: IProps) => {
  const renderMealPortion = () => {
    let fedText
    let difference = 0;
    if (mealPortion && usage) {
      difference = Math.abs(usage?.lastConsumeValue - mealPortion)
      fedText = getPortionDiff(usage?.lastConsumeValue, mealPortion)
    }

    if (fedText && fedText !== PortionDiff.normal) {
      return (
        <div className={fedText === PortionDiff.overfed ? css.overfed : css.fedStatus}>
          <span>{fedText}</span> &nbsp;
          <strong><Weight unit={unit} value={difference} type={type} size={"small"} color={fedText === PortionDiff.overfed ? "red" : "black"} /></strong>
        </div>
      )
    } else {
      return <div className={css.fedStatus}>&nbsp;</div>
    }
  }

  const checkNormal = () => {
    if (usage && mealPortion)
      return getPortionDiff(usage?.lastConsumeValue, mealPortion) === PortionDiff.normal || type === BowlType.water
  }

  return (
    <>
      {offline
        ?
        <div className={css.wrapper}>
          <img src={wifiOffIcon} alt="img" />
        </div>
        : usage && <div className={css.wrapper}>
          <div className={checkNormal() ? css.infoNormal : css.info}>
            <div className={unit === Unit.cup ? css.weightCup : undefined}>
              <Weight unit={unit} value={usage.lastConsumeValue} type={type} size={"large"} color={weightColor} />
            </div>
            {(mealPortion && type === BowlType.food) ? renderMealPortion() : <div className={css.normal}>&nbsp;</div>}
            <div className={checkNormal() ? css.lastConsumeNormal : css.lastConsume}>{type === BowlType.food ? "Last meal:" : "Last drink:"}
              &nbsp;<span className={css.timeValue}>{usage.lastConsumeAt.format('LT')}</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}


export default UsageStatus;
