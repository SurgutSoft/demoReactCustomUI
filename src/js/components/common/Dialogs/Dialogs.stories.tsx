import React from 'react';
import '../../../../styles/index.scss';
import {FOLDER_CONTROLS} from "../../../consts/storyBook";
import PopupMenu from './PopupMenu';
import Button from "../Button/Button";
import Alert from "./Alert";

export default {
  title: `${FOLDER_CONTROLS}/Dialogs`
};


export const PopupMenu_ = () => {
  let onClick = () => {
  };
  return (
    <div>
      <PopupMenu items={[
        {
          label: 'Edit item', onClick
        },
        {
          label: 'Delete item', onClick
        },
        {
          label: 'Share item', onClick
        }
      ]}/>
    </div>
  );
};

export const Alert_ = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  return (
    <div>
      <Button onClick={() => setSuccessMessage('Success message!')}>Success notification</Button>
      <Alert
        onClose={() => setSuccessMessage('')}
        open={successMessage !== ''}>
        {successMessage}
      </Alert>

      <br/>

      <Button onClick={() => setErrorMessage('Error message!')}>Error notification</Button>
      <Alert
        onClose={() => setErrorMessage('')}
        type={'error'}
        open={errorMessage !== ''}>
        {errorMessage}
      </Alert>
    </div>
  );
};


