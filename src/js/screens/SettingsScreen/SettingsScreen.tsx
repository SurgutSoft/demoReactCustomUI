import React from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';
import {Path} from "../../consts/router";
import settings from '../../store/SettingsStore';
import styles from './SettingsScreen.module.scss';
import Select from "../../components/common/Select/Select";
import {Unit} from "../../consts/common";
import moment from 'moment';
import 'moment-timezone';
import {observer} from "mobx-react-lite";
import {Timezones} from "../../consts/timezones";
import userStore from "../../store/UserStore";

const SettingsScreen = observer(() => {
  const user = userStore.user;

  return (
    <div className="screen">
      <header>
        <Link to={Path.home}><IconButton><BackIcon/></IconButton></Link>
        <h3>Settings</h3>
        <div>
        </div>
      </header>
      <main>
        <div className={styles.content}>
          <Select label={"Timezone"} value={user ? user.timezone + '' : ''} onChange={(value) => {
            userStore.onChangeField('timezone', value);
            userStore.save();
            moment.tz.setDefault(value);
          }} options={Timezones}/>

          <p className={styles.caption}>
            You should provide your actual Timezone to setup actual meal times on the bowl.
            <br/>
            Current time: {moment().format('lll')}
          </p>

          <br/>

          <Select label={"Weight Unit"} value={settings.unit} onChange={settings.setUnit} options={[
            {value: Unit.cup, label: 'Cups'},
            {value: Unit.gram, label: 'Grams'}
          ]}/>

          <p className={styles.caption}>
            This option affects UI only
          </p>


        </div>
      </main>
    </div>
  );

});

export default SettingsScreen;
