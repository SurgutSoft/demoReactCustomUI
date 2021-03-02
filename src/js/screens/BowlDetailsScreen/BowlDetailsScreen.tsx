import React from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import { BackIcon } from "../../components/common/Icons/Icons";
import { Link, useParams } from 'react-router-dom';
import bowlStore from '../../store/BowlStore';
import { Path } from "../../consts/router";
import Button from "../../components/common/Button/Button";
import { BowlType } from "../../consts/common";
import PopupMenu from "../../components/common/Dialogs/PopupMenu";

import bowlIcon from "../../../images/bowl/bowl.svg";
import wifiIcon from "../../../images/icons/wifi.svg";
import css from './BowlDetailsScreen.module.scss';
import BatteryIcon from 'js/components/common/Icons/BatteryIcon/BatteryIcon';

interface Params {
  type: string;
}

const BowlDetailsScreen = () => {

  const params = useParams<Params>();
  const bowl = params.type === BowlType.food ? bowlStore.foodBowl : bowlStore.waterBowl;

  const actionsMenu = [{
    label: 'Tare bowl', onClick: () => {
    }
  },
    {
      label: 'Change type', onClick: () => {
      }
    }, {
      label: 'Reassign to other pet', onClick: () => {
      }
    }, {
      label: 'Reset/reconnect', onClick: () => {
      }
    }]

  return (
    <div className="screen">
      <header>
        <Link to={Path.home}><IconButton><BackIcon/></IconButton></Link>
        <h3>Bowl Details</h3>
        <div>
          <PopupMenu items={actionsMenu}/>
        </div>
      </header>
      <main>
        {bowl &&
        <div className={css.content}>
          <div className={css.titleWrapper}>
            <img src={bowlIcon} alt=""/>
            <div className={css.name}>
              {bowl.type} bowl
            </div>
            <div className={css.titleInfo}>
              <span>Device ID: </span>
              <span>{bowl.id}</span>
            </div>
            <div className={css.titleInfo}>
              <span>Firmware version: </span>
              <span>{bowl.version}</span>
            </div>
          </div>

          <div className={css.bowlInfoWrapper}>
            <div className={css.title}>Bowl State</div>
            <div className={css.row}>
              <div>Battery level</div>
              <div>
                {bowl.battery}% &nbsp;
                <BatteryIcon level={bowl.battery}/>
              </div>
            </div>

            <div className={css.row}>
              <div>Wifi level</div>
              <div>
                <span>{bowl.wifiLevelTxt}</span> &nbsp;
                <img src={wifiIcon} alt=""/>
              </div>
            </div>

            <div className={css.row}>
              <div>Last sync time</div>
              <div>{bowl.updatedAt.fromNow()}</div>
            </div>

            <div className={css.row}>
              <div>Last weight</div>
              <div>{`${Math.round(bowl.levelGrams)} gm / ${bowl.levelCups.toFixed(1)} cups`}</div>
            </div>
          </div>

          <div className={css.bowlInfoWrapper}>
            <div className={css.title}>Bowl Settings</div>
            <div className={css.row}>
              <div>Bowl type</div>
              <div>{bowl?.isFood ? 'Food' : 'Water'}</div>
            </div>

            <div className={css.row}>
              <div>Tare weight</div>
              <div>{`${bowl.tareWeight} gm`}</div>
            </div>
          </div>

          <Link to={Path.bowlColors}>
            <Button className={css.bowlIndications} type="details">Bowl Indications</Button>
          </Link>
        </div>
        }
      </main>
    </div>
  );
}

export default BowlDetailsScreen;
