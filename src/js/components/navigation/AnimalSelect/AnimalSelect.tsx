import React from 'react';
import animalDefault from 'images/custom/default-animal.png';
import addPetWhiteBgIcon from 'images/icons/addPetWhiteBg.svg';
import addPetDarkBgIcon from 'images/icons/addPetDarkBg.svg';
import {IAnimalBase} from "../../../models/Animal";

import {
  BorderIcon
} from "../../common/Icons/Icons";
import css from './AnimalSelect.module.scss';


interface IProps {
  animals: Array<IAnimalBase>,
  onChange: (id: number) => void,
  onAddClick?: () => void,
  darkBg?: boolean
}

const AnimalSelect = ({animals, onChange, onAddClick, darkBg = true}: IProps) => {
  return (
    <div className={darkBg ? css.darkBgWrapper : css.whiteBgWrapper}>

      {animals.map(animal => (
        <AnimalBadge animal={animal}
                     key={animal.id}
                     onClick={() => onChange(animal.id)}
                     darkBg={darkBg}/>
      ))}

      <div className={`${css.AnimalBadge} ${css.addBtn}`}>
        <img className={css.addPet} src={darkBg ? addPetDarkBgIcon : addPetWhiteBgIcon} alt="img" onClick={onAddClick}/>
      </div>

    </div>
  )
}

export default AnimalSelect;

interface IBadgeProps {
  animal: IAnimalBase;
  onClick?: () => void,
  darkBg?: boolean
}

const AnimalBadge = ({animal, darkBg, onClick}: IBadgeProps) => {
  return (
    <div title={animal.name} onClick={onClick} className={`${css.AnimalBadge} ${animal.current && css.current}`}>
      <img src={animal.image || animalDefault} alt="Animal" className={css.avatar}
           style={{opacity: animal.current ? 1 : 0.8}}/>
      {<BorderIcon className={css.borderCurrent} stroke={
        darkBg ? animal.current ? "white" : css.colorBgPrimary : animal.current ? css.colorBgPrimary : 'white'}/>}
    </div>)
}
