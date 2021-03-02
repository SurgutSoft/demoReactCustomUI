import React from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';
import {Path} from "../../consts/router";
import Button from "../../components/common/Button/Button";
import styles from './AnimalViewScreen.module.scss';
import animalStore from '../../store/AnimalStore';
import settings from '../../store/SettingsStore';
import {observer} from "mobx-react-lite";
import AnimalWidget from "../../components/animal/AnimalWidget/AnimalWidget";
import MealPlanWidget from "../../components/animal/MealPlanWidget/MealPlanWidget";

const AnimalViewScreen = observer(() => {
  const animal = animalStore.current;

  return (
    <div className="screen">
      <header className={styles.header}>
        <Link to={Path.home}><IconButton><BackIcon /></IconButton></Link>
        <h3>{animal && `${animal.name}'s Details`}</h3>
        <div>
          <Link to={Path.animalEdit}>
            <Button type="text">Edit</Button>
          </Link>
        </div>
      </header>
      {animal &&
        <main className={styles.content}>
          <AnimalWidget animal={animal} />
          {animalStore.mealPlan &&
            <MealPlanWidget mealPlan={animalStore.mealPlan} unit={settings.unit}  />}
        </main>}
    </div>
  );
}
)

export default AnimalViewScreen;
