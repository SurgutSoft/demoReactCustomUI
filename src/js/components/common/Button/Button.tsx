import React from 'react';
import css from './button.module.scss';
import {ArrowRightIcon} from "../Icons/Icons";

interface IProps {
  children?: any;
  className?: string;
  size?: "large" | 'middle' | "small";
  type?: "default" | "primary" | "text" | "details";
  blue?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({children, type, disabled, blue, size, className, onClick}: IProps) => {
  const getBtnStyle = (): string => {
    if (disabled) {
      switch (type) {
        case "primary":
          return `${css.primaryDisabled} ${css[size || 'middle']}`;
        case "text":
          return `${css.textDisabled} ${css[size || 'middle']}`;
        default:
          return `${css.defaultDisabled} ${css[size || 'middle']}`;
      }
    } else {
      switch (type) {
        case "primary":
          return `${css.primary} ${css[size || 'middle']}`;
        case "text":
          return `${css.text} ${css[size || 'middle']}`;
        case "details":
          return `${css.text} ${blue && css.blue} ${css.details} ${css[size || 'middle']}`;
        default:
          return `${css.default} ${css[size || 'middle']}`;
      }
    }
  }

  return (
    <div className={className}>
      <button className={getBtnStyle()} disabled={disabled} onClick={onClick}>
        <span>{children}{type === 'details' && <ArrowRightIcon />}</span>
      </button>
    </div>
  )
}

export default Button;
