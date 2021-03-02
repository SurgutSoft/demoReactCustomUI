import React from 'react';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import css from './Sidebar.module.scss';
import animalStore from '../../../store/AnimalStore';
import { ReactComponent as LogoImg } from '../../../../images/logo/logoWhite.svg';
import bigDogFootIcon from "../../../../images/custom/bigDogFoot.svg";
import AnimalSelect from "../AnimalSelect/AnimalSelect";
import {
  AboutIcon,
  SupportIcon,
  CloseIcon,
  PlusIcon,
  FaceIcon,
  PaletteIcon,
  SettingsIcon,
  NotificationsIcon
} from "../../common/Icons/Icons";
import {Path} from "../../../consts/router";
import IconButton from "../../common/Icons/IconButton";
import {useHistory} from "react-router";

interface IProps {
  onClose: () => void,
}

const Sidebar = ({onClose}: IProps) => {
  const {
    animals,
    setAnimalId,
  } = animalStore;

  const history = useHistory();
  const onAddAnimalClick = () => {
    history.push(Path.animalNew);
    onClose();
  }
  return (

    <div className={css.sidebar}>
      <div className={css.header}>
        <div className={css.logo}>
          <div>
            <LogoImg/>
            <IconButton onClick={onClose} className={css.closeMenu}><CloseIcon/></IconButton>
            <img className={css.bigFootIcon} src={bigDogFootIcon} alt="img"/>
          </div>
        </div>


        <div className={css.animals}>
          <AnimalSelect animals={animals} darkBg={true} onChange={setAnimalId} onAddClick={onAddAnimalClick}/>
        </div>
      </div>

      <div className={css.menuItem}>
        <div>
          <Link to={Path.account} onClick={onClose}>
            <FaceIcon className={css.left}/>
            <div>My Account</div>
          </Link>

          <Link to={Path.notifications} onClick={onClose}>
            <NotificationsIcon className={css.left}/>
            <div>Notifications</div>
          </Link>

          <Link to={Path.dogPark} onClick={onClose}>
            <AboutIcon className={css.left}/>
            <div>Community Dog Park</div>
          </Link>

          <Link to={Path.bowlColors} onClick={onClose}>
            <PaletteIcon className={css.left}/>
            <div>Bowl Light Color Meaning</div>
          </Link>

          <Link to={Path.settings} onClick={onClose}>
            <SettingsIcon className={css.left}/>
            <div>Settings</div>
          </Link>

          <Link to={Path.about} onClick={onClose}>
            <AboutIcon className={css.left}/>
            <div>About</div>
          </Link>
        </div>

        <div className={css.wrapperButtons}>
          <div className={css.btnblock}>
            <Button type="primary" size="large"><PlusIcon fill="white"/> Add Bowl</Button>
            <Button type="default" size="large"><SupportIcon/> Customer Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;