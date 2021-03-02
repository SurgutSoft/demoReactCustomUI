import React from 'react';
import {Bar, BarChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Unit} from "../../../consts/common";
import css from './Chart.module.scss';
import {MealTime} from "../../../models/Animal";
import {CustomTick, CustomTooltip} from "./ChartCustomElements";
import {IUsageItem} from "../../../models/Usage";


interface IFoodProps {
  data: Array<IUsageItem>
  mealPlan?: Array<MealTime>,
  dataUnit: Unit.cup | Unit.gram,
}

export const FoodChart = ({data, dataUnit, mealPlan: mealPlan_}: IFoodProps) => {

  const mealPlan = mealPlan_ !== undefined ? mealPlan_ : [];
  const dayInterval = isDayInterval(data);
  const yearInterval = isYearInterval(data);
  const dayPortion = mealPlan.map(m => m.value).reduce((a, b) => a + b, 0);

  const chartData = data.map((item, i) => {
    const isMealTime = dayInterval && mealPlan.find(m => m.hour === item.datetime.hours());
    let planPortion = dayInterval ? dayPortion / mealPlan.length : dayPortion;
    if (dayInterval && !isMealTime) planPortion = 0;
    return {
      name: formatDatetime(dayInterval, yearInterval, item),
      valueFormatted: dataUnit === Unit.cup ? `${item.value.toFixed(1)} cups` : `${Math.round(item.value)} gm`,
      plan: planPortion > 0 && item.value < planPortion ? planPortion - item.value : 0,
      value: item.value > planPortion ? planPortion : item.value,
      over: item.value > planPortion ? item.value - planPortion : 0
    }
  });

  return (
    <ResponsiveContainer width="100%" minHeight={150} maxHeight={300} height='100%'>
      <BarChart data={chartData} maxBarSize={14}>
        <ReferenceLine y={dayPortion} strokeDasharray="2 3" stroke={css.strokeColor}/>
        <XAxis dataKey="name"
               tickLine={false} minTickGap={1}
               tick={<CustomTick isDayInterval={dayInterval} arrowColor={css.barColorFood}/>}
               stroke={css.xAxisColorFood}/>
        <Tooltip content={<CustomTooltip color={css.xAxisColorFood}/>}/>
        <Bar dataKey="value" stackId="a" fill={css.barColorFood}/>
        <Bar dataKey="plan" stackId="a" fill={css.barColorFoodPlan}/>
        <Bar dataKey="over" radius={[3, 3, 0, 0]} stackId="a" fill={css.barColorOver}/>
      </BarChart>
    </ResponsiveContainer>
  );
}


interface IWaterProps {
  data: Array<IUsageItem>
  dataUnit: Unit.cup | Unit.gram
}

export const WaterChart = ({data, dataUnit}: IWaterProps) => {

  const dayInterval = isDayInterval(data);
  const yearInterval = isYearInterval(data);
  // const sum = data.map(i => i.value).reduce((a, b) => a + b, 0);
  // const avg = Math.round(sum / data.length) || 0;
  return (
    <ResponsiveContainer width="100%" minHeight={150} maxHeight={300} height='100%'>
      <BarChart data={data.map(item => ({
        name: formatDatetime(dayInterval, yearInterval, item),
        valueFormatted: dataUnit === Unit.cup ? `${item.value.toFixed(1)} cups` : `${Math.round(item.value)} ml`,
        value: item.value
      }))} maxBarSize={14}>
        <Tooltip content={<CustomTooltip color={css.barColorWater}/>}/>
        {/*<ReferenceLine y={avg} strokeDasharray="2 3" stroke={css.strokeColor}/>*/}
        <XAxis dataKey="name"
               tickLine={false}
               tick={<CustomTick arrowColor={css.barColorWater}/>}
               stroke={css.barColorWater}/>

        <Bar dataKey="value" radius={[3, 3, 0, 0]} stackId="a" fill={css.barColorWater}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

function isYearInterval(data: Array<IUsageItem>) {
  return data.length > 0 && data[data.length - 1].datetime.diff(data[0].datetime, 'month') > 6;
}

function isDayInterval(data: Array<IUsageItem>) {
  return data.length > 0 && data[data.length - 1].datetime.diff(data[0].datetime, 'day') <= 1;
}

const formatDatetime = (isDayInterval: boolean, isYearInterval: boolean, item: IUsageItem) => {
  return item.datetime.format(isDayInterval ? 'hh A' : (isYearInterval ? 'MMM' : 'MMM DD'));
}
