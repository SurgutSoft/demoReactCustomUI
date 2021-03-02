import React from 'react';

import styles from './Dashboard.module.scss';
import {IAnimalBase} from "../../models/Animal";
import IconButton from "../../components/common/Icons/IconButton";
import {SidebarIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';

interface IProps {
  animal: IAnimalBase,
  onMenuClick: () => void;
}

const MobileHead = ({animal, onMenuClick}: IProps) => {

  return (
    <div className={styles.mobileHead}>

      <div className={styles.photo}>
        <img src={animal.image} alt=""/>
      </div>

      <Link to="/animal">
        <div className={styles.darkcover}/>

        <div className={styles.photoBottom}/>
        <h2>{animal.name}</h2>

      </Link>

      <IconButton onClick={onMenuClick} className={styles.menuBtn}><SidebarIcon
        className={styles.menuIcon}/></IconButton>
    </div>
  )
}

export default MobileHead;
