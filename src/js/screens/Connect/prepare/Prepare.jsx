import React from 'react';

import {ReactComponent as Logo} from '../../../../images/logo/logoColor.svg';
import Button from "../../../components/common/Button/Button";

// const modalContent = (<div className="modal-content">
//     <p>
//         Please restart the smart bowl{'\n'}
//         in order to swith to{'\n'}
//         Connecting mode
//     </p>
//     <p><b>Just eject the battery{'\n'}
//         for one second
//     </b></p>
// </div>);

// const onModalOpen = () => {
//     modal({
//     title: <span>Reset power</span>,
//     content: modalContent,
//     icon: <span><PowerIcon /></span>,
//     okText: 'Ok',
//     cancelText: 'Support',
//     cancelButtonProps: {
//         type: 'link'
//     },
//     className: 'power-modal',
//     width: 323,
//     onOk() {
//       return new Promise((resolve, reject) => {
//         setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//       }).catch(() => console.log('Oops errors!'));
//     },
//     onCancel() {
//         return modal.destroy;
//     },
//   });
// }

export default function Prepare({ onConfirmStep }) {
  return (
    <div className="prepare">
        <p className="step-title">PREPARE THE BOWL</p>
        <div className="step-circle">
            <div className="blink" />
            <Logo />
        </div>
        <p className="details">
            Make sure that {'\n'} your Bowl is in the Connecting mode:
            {'\n'}The color LED is flashing green/orange color
        </p>
        <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            onClick={onConfirmStep}>
            It is blinking. Continue
        </Button>
        <Button
            type="link"
             >
            It's not blinking. What's wrong?
        </Button>
    </div>
  );
}