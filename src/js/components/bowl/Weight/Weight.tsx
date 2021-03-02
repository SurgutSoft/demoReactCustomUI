import React from 'react';

import css from './Weight.module.scss';
import {BowlType, Unit} from "../../../consts/common";
import {CupIcon} from "../../common/Icons/Icons";

interface IProps {
  value: number;
  unit: Unit;
  size?: "small" | "medium" | "large";
  type?: BowlType;
  color?: 'primary' | 'black' | 'blue' | 'red' | 'gray';
}

const Weight = ({value, unit, size, color, type}: IProps) => {

  return (
    <div
      className={`${css.wrapper} ${css[size || "small"]} ${css[color || (type === BowlType.water ? "blue" : "primary")]}`}>
      {unit === Unit.cup ? value.toFixed(1) : Math.round(value)}
      {unit === Unit.cup
        ? <CupIcon/>
        : <span>{type === BowlType.water ? "ml" : 'gm'}</span>
      }
    </div>
  )
}

export default Weight;
