import {TooltipProps} from "recharts";
import css from "./Chart.module.scss";
import React from "react";

interface ITooltipProps extends TooltipProps {
  color: string;
}

export const CustomTooltip = ({payload, active, color}: ITooltipProps) => {
  if (!active || !payload) {
    return null;
  }
  const data = (payload as any)[0]?.payload;
  return (
    <div className={css.customTooltip} style={{
      boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
      backgroundColor: color, color: '#fff', borderRadius: 4, padding: 8
    }}>
      {data.name}<br/>
      <strong>{data.valueFormatted}</strong>
    </div>
  );
};

export const CustomTick: React.FC<ICustomTickProps> = ({
                                                         arrowColor,
                                                         x,
                                                         y,
                                                         index,
                                                         visibleTicksCount,
                                                         payload
                                                       }) => {
  const isLast = visibleTicksCount && index === visibleTicksCount - 1;
  if (!payload?.value) return null;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={15} y={0} dy={10} textAnchor='end' fill={isLast ? '#585F5F' : "#A6ABAB"} className={css.xaxis}>
        {payload?.value}
      </text>
      {isLast &&
      <path
        transform={`translate(-6,18)`}
        d="M4.29655 0.522409C4.68622 0.136732 5.31378 0.136732 5.70345 0.522409L9.33371 4.11543C9.96868 4.74389 9.52365 5.82617 8.63025 5.82617H1.36974C0.476352 5.82617 0.0313213 4.74389 0.666293 4.11543L4.29655 0.522409Z"
        fill={arrowColor}/>}
    </g>
  );
};

type ICustomTickProps = {
  arrowColor: string;
  isDayInterval?: boolean,
  payload?: { value: string; [key: string]: string | number };
  x?: number;
  y?: number;
  visibleTicksCount?: number,
  index?: number;
};
