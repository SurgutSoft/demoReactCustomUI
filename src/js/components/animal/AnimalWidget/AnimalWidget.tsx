import React from "react";
import {Animal} from "../../../models/Animal";

import bodyTypeIcon from "images/animal/bodyType.svg";
import activityIcon from "images/animal/activity.svg";
import infoIcon from "images/icons/info.svg";
import animalPhotoBottom from "images/custom/animalPhotoBottom.svg";
import editIcon from "images/animal/edit.svg";
import css from './AnimalWidget.module.scss';
import {getActivityType, getBodyType} from "js/consts/common";


interface IProps {
  animal: Animal;
  isMobile?: boolean;
}

const AnimalWidget = ({animal, isMobile}: IProps) => {
  return (
    <>
      {animal &&
        <div className={isMobile ? css.widgetWrapper : css.wrapperDesktop}>
          <div className={css.photoWrapper}>
            <img className={css.photo} src={animal.image} alt="" />
            <div className={css.bottomWrapper}>
              <img className={css.editIcon} src={editIcon} alt="" />
              <img className={css.photoBottom} src={animalPhotoBottom} alt="" />
            </div>
          </div>

          <div className={css.infoWrapper}>
            <div className={css.name}>
              <strong>{animal.name}</strong>
            </div>

            <div className={css.commonInfo}>
              <span>{animal.breed},</span>{' '}
              <span className="nowrap">{animal.weight} lb,</span>{' '}
              <span className="nowrap">{animal.years} years</span>
            </div>

            <div className={css.bodyInfoWrapper}>
              <div className={css.body}>
                <img src={bodyTypeIcon} alt="" />
                <span>{getBodyType(animal.bodyType)}</span>
              </div>

              <div className={css.divider} />

              <div className={css.body}>
                <img src={activityIcon} alt="" />
                <span>{getActivityType(animal.activityLevel)}</span>
              </div>
            </div>

            <div className={css.caloriesWrapper}>
              <span className={css.title}>Daily calories</span>
              <div className={css.recommendedBy}>
                <span>recommended by Obe</span>
                <img src={infoIcon} alt="" />
              </div>

              <div className={css.kcalWrapper}>
                <div className={css.kcal}>{animal.kcalRecommended}</div>
                <div className={css.kcalLeft}>
                  <span>kcal</span>
                  <span>per day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}


export default AnimalWidget;
