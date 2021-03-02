import React, {useEffect} from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';
import {Path} from "../../consts/router";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import userStore from "../../store/UserStore";
import {observer} from "mobx-react-lite";
import styles from './UserScreen.module.scss';

const UserScreen = observer(() => {

    const user = userStore.editableUser;
    const onChangeField = userStore.onChangeField;
    const onSaveClick = userStore.save;
    const onEnterPress = (e: any) => {
      if (e.key === 'Enter') onSaveClick();
    };
    useEffect(() => {
      userStore.resetChanges();
      // eslint-disable-next-line
    }, []);

    return (
      <div className="screen" onKeyPress={onEnterPress}>
        <header className={styles.header}>

          <Link to={Path.home}><IconButton><BackIcon/></IconButton></Link>
          <h3>Your Account</h3>
          <Button type="text" disabled={userStore.noChanges} onClick={onSaveClick}>
            Save
          </Button>
        </header>
        <main>
          <div className={styles.content}>
            <Input label="First name" value={user ? user.firstName : ''}
                   error={user?.firstName === ''}
                   onChange={(value) => onChangeField('firstName', value)}/><br/><br/>

            <Input label="Last name" value={user ? user.lastName : ''}
                   error={user?.lastName === ''}
                   onChange={(value) => onChangeField('lastName', value)}/><br/><br/>

            <Input label="Email" value={user ? user.email : ''}
                   error={user?.email === ''}
                   onChange={(value) => onChangeField('email', value)}/><br/><br/>
            <Input label="Phone number" value={user ? user.phone : ''} disabled/><br/><br/>

          </div>
        </main>
      </div>
    )
  }
)

export default UserScreen;
