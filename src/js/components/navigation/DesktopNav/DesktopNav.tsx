import React from 'react';
import { ReactComponent as LogoImg } from '../../../../images/logo/logoColor.svg';

import styles from './DesktopNav.module.scss';

import AnimalSelect from "../AnimalSelect/AnimalSelect";
import {IAnimalBase} from "../../../models/Animal";
import IconButton from "../../common/Icons/IconButton";
import {SidebarIcon} from "../../common/Icons/Icons";

interface IProps {
  onMenuClick: () => void;
  onChange: (id: number) => void;
  onAddClick: () => void;
  animals: Array<IAnimalBase>
}

const DesktopNav = ({onMenuClick, onChange, onAddClick, animals}: IProps) => {

  return (
    <div className={styles.wrapper}>
      <IconButton onClick={onMenuClick} className={styles.menuBtn}><SidebarIcon/></IconButton>
      <AnimalSelect animals={animals} darkBg={false} onChange={onChange} onAddClick={onAddClick}/>

      <LogoImg className={styles.logo}/>
    </div>
  )
}

export default DesktopNav;
