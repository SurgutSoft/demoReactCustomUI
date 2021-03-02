import React from 'react';
import MIconButton from '@material-ui/core/IconButton';


interface IProps {
  children: any;
  onClick?: (e?: any) => void;
  className?: string
}

const IconButton = ({children, onClick, className}: IProps) => {


  return (
    <MIconButton onClick={onClick} className={className}>
      {children}
    </MIconButton>
  )
}

export default IconButton;
