import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {Snackbar} from '@material-ui/core';


interface IProps {
  open: boolean;
  type?: 'success' | 'error'
  children: string;
  onClose: () => void;
}


const Alert = ({open, type = 'success', children, onClose}: IProps) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <MuiAlert elevation={6} severity={type} variant="filled" style={{fontSize: 14}}>
        {children}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert;
