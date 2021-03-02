import React, {useEffect, useState} from 'react';
import baseIcon from '../../../../images/bowl/base.png';
//base
import baseWhiteIcon from '../../../../images/bowl/baseWhite.png';
import baseBlueIcon from '../../../../images/bowl/baseBlue.png';
import baseGreenIcon from '../../../../images/bowl/baseGreen.png';
import baseRedIcon from '../../../../images/bowl/baseRed.png';
import baseOrangeIcon from '../../../../images/bowl/baseOrange.png';
import baseYellowIcon from '../../../../images/bowl/baseYellow.png';
import basePurpleIcon from '../../../../images/bowl/basePurple.png';
//fresh water
import waterFullIcon from '../../../../images/bowl/waterFull.png';
import waterHalfFullIcon from '../../../../images/bowl/waterHalfFull.png';
import waterMediumIcon from '../../../../images/bowl/waterMedium.png';
import waterHalfLowIcon from '../../../../images/bowl/waterHalfLow.png';
import waterLowIcon from '../../../../images/bowl/waterLow.png';
//old water
import oldWaterFullIcon from '../../../../images/bowl/oldWaterFull.png';
import oldWaterHalfFullIcon from '../../../../images/bowl/oldWaterHalfFull.png';
import oldWaterMediumIcon from '../../../../images/bowl/oldWaterMedium.png';
import oldWaterHalfLowIcon from '../../../../images/bowl/oldWaterHalfLow.png';
import oldWaterLowIcon from '../../../../images/bowl/oldWaterLow.png';
//food
import foodLowIcon from '../../../../images/bowl/foodLow.png';
import foodMediumIcon from '../../../../images/bowl/foodMedium.png';
import foodFullIcon from '../../../../images/bowl/foodFull.png';

import baseClosedIcon from '../../../../images/bowl/baseClosed.png';
import css from './BowlImage.module.scss';
import {BowlType} from "../../../consts/common";

export interface IProps {
  className?: string;
  type: BowlType.food | BowlType.water;
  bowlLevel: number;
  batteryLevel?: number;
  color?: 'none' | 'green' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple';
  blinkPattern?: number[];
  oldWater?: boolean;
  offline?: boolean;
  zoom?: number;
  width?: number;
}

let flag = true;
const defaultWidth = 116;

const BowlImage = ({className, type, color, bowlLevel, batteryLevel, oldWater, offline, zoom, width, blinkPattern}: IProps) => {
  const [isBlink, setBlink] = useState(true);

  useEffect(() => {
    if (blinkPattern) {
      const interval = setInterval(() => {
        blinking(blinkPattern);
      }, 20000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [isBlink]);

  const blinking = async (blinkPattern: number[]) => {
    let flag = true;
    for (const item of blinkPattern) {
      await delay(item);
      setBlink(flag);
      flag = !flag;
    }
    await delay(blinkPattern[blinkPattern.length - 1]);
    setBlink(false);
  }

  const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  if (blinkPattern && flag) {
    blinking(blinkPattern);
    flag = false
  }

  const getBaseIcon = () => {
    switch (color) {
      case 'blue':
        return baseBlueIcon;
      case 'green':
        return baseGreenIcon;
      case 'orange':
        return baseOrangeIcon;
      case 'purple':
        return basePurpleIcon;
      case 'red':
        return baseRedIcon;
      case 'yellow':
        return baseYellowIcon;
      default:
        return baseWhiteIcon;
    }
  }

  const getlevel = () => {
    if (type === 'food') {
      switch (true) {
        case bowlLevel > 80:
          return foodFullIcon;
        case bowlLevel > 40:
          return foodMediumIcon;
        default:
          return foodLowIcon;
      }

    } else {
      if (oldWater) {
        switch (true) {
          case (bowlLevel >= 80):
            return oldWaterFullIcon;
          case (bowlLevel >= 60 && bowlLevel < 80):
            return oldWaterHalfFullIcon;
          case (bowlLevel >= 40 && bowlLevel < 60):
            return oldWaterMediumIcon;
          case (bowlLevel >= 20 && bowlLevel < 40):
            return oldWaterHalfLowIcon;
          default:
            return oldWaterLowIcon;
        }
      } else {
        switch (true) {
          case (bowlLevel >= 80):
            return waterFullIcon;
          case (bowlLevel >= 60 && bowlLevel < 80):
            return waterHalfFullIcon;
          case (bowlLevel >= 40 && bowlLevel < 60):
            return waterMediumIcon;
          case (bowlLevel >= 20 && bowlLevel < 40):
            return waterHalfLowIcon;
          default:
            return waterLowIcon;
        }
      }
    }
  }

  return (
    <div className={className}>
      <div className={css.wrapper} style={zoom ? {zoom} : {}}>
        {offline && <img className={css.closed} src={baseClosedIcon} alt='closed' style={{width: width || defaultWidth}} />}
        {bowlLevel !== 0 && <img className={css.item} src={getlevel()} alt='water' style={{width: width || defaultWidth}} />}
        {color && !blinkPattern && <img className={css.baseColor} src={getBaseIcon()} alt='baseColor' style={{width: width || defaultWidth}} />}
        {color && blinkPattern && isBlink && <img className={css.baseColor} src={getBaseIcon()} alt='baseColor' style={{width: width || defaultWidth}} />}
        <img className={css.base} src={baseIcon} alt='base' style={{width: width || defaultWidth}} />
      </div>
    </div>
  )
}

export default BowlImage;
