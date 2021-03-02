import React from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import styles from './MealPlanScreen.module.scss';
import animalStore from '../../store/AnimalStore';
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router";


const MealPlanScreen = observer(() => {
  const history = useHistory();
  const animal = animalStore.current;
  // const mealPlan = animalStore.mealPlan;
  // const dataUnit = settings.unit;
  //

  return (
    <div className="screen">
      <header className={styles.header}>
        <IconButton onClick={history.goBack}><BackIcon/></IconButton>
        <h3>{animal && `${animal.name}'s Meal Plan`}</h3>
        <div>
        </div>
      </header>

      <main className={styles.content}>

        <p>Not ready yet</p>


      </main>
    </div>
  );
})

export default MealPlanScreen;
